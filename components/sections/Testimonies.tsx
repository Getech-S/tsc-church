"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const TESTIMONIES = [
  {
    id: 1,
    videoId: "pRPUeB6pvaY",
    title: "God of Mighty Works! Come and See.",
    duration: "33:30",
  },
  {
    id: 2,
    videoId: "gOR0pFrOaXU",
    title: "We miraculously gave birth to our first child after many years.",
    duration: "59:45",
  },
  {
    id: 3,
    videoId: "Mp5kqVAksDw",
    title: "Healed of Heart Disease, Bones, Liver and Kidneys",
    duration: "39:20",
  },
  {
    id: 4,
    videoId: "qA7va6EbSmY",
    title: "Completely Healed of Kidney Failure",
    duration: "09:00",
  },
  {
    id: 5,
    videoId: "ffcRuAl3ySA",
    title: "Completely Healed of Blood Cancer",
    duration: "12:00",
  },
  {
    id: 6,
    videoId: "f4-cRcxQVNk",
    title: "God Restores His Legs",
    duration: "18:00",
  },
];

export function Testimonies() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === TESTIMONIES.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIES.length - 1 : prev - 1));

  const handlePlay = (videoId: string) => {
    setActiveVideo(videoId);
    setIsPlaying(true);
  };

  const handleClose = () => {
    setIsPlaying(false);
    setActiveVideo(null);
  };

  return (
    <section className="bg-[#1B1C1E] py-20 lg:py-24 overflow-hidden relative">

      {/* HEADER */}
      <motion.div
        className="text-center mb-6 space-y-2 px-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span
          className="text-[24px] lg:text-[28px] leading-[12px] text-[#E8751A] tracking-[0.5px]"
          style={{
            fontVariantNumeric: "lining-nums tabular-nums",
            fontFeatureSettings: '"liga" off, "calt" off',
            fontFamily: "var(--font-caveat)",
          }}
        >
         Living proof
        </span>
        <h2 className="text-white text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-bold leading-tight tracking-[-1px]">
          This Is What Actually Happens Here.
        </h2>
      </motion.div>

      {/* SLIDER CONTAINER */}
      <div
        className="relative w-full max-w-[1440px] mx-auto h-[320px] sm:h-[400px] md:h-[500px] flex items-center justify-center"
        style={{ perspective: "1000px" }}
      >

        {/* PREV BUTTON */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-6 md:left-12 z-30 p-2 md:p-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors duration-300"
        >
          <ChevronLeft size={24} className="md:w-8 md:h-8" />
        </button>

        {/* SLIDES */}
        <div className="relative w-full h-full flex items-center justify-center">
          {TESTIMONIES.map((video, index) => {
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
              translateX = "-60%";
            } else if (index === (currentIndex + 1) % TESTIMONIES.length) {
              position = "next";
              zIndex = 10;
              scale = 0.85;
              opacity = 0.4;
              translateX = "60%";
            }

            if (position === "hidden") return null;

            return (
              <div
                key={video.id}
                className="absolute transition-all duration-500 ease-in-out origin-center rounded-[16px] overflow-hidden shadow-2xl bg-gray-900 w-[75vw] h-[260px] sm:w-[80vw] sm:h-[340px] md:w-[800px] md:h-[450px]"
                style={{
                  zIndex,
                  opacity,
                  transform: `translateX(${translateX}) scale(${scale})`,
                }}
              >
                <Image
                  src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                  alt={video.title}
                  fill
                  className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* Play Button — active slide only */}
                {position === "active" && (
                  <button
                    onClick={() => handlePlay(video.videoId)}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[56px] h-[56px] md:w-[80px] md:h-[80px] bg-[#E8A020] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg cursor-pointer"
                  >
                    <Play size={24} fill="white" className="text-white ml-1 md:w-8 md:h-8" />
                  </button>
                )}

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 w-full p-4 md:p-8 flex justify-between items-end gap-4">
                  <h3 className="text-white text-[13px] sm:text-[15px] md:text-[22px] lg:text-[24px] font-bold leading-tight max-w-[75%] drop-shadow-md">
                    {video.title}
                  </h3>
                  <div className="bg-black/30 backdrop-blur-md border border-white/10 px-3 py-1 md:px-4 md:py-2 rounded-full text-white text-[12px] md:text-[14px] font-medium shrink-0">
                    {video.duration}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* NEXT BUTTON */}
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-6 md:right-12 z-30 p-2 md:p-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors duration-300"
        >
          <ChevronRight size={24} className="md:w-8 md:h-8" />
        </button>

      </div>

      {/* PAGINATION DOTS */}
      <div className="flex justify-center gap-3 mt-4">
        {TESTIMONIES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? "w-8 sm:w-10 bg-white"
                : "w-[8px] h-[8px] bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
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
            />
          </div>
        </div>
      )}

    </section>
  );
}