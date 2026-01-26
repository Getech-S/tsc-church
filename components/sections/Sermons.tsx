"use client";

import { useState } from "react";
import { ChevronRight, Play, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// 👇 PASTE YOUR YOUTUBE VIDEO IDs HERE
const SERMONS = [
    {
        id: 1,
        videoId: "JUmAIkXdcRo", //
        title: "True Fruits Believers Should Bear",
    },
    {
        id: 2,
        videoId: "nWjOdA9X8Ag", //
        title: "Key To A Successful Marriage",
    },
    {
        id: 3,
        videoId: "ogjc04lqV9U", // Replace with real ID
        title: "Do This To Unlock Your Blessings",
    },
];

export function Sermons() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    const handlePlay = (videoId: string) => {
        setActiveVideo(videoId);
        setIsPlaying(true);
    };

    const handleClose = () => {
        setIsPlaying(false);
        setActiveVideo(null);
    };

    return (
        <section className="bg-white py-20 lg:py-28">

            {/* CONTAINER: 1280px Max Width
         - FIXED: Changed 'md:px-0' to 'md:px-12' 
         - This ensures content stays 48px (approx) away from the edge on laptops/desktop
      */}
            <div className="mx-auto max-w-[1280px] px-6 md:px-12 flex flex-col gap-12">

                {/* HEADER ROW */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-6">

                    {/* LEFT: Text Content */}
                    <div className="flex flex-col items-start gap-2">
                        <span className="font-caveat text-[28px] leading-[27px] text-[#DD5F4C] tracking-[0.5px]"
                            style={{
                                fontVariantNumeric: "lining-nums tabular-nums",
                                fontFeatureSettings: '"liga" off, "calt" off',
                                fontFamily: "var(--font-caveat)",
                            }}
                        >
                            Growth
                        </span>
                        <h2 className="text-[40px] md:text-[48px] font-bold text-gray-900 leading-tight">
                            Feed Your Spirit.
                        </h2>
                        <p className="text-[18px] text-gray-500 mt-2 max-w-xl">
                            Access the latest sermons and exclusive teachings to fuel your walk with God.
                        </p>
                    </div>

                    {/* RIGHT: Button */}
                    <Link href="\sermons">
                        <button className="group flex items-center gap-2 rounded-[100px] border border-[#DD5F4C] px-[24px] py-[12px] text-[14px] font-bold text-[#DD5F4C] transition-colors hover:bg-[#DD5F4C] hover:text-white shrink-0">
                            View All Sermons
                            <ChevronRight size={16} />
                        </button>
                    </Link>

                </div>

                {/* GRID: 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {SERMONS.map((video) => (
                        <div key={video.id} className="flex flex-col gap-4 group cursor-pointer" onClick={() => handlePlay(video.videoId)}>

                            {/* VIDEO CARD */}
                            <div className="relative h-[285px] w-full rounded-[16px] overflow-hidden shadow-sm">

                                {/* THUMBNAIL */}
                                <Image
                                    src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                                    alt={video.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* OVERLAY */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                                {/* PLAY BUTTON UI */}
                                <div className="absolute bottom-6 left-6 flex items-center gap-4">

                                    {/* Yellow Circle */}
                                    <div className="w-[50px] h-[50px] bg-[#F5BE41] rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                                        <Play size={20} fill="black" className="text-black ml-1" />
                                    </div>

                                    {/* "Watch Sermon" Label */}
                                    <div className="border-l border-white/50 pl-4 flex flex-col justify-center h-[40px]">
                                        <span className="text-white text-[12px] font-bold leading-none mb-1">
                                            Watch
                                        </span>
                                        <span className="text-white text-[12px] font-bold leading-none">
                                            Sermon
                                        </span>
                                    </div>

                                </div>

                            </div>

                            {/* TITLE */}
                            <h3 className="text-[18px] font-bold leading-[24px] text-gray-900 group-hover:text-[#DD5F4C] transition-colors">
                                {video.title}
                            </h3>

                        </div>
                    ))}
                </div>

            </div>

            {/* VIDEO MODAL */}
            {isPlaying && activeVideo && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-in fade-in duration-300">
                    <button
                        onClick={handleClose}
                        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors cursor-pointer"
                    >
                        <X size={48} />
                    </button>
                    <div className="w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black">
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="border-none"
                        ></iframe>
                    </div>
                </div>
            )}

        </section>
    );
}