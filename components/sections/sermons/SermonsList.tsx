"use client";

import { useState, useEffect, useCallback } from "react";
import { getYoutubeVideos } from "@/app/actions/getYoutubeVideos";
import { Loader2, PlayCircle, Search } from "lucide-react";
import Image from "next/image";

interface Video {
    id: string;
    title: string;
    thumbnail: string;
}

const TABS = ["All", "Sermons", "Teachings"];

export function SermonsList() {
    const [videos, setVideos] = useState<Video[]>([]);
    const [nextPageToken, setNextPageToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);

    // 🔍 Filter States
    const [activeTab, setActiveTab] = useState("All");
    const [searchText, setSearchText] = useState("");
    const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

    // 1. Centralized Fetch Function
    // This function handles both initial load and filtering
    const fetchVideos = useCallback(async (pageToken: string, isLoadMore: boolean) => {
        try {
            if (!isLoadMore) setLoading(true);
            else setLoadingMore(true);

            // Determine the search query based on Tab + Search Bar
            let query = "";

            if (searchText) {
                // If user typed something, that takes priority
                query = searchText;
            } else if (activeTab !== "All") {
                // Otherwise, use the tab name (e.g., "Sermon" or "Teaching")
                // Removing 's' to make it broader (Sermons -> Sermon)
                query = activeTab.slice(0, -1);
            }

            const data = await getYoutubeVideos(pageToken, query)

            if (isLoadMore) {
                setVideos((prev) => [...prev, ...data.videos]);
            } else {
                setVideos(data.videos);
            }

            setNextPageToken(data.nextPageToken);
        } catch (error) {
            console.error("Failed to load videos", error);
        } finally {
            setLoading(false);
            setLoadingMore(false);
        }
    }, [activeTab, searchText]);

    // 2. Initial Load & Tab Change & Search Enter
    useEffect(() => {
        // Reset pagination and load new list whenever Tab changes
        setNextPageToken(null);
        fetchVideos("", false);
    }, [activeTab, fetchVideos]); // Re-run when Tab changes

    // 3. Handle Search Submit (Enter Key)
    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setActiveTab("All"); // Reset tab when searching custom text
        setNextPageToken(null);
        fetchVideos("", false);
    };

    // 4. Handle Load More
    const handleLoadMore = () => {
        if (nextPageToken) {
            fetchVideos(nextPageToken, true);
        }
    };

    return (
        <section className="bg-white py-16 px-6 md:px-12">
            <div className="mx-auto max-w-[1280px]">

                {/* 1. Header & Filters Container */}
                <div className="flex flex-col gap-8 mb-12">

                    {/* Header */}
                    <div className="text-center">
                        <span className="font-caveat text-[28px] text-[#DD5F4C]"
                            style={{
                                fontVariantNumeric: "lining-nums tabular-nums",
                                fontFeatureSettings: '"liga" off, "calt" off',
                                fontFamily: "var(--font-caveat)",
                            }}
                        >Latest Messages</span>
                        <h2 className="text-[36px] md:text-[42px] font-bold text-gray-900">Watch Our Sermons</h2>
                    </div>

                    {/* 2. Tabs & Search Bar Row */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-gray-200 pb-2">

                        {/* TABS */}
                        <div className="flex items-center gap-6 md:gap-8 overflow-x-auto w-full md:w-auto">
                            {TABS.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => {
                                        setActiveTab(tab);
                                        setSearchText(""); // Clear search when clicking a tab
                                    }}
                                    className={`text-[16px] font-medium pb-2 transition-all whitespace-nowrap ${activeTab === tab
                                        ? "text-[#DD5F4C] border-b-2 border-[#DD5F4C]"
                                        : "text-gray-500 hover:text-gray-900"
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* SEARCH BAR */}
                        <form onSubmit={handleSearchSubmit} className="relative w-full md:w-[350px]">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                <Search size={18} />
                            </div>
                            <input
                                type="text"
                                placeholder="Search Sermons or Teachings..."
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                                className="w-full pl-11 pr-4 py-3 rounded-[100px] border border-gray-200 focus:outline-none focus:border-[#DD5F4C] focus:ring-1 focus:ring-[#DD5F4C] text-[14px] bg-white transition-all"
                            />
                        </form>

                    </div>
                </div>

                {/* 3. Video Grid */}
                {loading ? (
                    <div className="flex justify-center py-20">
                        <Loader2 className="animate-spin text-[#DD5F4C]" size={40} />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {videos.length > 0 ? (
                            videos.map((video) => (
                                <div
                                    key={video.id}
                                    className="group bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col h-full"
                                >
                                    {/* VIDEO PLAYER / THUMBNAIL */}
                                    <div className="relative h-[220px] w-full bg-black">
                                        {playingVideoId === video.id ? (
                                            <iframe
                                                width="100%"
                                                height="100%"
                                                src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
                                                title={video.title}
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                className="absolute inset-0"
                                            ></iframe>
                                        ) : (
                                            <button
                                                onClick={() => setPlayingVideoId(video.id)}
                                                className="relative w-full h-full block cursor-pointer group"
                                            >
                                                <Image
                                                    src={video.thumbnail}
                                                    alt={video.title}
                                                    fill
                                                    className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                                />
                                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                                                    <PlayCircle className="text-white opacity-90 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" size={60} />
                                                </div>
                                            </button>
                                        )}
                                    </div>

                                    {/* TITLE */}
                                    <div className="p-5 flex flex-col grow">
                                        <h3 className="text-[16px] md:text-[18px] font-bold text-gray-900 leading-tight line-clamp-2">
                                            {video.title}
                                        </h3>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-12 text-gray-500">
                                No videos found. Try a different search.
                            </div>
                        )}
                    </div>
                )}

                {/* 4. Load More Button */}
                {nextPageToken && !loading && videos.length > 0 && (
                    <div className="flex justify-center mt-12">
                        <button
                            onClick={handleLoadMore}
                            disabled={loadingMore}
                            className="bg-white border-2 border-[#DD5F4C] text-[#DD5F4C] font-bold py-3 px-10 rounded-[100px] hover:bg-[#DD5F4C] hover:text-white transition-all flex items-center gap-2 disabled:opacity-70"
                        >
                            {loadingMore ? (
                                <>
                                    <Loader2 className="animate-spin" size={20} />
                                    Loading...
                                </>
                            ) : (
                                "Load More ..."
                            )}
                        </button>
                    </div>
                )}

            </div>
        </section>
    );
}
