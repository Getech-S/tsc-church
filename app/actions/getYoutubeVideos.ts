"use server";

export async function getYoutubeVideos(pageToken: string = "", searchQuery: string = "", category: string = "All") {
    const API_KEY = process.env.YOUTUBE_API_KEY;
    const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

    // We fetch more items (50) to allow for filtering (removing shorts/live)
    // while still having enough left to fill the page (9).
    const FETCH_LIMIT = 50;
    const RETURN_LIMIT = 9;
    const REVALIDATE_TIME = 7200; // 1 Hour Cache

    if (!API_KEY || !CHANNEL_ID) {
        throw new Error("Missing YouTube API credentials");
    }

    let rawItems = [];
    let nextPageToken = null;

    // ---------------------------------------------------------
    // STRATEGY:
    // 1. If Category == "Teachings": Use Search API with eventType=completed (Live Archives)
    // 2. All other cases: Use standard logic (Uploads or Search) then filter manually.
    // ---------------------------------------------------------

    const isTeachingTab = !searchQuery && category === "Teachings";

    if (isTeachingTab) {
        // >> TEACHINGS MODE (Live Only)
        const baseUrl = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=id&order=date&maxResults=${FETCH_LIMIT}&type=video&eventType=completed`;
        const searchUrl = `${baseUrl}&pageToken=${pageToken}`;

        const res = await fetch(searchUrl, { next: { revalidate: REVALIDATE_TIME } });
        const data = await res.json();

        if (!data.items?.length) return { videos: [], nextPageToken: null };

        // Pass IDs to next step to get details
        rawItems = data.items;
        nextPageToken = data.nextPageToken || null;
    }
    else if (!searchQuery) {
        // >> DEFAULT MODE (Uploads Playlist - Mix of everything)
        const uploadsPlaylistId = CHANNEL_ID.replace(/^UC/, "UU");
        const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?key=${API_KEY}&playlistId=${uploadsPlaylistId}&part=snippet,contentDetails&maxResults=${FETCH_LIMIT}&pageToken=${pageToken}`;

        const res = await fetch(playlistUrl, { next: { revalidate: REVALIDATE_TIME } });
        const data = await res.json();

        if (!res.ok) {
            console.error("YouTube Playlist Error:", data);
            return { videos: [], nextPageToken: null };
        }

        rawItems = data.items || [];
        nextPageToken = data.nextPageToken || null;
    }
    else {
        // >> SEARCH MODE (User typed text)
        const baseUrl = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=id&order=date&maxResults=${FETCH_LIMIT}&type=video`;
        // We add "-testimony" to query to exclude testimonies if needed, or keep it generic
        const qParam = `${searchQuery} -testimony`;
        const searchUrl = `${baseUrl}&q=${encodeURIComponent(qParam)}&pageToken=${pageToken}`;

        const searchRes = await fetch(searchUrl, { next: { revalidate: REVALIDATE_TIME } });
        const searchData = await searchRes.json();

        if (!searchData.items?.length) return { videos: [], nextPageToken: null };

        rawItems = searchData.items;
        nextPageToken = searchData.nextPageToken || null;
    }

    // ---------------------------------------------------------
    // STEP 2: GET VIDEO DETAILS (For Duration & Live Check)
    // ---------------------------------------------------------
    // We need to fetch details for ALL items to check if they are live or shorts
    const videoIds = rawItems.map((item: any) => {
        // Playlist items put ID in contentDetails, Search items put ID in id.videoId
        return item.contentDetails?.videoId || item.id?.videoId || item.id;
    }).join(",");

    if (!videoIds) return { videos: [], nextPageToken: null };

    const detailsUrl = `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${videoIds}&part=snippet,contentDetails,liveStreamingDetails`;

    const detailsRes = await fetch(detailsUrl, { next: { revalidate: REVALIDATE_TIME } });
    const detailsData = await detailsRes.json();

    const detailedItems = detailsData.items.map((item: any) => ({
        id: item.id,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.medium?.url,
        duration: item.contentDetails.duration,
        isLive: !!item.liveStreamingDetails // If this exists, it was a live stream
    }));

    // ---------------------------------------------------------
    // STEP 3: FINAL FILTERING
    // ---------------------------------------------------------
    const cleanVideos = detailedItems.filter((video: any) => {
        // 1. Exclude Testimonies (Double check title)
        if (video.title.toLowerCase().includes("testimony")) return false;

        // 2. Exclude Shorts (Duration check)
        const duration = video.duration || "";
        const isShort = !duration.includes("H") && !duration.includes("M");
        if (isShort) return false;

        // 3. TAB FILTERING LOGIC
        if (category === "Sermons") {
            // SERMONS TAB: Must NOT be live
            if (video.isLive) return false;
        }

        if (category === "Teachings") {
            // TEACHINGS TAB: Must BE live
            // (Note: The search API source above already filters this, but this is a safety double-check)
            if (!video.isLive) return false;
        }

        return true;
    })
        .slice(0, RETURN_LIMIT); // Slice to the requested 9 items

    return {
        videos: cleanVideos,
        nextPageToken: nextPageToken,
    };
}