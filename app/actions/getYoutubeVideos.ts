"use server";

// 👇 FIX: Added 'searchQuery' as the second parameter here
export async function getYoutubeVideos(pageToken: string = "", searchQuery: string = "") {
    const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
    const CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;
    const MAX_RESULTS = 1;

    if (!API_KEY || !CHANNEL_ID) {
        throw new Error("Missing YouTube API credentials");
    }

    // 1. Base URL
    let baseUrl = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}&type=video&eventType=completed`;

    // 2. Build the Search Query (q)
    let qParam = "-testimony"; // Default: Exclude testimonies

    if (searchQuery) {
        // If a search term exists, add it to the filter
        qParam = `${searchQuery} -testimony`;
    }

    const finalUrl = `${baseUrl}&q=${encodeURIComponent(qParam)}&pageToken=${pageToken}`;

    const res = await fetch(finalUrl, { cache: "no-store" });
    const data = await res.json();

    if (!res.ok) {
        console.error("YouTube API Error:", data);
        return { videos: [], nextPageToken: null };
    }

    const videos = data.items.map((item: any) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.high.url,
    }));

    return {
        videos,
        nextPageToken: data.nextPageToken || null,
    };
}