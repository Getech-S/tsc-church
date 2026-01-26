"use client";

import { useState } from "react";
import { Search, Play, X, ChevronDown } from "lucide-react"; // Added ChevronDown if needed for Load More
import Image from "next/image";

// MOCK DATA - 9 Videos to fill the grid
const ALL_VIDEOS = [
    { id: 1, videoId: "P-JJ2xDO4q8", title: "Secret in Sacrifice", category: "Sermons" },
    { id: 2, videoId: "lYfVxnfd_pQ", title: "Demonology Explained Part 1", category: "Teachings" },
    { id: 3, videoId: "HKGtsgxNPRI", title: "Spirit of Celibacy Explained", category: "Sermons" },
    { id: 4, videoId: "0nCppHViZbk", title: "Spirit of Slavery Explained", category: "Sermons" },
    { id: 5, videoId: "X5fbJ8PDmK0", title: "Demonology Explained Part 2", category: "Teachings" },
    { id: 6, videoId: "7PEohl8GS0w", title: "Demonology Explained Part 3", category: "Teachings" },
    { id: 7, videoId: "B4UK3JvRweQ", title: "Demonic Oppression & Possession Explained", category: "Sermons" },
    { id: 8, videoId: "F-7K30mYHq8", title: "Demonology Explained Part 4", category: "Teachings" },
    { id: 9, videoId: "23A-bWUV3R8", title: "Key to a Happy Marriage", category: "Sermons" },
];

const TABS = ["All", "Sermons", "Teachings"];

export function SermonsList() {
    const [activeTab, setActiveTab] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    // Filter Logic
    const filteredVideos = ALL_VIDEOS.filter((video) => {
        const matchesTab = activeTab === "All" || video.category === activeTab;
        const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesTab && matchesSearch;
    });

    return (
        <section className="bg-white py-20 px-6 md:px-12">
            <div className="mx-auto max-w-[1280px] flex flex-col gap-12">

                {/* CONTROLS HEADER */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-gray-100 pb-6">

                    {/* LEFT: TABS */}
                    <div className="flex gap-8">
                        {TABS.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`text-[16px] font-medium pb-2 transition-all relative ${activeTab === tab
                                    ? "text-[#DD5F4C] font-bold"
                                    : "text-gray-500 hover:text-gray-900"
                                    }`}
                            >
                                {tab}
                                {/* Active Underline */}
                                {activeTab === tab && (
                                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#DD5F4C]" />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* RIGHT: SEARCH BAR */}
                    <div className="relative w-full md:w-[350px]">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search Sermons or Teachings..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 bg-gray-50 text-[14px] focus:outline-none focus:border-[#DD5F4C] transition-colors"
                        />
                    </div>
                </div>

                {/* VIDEO GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {filteredVideos.map((video) => (
                        <div
                            key={video.id}
                            className="group cursor-pointer flex flex-col gap-4"
                            onClick={() => setActiveVideo(video.videoId)}
                        >
                            {/* CARD IMAGE */}
                            <div className="relative h-[285px] w-full rounded-[16px] overflow-hidden shadow-sm">
                                <Image
                                    src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                                    alt={video.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                                {/* Play Button & Label */}
                                <div className="absolute bottom-6 left-6 flex items-center gap-4">
                                    <div className="w-[55px] h-[55px] bg-[#F5BE41] rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                                        <Play size={24} fill="black" className="text-black ml-1" />
                                    </div>
                                    <div className="border-l border-white/50 pl-4 flex flex-col justify-center h-[40px]">
                                        <span className="text-white text-[12px] font-bold leading-none mb-1">Watch</span>
                                        <span className="text-white text-[12px] font-bold leading-none">Sermon</span>
                                    </div>
                                </div>
                            </div>

                            {/* TITLE */}
                            <h3 className="text-[18px] font-bold text-gray-900 group-hover:text-[#DD5F4C] transition-colors">
                                {video.title}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* LOAD MORE BUTTON */}
                <div className="flex justify-center mt-8">
                    <button className="px-8 py-3 rounded-[100px] border border-[#DD5F4C] text-[#DD5F4C] font-bold text-[14px] hover:bg-[#DD5F4C] hover:text-white transition-all flex items-center gap-2">
                        Load More +++
                    </button>
                </div>

            </div>

            {/* VIDEO MODAL (Reused) */}
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