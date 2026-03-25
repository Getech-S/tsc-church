"use client";

import { useState } from "react";
import { ChevronRight, Play, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const SERMONS = [
  {
    id: 1,
    videoId: "JUmAIkXdcRo",
    title: "True Fruits Believers Should Bear",
  },
  {
    id: 2,
    videoId: "nWjOdA9X8Ag",
    title: "Key To A Successful Marriage",
  },
  {
    id: 3,
    videoId: "ogjc04lqV9U",
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
    <section className="bg-[#FDF6EC] py-20 lg:py-24">
      <div className="w-full mx-auto px-6 md:px-10 lg:px-32 flex flex-col gap-12">

        {/* HEADER ROW — left on desktop, center on mobile */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Left: eyebrow + heading */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left gap-2">
            <span
              className="text-[24px] lg:text-[28px] leading-[12px] text-[#E8751A] tracking-[0.5px]"
              style={{
                fontVariantNumeric: "lining-nums tabular-nums",
                fontFeatureSettings: '"liga" off, "calt" off',
                fontFamily: "var(--font-caveat)",
              }}
            >
              Feed Your Spirit
            </span>
            <h2 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-bold text-gray-900 leading-tight tracking-[-1px]">
              Words That Change Things
            </h2>
          </div>

          {/* Right: button — hidden on mobile, shown on desktop */}
          <Link
            href="/sermons"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-[#E8A020] px-5 py-2 text-[14px] font-semibold text-[#E8A020] transition-all duration-300 hover:bg-[#E8A020] hover:text-white shrink-0"
          >
            View All Sermons
            {/* <ChevronRight size={16} className="mt-1"/> */}
          </Link>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SERMONS.map((video, index) => (
            <motion.div
              key={video.id}
              className="flex flex-col gap-4 group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handlePlay(video.videoId)}
            >
              {/* VIDEO CARD */}
              <div className="relative h-[240px] sm:h-[265px] md:h-[285px] w-full rounded-[16px] overflow-hidden">

                <Image
                  src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Stronger overlay for readability */}
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                {/* PLAY BUTTON */}
                <div className="absolute bottom-6 left-6 flex items-center gap-4">
                  <div className="w-[50px] h-[50px] bg-[#E8A020] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Play size={20} fill="white" className="text-white ml-1" />
                  </div>
                  <div className="border-l border-white/50 pl-4 flex flex-col justify-center h-[40px]">
                    <span className="text-white text-[14px] font-bold leading-none mb-1">Watch</span>
                    <span className="text-white text-[14px] font-bold leading-none">Sermon</span>
                  </div>
                </div>

              </div>

              {/* TITLE */}
              <h3 className="text-[18px] sm:text-[20px] font-bold leading-[1.4] text-gray-900 group-hover:text-[#E8751A] transition-colors duration-300">
                {video.title}
              </h3>

            </motion.div>
          ))}
        </div>

        {/* VIEW ALL BUTTON — full width on mobile only, hidden on desktop */}
        <motion.div
          className="flex justify-center md:hidden"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/sermons"
            className="w-full flex items-center justify-center gap-2 rounded-full bg-[#E8A020]  px-6 py-3 text-[14px] font-bold text-white transition-all duration-300 hover:bg-[#E8A020] hover:text-white"
          >
            View All Sermons
            {/* <ChevronRight size={16} /> */}
          </Link>
        </motion.div>

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