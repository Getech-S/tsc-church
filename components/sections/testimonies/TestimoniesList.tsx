"use client";

import { useState } from "react";
import { Search, Play, X, Loader2 } from "lucide-react";
import Image from "next/image";

// MOCK DATA - Extended to 12 items to demonstrate "Load More"
const ALL_TESTIMONIES = [
    {
        id: 1,
        videoId: "pRPUeB6pvaY",
        title: "God of Mighty Works! Come and See",
        category: "Spiritual Growth",
        duration: "33:30",
    },
    {
        id: 2,
        videoId: "gOR0pFrOaXU",
        title: "We miraculously gave birth to our first child after many years",
        category: "Deliverance",
        duration: "59:45",
    },
    {
        id: 3,
        videoId: "Mp5kqVAksDw",
        title: "Healed of Heart Disease, Bones, Liver and Kidneys",
        category: "Physical Healing",
        duration: "39:20",
    },
    {
        id: 4,
        videoId: "KRpu1FSp8hQ",
        title: "Powerful Delivrance",
        category: "Deliverance",
        duration: "09:00",
    },
    {
        id: 5,
        videoId: "ffcRuAl3ySA",
        title: "Completely Healed of Blood Cancer",
        category: "Physical Healing",
        duration: "12:00",
    },
    {
        id: 6,
        videoId: "f4-cRcxQVNk",
        title: "God Restores His Legs",
        category: "Physical Healing",
        duration: "18:00",
    },
    // --- EXTRA VIDEOS ADDED FOR LOAD MORE TEST ---
    {
        id: 7,
        videoId: "W2xwF5dLcPM", // Placeholder (Reuse)
        title: "Young lady receives deliverance from bondage",
        category: "Deliverance",
        duration: "30:00",
    },
    {
        id: 8,
        videoId: "cAR8LDJhmKM", // Placeholder (Reuse)
        title: "Young man receives deliverance from evil spirits",
        category: "Deliverance",
        duration: "30:00",
    },
    {
        id: 9,
        videoId: "Sd7y_s97CZM", // Placeholder (Reuse)
        title: "Healed & deliverance from addictions",
        category: "Physical Healing",
        duration: "22:00",
    },
    {
        id: 10,
        videoId: "gwwfZxi32ow", // Placeholder (Reuse)
        title: "Healed from throat cancer",
        category: "Physical Healing",
        duration: "16:00",
    },
];

const TABS = ["All", "Physical Healing", "Deliverance", "Spiritual Growth"];
const ITEMS_PER_PAGE = 6; // How many to show initially

export function TestimoniesList() {
    const [activeTab, setActiveTab] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    // 👇 NEW: State to control how many videos are visible
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

    // Filter Logic
    const filteredTestimonies = ALL_TESTIMONIES.filter((video) => {
        const matchesTab = activeTab === "All" || video.category === activeTab;
        const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesTab && matchesSearch;
    });

    // 👇 NEW: Slice the filtered list to only show the visible count
    const displayedTestimonies = filteredTestimonies.slice(0, visibleCount);

    // 👇 NEW: Handle Load More Click
    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 3); // Load 3 more at a time
    };

    // Reset visible count when filters change (so user starts from top)
    const handleFilterChange = (tab: string) => {
        setActiveTab(tab);
        setVisibleCount(ITEMS_PER_PAGE);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        setVisibleCount(ITEMS_PER_PAGE);
    };

    return (
        <section className="bg-white py-20 px-6 md:px-12">
            <div className="mx-auto max-w-[1280px] flex flex-col gap-12">

                {/* CONTROLS HEADER */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-gray-100 pb-6">

                    {/* LEFT: TABS */}
                    <div className="flex gap-6 md:gap-8 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
                        {TABS.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => handleFilterChange(tab)} // Updated handler
                                className={`text-[15px] md:text-[16px] font-medium pb-2 transition-all relative whitespace-nowrap ${activeTab === tab
                                    ? "text-[#E8751A] font-bold"
                                    : "text-gray-500 hover:text-gray-900"
                                    }`}
                            >
                                {tab}
                                {activeTab === tab && (
                                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#E8751A]" />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* RIGHT: SEARCH BAR */}
                    <div className="relative w-full md:w-[350px]">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search Specific testimony..."
                            value={searchQuery}
                            onChange={handleSearchChange} // Updated handler
                            className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 bg-white text-[14px] focus:outline-none focus:border-[#E8751A] transition-colors"
                        />
                    </div>
                </div>

                {/* VIDEO GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {displayedTestimonies.map((video) => (
                        <div
                            key={video.id}
                            className="group cursor-pointer flex flex-col gap-4"
                            onClick={() => setActiveVideo(video.videoId)}
                        >

                            {/* CARD IMAGE CONTAINER */}
                            <div className="relative h-[285px] w-full rounded-[16px] overflow-hidden shadow-sm bg-gray-100">
                                <Image
                                    src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                                    alt={video.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />

                                {/* CENTER PLAY BUTTON */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-[64px] h-[64px] bg-[#E8A020] rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                                        <Play size={28} fill="black" className="text-black ml-1" />
                                    </div>
                                </div>

                                {/* DURATION BADGE */}
                                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                                    <span className="text-white text-[12px] font-medium">
                                        {video.duration}
                                    </span>
                                </div>
                            </div>

                            {/* TITLE */}
                            <h3 className="text-[18px] font-bold text-gray-900 group-hover:text-[#E8751A] transition-colors leading-tight">
                                {video.title}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* LOAD MORE BUTTON */}
                {/* Only show if there are more items to see */}
                {visibleCount < filteredTestimonies.length && (
                    <div className="flex justify-center mt-8">
                        <button
                            onClick={handleLoadMore}
                            className="px-8 py-3 rounded-[100px] border border-[#E8751A] text-[#E8751A] font-bold text-[14px] hover:bg-[#E8751A] hover:text-white transition-all flex items-center gap-2"
                        >
                            Load More ...
                        </button>
                    </div>
                )}

                {/* EMPTY STATE (If search returns nothing) */}
                {filteredTestimonies.length === 0 && (
                    <div className="text-center py-12 text-gray-400">
                        No testimonies found matching your search.
                    </div>
                )}

            </div>

            {/* VIDEO MODAL */}
            {activeVideo && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-in fade-in">
                    <button
                        onClick={() => setActiveVideo(null)}
                        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                    >
                        <X size={48} />
                    </button>
                    <div className="w-full max-w-5xl aspect-video rounded-xl overflow-hidden bg-black border border-white/10">
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                            title="Video Player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="border-none"
                        />
                    </div>
                </div>
            )}

        </section>
    );
}