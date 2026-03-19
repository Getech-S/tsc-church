"use server";

export async function getYoutubeVideos(
    pageToken: string = "", 
    searchQuery: string = "", 
    category: string = "All",
    playlistId: string = "" 
) {
    const API_KEY = process.env.YOUTUBE_API_KEY;
    const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

    const FETCH_LIMIT = 50; 
    const REVALIDATE_TIME = 7200; 

    if (!API_KEY || !CHANNEL_ID) throw new Error("Missing credentials");

    try {
        let rawItems = [];
        let apiNextPageToken = null;

        // 1. Fetch from correct source
        if (playlistId) {
            const url = `https://www.googleapis.com/youtube/v3/playlistItems?key=${API_KEY}&playlistId=${playlistId}&part=snippet,contentDetails&maxResults=${FETCH_LIMIT}&pageToken=${pageToken}`;
            const res = await fetch(url, { next: { revalidate: REVALIDATE_TIME } });
            const data = await res.json();
            rawItems = data.items || [];
            apiNextPageToken = data.nextPageToken || null;
        } else if (searchQuery) {
            const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=id&order=date&maxResults=${FETCH_LIMIT}&type=video&q=${encodeURIComponent(searchQuery + " -testimony")}&pageToken=${pageToken}`;
            const res = await fetch(url);
            const data = await res.json();
            rawItems = data.items || [];
            apiNextPageToken = data.nextPageToken || null;
        } else {
            const uploadsId = CHANNEL_ID.replace(/^UC/, "UU");
            const url = `https://www.googleapis.com/youtube/v3/playlistItems?key=${API_KEY}&playlistId=${uploadsId}&part=snippet,contentDetails&maxResults=${FETCH_LIMIT}&pageToken=${pageToken}`;
            const res = await fetch(url, { next: { revalidate: REVALIDATE_TIME } });
            const data = await res.json();
            rawItems = data.items || [];
            apiNextPageToken = data.nextPageToken || null;
        }

        // 2. Get detailed info
        const videoIds = rawItems.map((item: any) => 
            item.contentDetails?.videoId || item.id?.videoId || item.id
        ).filter(Boolean).join(",");

        const detailsRes = await fetch(`https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${videoIds}&part=snippet,contentDetails`);
        const detailsData = await detailsRes.json();

        const videos = (detailsData.items || []).map((item: any) => ({
            id: item.id,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.medium?.url,
            duration: item.contentDetails.duration,
        })).filter((v: any) => {
            if (playlistId) return true; 
            const isShort = !v.duration.includes("H") && !v.duration.includes("M");
            return !v.title.toLowerCase().includes("testimony") && !isShort;
        });

        return {
            videos, // Returning all 50 (or filtered count)
            nextPageToken: apiNextPageToken
        };
    } catch (e) {
        return { videos: [], nextPageToken: null };
    }
}

export async function getLiveOrLatestSermon() {
    const API_KEY = process.env.YOUTUBE_API_KEY;
    const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

    if (!API_KEY || !CHANNEL_ID) throw new Error("Missing credentials");

    try {
        // 1. Try to find an active Live Stream
        const liveSearchUrl = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&type=video&eventType=live`;
        const liveRes = await fetch(liveSearchUrl, { cache: 'no-store' }); // Don't cache live checks
        const liveData = await liveRes.json();

        if (liveData.items && liveData.items.length > 0) {
            return {
                videoId: liveData.items[0].id.videoId,
                title: liveData.items[0].snippet.title,
                isLive: true
            };
        }

        // 2. Fallback: Get the latest uploaded video if not live
        // We use your existing logic of UU (Uploads Playlist) for efficiency
        const uploadsId = CHANNEL_ID.replace(/^UC/, "UU");
        const latestUrl = `https://www.googleapis.com/youtube/v3/playlistItems?key=${API_KEY}&playlistId=${uploadsId}&part=snippet,contentDetails&maxResults=1`;
        
        const latestRes = await fetch(latestUrl, { next: { revalidate: 3600 } });
        const latestData = await latestRes.json();

        if (latestData.items && latestData.items.length > 0) {
            return {
                videoId: latestData.items[0].contentDetails.videoId,
                title: latestData.items[0].snippet.title,
                isLive: false
            };
        }

        return { videoId: null, title: "", isLive: false };
    } catch (e) {
        console.error("Youtube Live Fetch Error:", e);
        return { videoId: null, title: "", isLive: false };
    }
}