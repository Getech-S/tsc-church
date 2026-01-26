"use client";

import { useState } from "react";
import { Search, Play, X } from "lucide-react";
import Image from "next/image";

// MOCK DATA - Categories matched to your tabs
const ALL_TESTIMONIES = [
    {
        id: 1,
        videoId: "pRPUeB6pvaY", // Video ID for Healed and Restored
        title: "God of Mighty Works! Come and See",
        category: "Spiritual Growth",
        duration: "33:30",
    },
    {
        id: 2,
        videoId: "gOR0pFrOaXU", // Video ID for Child Provision from God
        title: "We miraculously gave birth to our first child after many years",
        category: "Emotional",
        duration: "59:45",
    },
    {
        id: 3,
        videoId: "Mp5kqVAksDw", // Testimony 3
        title: "Healed of Heart Disease, Bones, Liver and Kidneys",
        category: "Physical Healing",
        duration: "39:20",
    },
    {
        id: 4,
        videoId: "KRpu1FSp8hQ", // Video ID for Healed of Stomach Tumors and Back Pain After 18 Years
        title: "Powerful Delivrance",
        category: "Physical Healing",
        duration: "09:00",
    },
    {
        id: 5,
        videoId: "ffcRuAl3ySA", // Video ID for Completely Healed of Blood Cancer
        title: "Completely Healed of Blood Cancer",
        category: "Physical Healing",
        duration: "12:00",
    },
    {
        id: 6,
        videoId: "f4-cRcxQVNk", // Video ID for God Restores His Legs
        title: "God Restores His Legs",
        category: "Physical Healing",
        duration: "18:00",
    },
];

const TABS = ["All", "Physical Healing", "Emotional", "Spiritual Growth"];

export function TestimoniesList() {
    const [activeTab, setActiveTab] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    // Filter Logic
    const filteredTestimonies = ALL_TESTIMONIES.filter((video) => {
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
                    <div className="flex gap-6 md:gap-8 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
                        {TABS.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`text-[15px] md:text-[16px] font-medium pb-2 transition-all relative whitespace-nowrap ${activeTab === tab
                                    ? "text-[#DD5F4C] font-bold"
                                    : "text-gray-500 hover:text-gray-900"
                                    }`}
                            >
                                {tab}
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
                            placeholder="Search Specific testimony..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 bg-white text-[14px] focus:outline-none focus:border-[#DD5F4C] transition-colors"
                        />
                    </div>
                </div>

                {/* VIDEO GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {filteredTestimonies.map((video) => (
                        <div
                            key={video.id}
                            className="group cursor-pointer flex flex-col gap-4"
                            onClick={() => setActiveVideo(video.videoId)}
                        >

                            {/* CARD IMAGE CONTAINER */}
                            <div className="relative h-[285px] w-full rounded-[16px] overflow-hidden shadow-sm">
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
                                    <div className="w-[64px] h-[64px] bg-[#F5BE41] rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                                        <Play size={28} fill="black" className="text-black ml-1" />
                                    </div>
                                </div>

                                {/* DURATION BADGE (Bottom Right) */}
                                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                                    <span className="text-white text-[12px] font-medium">
                                        0:00 / {video.duration}
                                    </span>
                                </div>
                            </div>

                            {/* TITLE */}
                            <h3 className="text-[18px] font-bold text-gray-900 group-hover:text-[#DD5F4C] transition-colors leading-tight">
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