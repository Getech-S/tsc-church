"use client";

import { useState, useEffect, useCallback } from "react";
import { getYoutubeVideos } from "@/app/actions/getYoutubeVideos";
import { Loader2, Play, Search } from "lucide-react";
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
    const fetchVideos = useCallback(async (pageToken: string, isLoadMore: boolean) => {
        try {
            if (!isLoadMore) setLoading(true);
            else setLoadingMore(true);

            // We pass the Search Text (if any) AND the Active Tab (Category)
            // The server action will handle the logic of "Live" vs "Not Live"
            const data = await getYoutubeVideos(pageToken, searchText, activeTab);

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

    // 2. Initial Load & Tab Change
    useEffect(() => {
        setNextPageToken(null);
        fetchVideos("", false);
    }, [activeTab, fetchVideos]);

    // 3. Handle Search
    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setActiveTab("All"); // Reset tab to All when searching custom text
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

                {/* Header & Filters */}
                <div className="flex flex-col gap-8 mb-12">
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

                    {/* Tabs & Search */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-gray-200 pb-2">
                        <div className="flex items-center gap-6 md:gap-8 overflow-x-auto w-full md:w-auto">
                            {TABS.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => {
                                        setActiveTab(tab);
                                        setSearchText("");
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

                {/* Video Grid */}
                {loading ? (
                    <div className="flex justify-center py-20">
                        <Loader2 className="animate-spin text-[#DD5F4C]" size={40} />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        {videos.length > 0 ? (
                            videos.map((video) => (
                                <div key={video.id} className="group flex flex-col h-full cursor-pointer" onClick={() => setPlayingVideoId(video.id)}>

                                    {/* VIDEO AREA */}
                                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-sm bg-black">
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
                                            <>
                                                <Image
                                                    src={video.thumbnail}
                                                    alt={video.title}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-90" />
                                                <div className="absolute bottom-5 left-5 flex items-center gap-3">
                                                    <div className="w-12 h-12 bg-[#FFC847] rounded-full flex items-center justify-center pl-1 shadow-lg transition-transform group-hover:scale-110">
                                                        <Play fill="black" className="text-black" size={20} />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-white font-bold text-[13px] leading-tight uppercase tracking-wide opacity-90">Watch</span>
                                                        <span className="text-white font-bold text-[15px] leading-tight">Sermon</span>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    {/* TITLE BELOW IMAGE */}
                                    <h3 className="mt-4 text-[18px] font-bold text-gray-900 leading-snug group-hover:text-[#DD5F4C] transition-colors line-clamp-2">
                                        {video.title}
                                    </h3>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-12 text-gray-500">
                                No videos found. Try a different search.
                            </div>
                        )}
                    </div>
                )}

                {/* Load More Button */}
                {nextPageToken && !loading && videos.length > 0 && (
                    <div className="flex justify-center mt-16">
                        <button
                            onClick={handleLoadMore}
                            disabled={loadingMore}
                            className="px-8 py-3 rounded-full border border-[#E07E6C] text-[#DD5F4C] font-semibold hover:bg-[#FFF5F2] transition-colors flex items-center gap-2 disabled:opacity-50"
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