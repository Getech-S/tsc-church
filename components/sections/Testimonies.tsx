"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import Image from "next/image";

// 👇 PASTE YOUR YOUTUBE VIDEO IDs HERE
const TESTIMONIES = [
    {
        id: 1,
        videoId: "pRPUeB6pvaY", // Video ID for Healed and Restored
        title: "God of Mighty Works! Come and See .",
        duration: "33:30",
    },
    {
        id: 2,
        videoId: "gOR0pFrOaXU", // Video ID for Child Provision from God
        title: "We miraculously gave birth to our first child after many years.",
        duration: "59:45",
    },
    {
        id: 3,
        videoId: "Mp5kqVAksDw", // Testimony 3
        title: "Healed of Heart Disease, Bones, Liver and Kidneys",
        duration: "39:20",
    },
    {
        id: 4,
        videoId: "qA7va6EbSmY", // Video ID for Healed of Stomach Tumors and Back Pain After 18 Years
        title: "Completely Healed of Kidney Failure",
        duration: "09:00",
    },
    {
        id: 5,
        videoId: "ffcRuAl3ySA", // Video ID for Completely Healed of Blood Cancer
        title: "Completely Healed of Blood Cancer",
        duration: "12:00",
    },
    {
        id: 6,
        videoId: "f4-cRcxQVNk", // Video ID for God Restores His Legs
        title: "God Restores His Legs",
        duration: "18:00",
    },
];

export function Testimonies() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    // Navigation Logic
    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === TESTIMONIES.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? TESTIMONIES.length - 1 : prev - 1));
    };

    // Open Modal Logic
    const handlePlay = (videoId: string) => {
        setActiveVideo(videoId);
        setIsPlaying(true);
    };

    // Close Modal Logic
    const handleClose = () => {
        setIsPlaying(false);
        setActiveVideo(null);
    };

    return (
        <section className="bg-[#1B1C1E] py-20 lg:py-28 overflow-hidden relative">

            {/* HEADER */}
            <div className="text-center mb-16 space-y-2">
                <span className="font-caveat text-[28px] text-[#F5BE41] tracking-[0.5px]"
                    style={{
                        fontVariantNumeric: "lining-nums tabular-nums",
                        fontFeatureSettings: '"liga" off, "calt" off',
                        fontFamily: "var(--font-caveat)",
                    }}
                >
                    Real Stories. Real Transformation.
                </span>
                <h2 className="text-white text-[48px] font-bold leading-tight">
                    Lives Transformed by Christ
                </h2>
            </div>

            {/* SLIDER CONTAINER */}
            <div className="relative w-full max-w-[1440px] mx-auto h-[500px] flex items-center justify-center perspective-1000">

                {/* PREV BUTTON (Absolute Left) */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 md:left-12 z-30 p-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
                >
                    <ChevronLeft size={32} />
                </button>

                {/* SLIDES */}
                <div className="relative w-full h-full flex items-center justify-center">
                    {TESTIMONIES.map((video, index) => {
                        // Logic to determine position relative to active slide
                        let position = "hidden";
                        let zIndex = 0;
                        let scale = 0.8;
                        let opacity = 0;
                        let translateX = "0%";

                        if (index === currentIndex) {
                            position = "active";
                            zIndex = 20;
                            scale = 1;
                            opacity = 1;
                            translateX = "0%";
                        } else if (index === (currentIndex - 1 + TESTIMONIES.length) % TESTIMONIES.length) {
                            position = "prev";
                            zIndex = 10;
                            scale = 0.85;
                            opacity = 0.4;
                            translateX = "-60%"; // Move Left
                        } else if (index === (currentIndex + 1) % TESTIMONIES.length) {
                            position = "next";
                            zIndex = 10;
                            scale = 0.85;
                            opacity = 0.4;
                            translateX = "60%"; // Move Right
                        }

                        // If not one of the 3 visible slides, hide it completely
                        if (position === "hidden") return null;

                        return (
                            <div
                                key={video.id}
                                // UPDATED: Added responsive width/height classes
                                // w-[90vw] = 90% of screen width on mobile
                                // md:w-[800px] = Fixed 800px on desktop
                                className="absolute transition-all duration-500 ease-in-out origin-center rounded-[16px] overflow-hidden shadow-2xl bg-gray-900 w-[90vw] h-[250px] md:w-[800px] md:h-[450px]"
                                style={{
                                    // Removed fixed width/height from here, handled by Tailwind classes above
                                    zIndex: zIndex,
                                    opacity: opacity,
                                    transform: `translateX(${translateX}) scale(${scale})`,
                                }}
                            >
                                {/* THUMBNAIL IMAGE (Fetched Automatically from YouTube) */}
                                <Image
                                    src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                                    alt={video.title}
                                    fill
                                    className="object-cover"
                                />

                                {/* OVERLAY GRADIENT (Bottom Up) */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                                {/* PLAY BUTTON (Center) - Only clickable on active slide */}
                                {position === "active" && (
                                    <button
                                        onClick={() => handlePlay(video.videoId)}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] bg-[#F5BE41] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg group cursor-pointer"
                                    >
                                        <Play size={32} fill="black" className="text-black ml-1" />
                                    </button>
                                )}

                                {/* TEXT CONTENT (Bottom) */}
                                <div className="absolute bottom-0 left-0 w-full p-8 flex justify-between items-end">

                                    {/* Title */}
                                    <h3 className="text-white text-[15px] md:text-[24px] font-bold leading-tight max-w-[80%] md:max-w-[70%] drop-shadow-md">
                                        {video.title}
                                    </h3>

                                    {/* DURATION BADGE (Glassmorphism) */}
                                    <div className="bg-black/30 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-white text-[14px] font-medium">
                                        {video.duration}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* NEXT BUTTON (Absolute Right) */}
                <button
                    onClick={nextSlide}
                    className="absolute right-4 md:right-12 z-30 p-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
                >
                    <ChevronRight size={32} />
                </button>

            </div>

            {/* PAGINATION DOTS */}
            <div className="flex justify-center gap-3 mt-8">
                {TESTIMONIES.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-2.5 h-2.5 rounded-full transition-colors ${idx === currentIndex ? "bg-white" : "bg-white/20"
                            }`}
                    />
                ))}
            </div>

            {/* VIDEO MODAL (Overlay) */}
            {isPlaying && activeVideo && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-in fade-in duration-300">

                    {/* Close Button */}
                    <button
                        onClick={handleClose}
                        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors cursor-pointer"
                    >
                        <X size={48} />
                    </button>

                    {/* YouTube Iframe Container */}
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