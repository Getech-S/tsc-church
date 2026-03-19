"use client";

import { motion } from "framer-motion";

type LiveStreamHeroProps = {
  videoId: string;
  isLive: boolean;
  title: string;
};

export function LiveStreamHero({ videoId, isLive, title }: LiveStreamHeroProps) {
  const liveEmbedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;

  return (
    <section className="pt-12 pb-20 px-6">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-12 relative">
        
        {/* VIDEO PLAYER CONTAINER: This is the main 1240x616px frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative w-full aspect-video md:h-[616px] rounded-[16px] overflow-hidden shadow-2xl bg-[#1B1C1E] border border-white/5"
        >
          {/* THE YOUTUBE IFRAME (The underlying content) */}
          <iframe
            src={liveEmbedUrl}
            width="100%"
            height="100%"
            title={title || "Truth That Transforms Live Stream"}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 z-10" // Lowest layer in the stack
          ></iframe>

          {/* THE THUMBNAIL TITLE OVERLAY: Exact design from your screenshot */}
          {/* This uses pointer-events-none so users can still click the iframe play button underneath */}
          <div className="absolute inset-0 z-20 flex flex-col justify-end pb-[80px] pl-[60px] pointer-events-none">
            
            {/* The bold orange title block */}
            
            
            
          </div>

          {/* Optional: Dark gradient overlay to make the text pop even more against bright live feeds */}
          <div className="absolute inset-0 z-15 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

          {/* LIVE INDICATOR BADGE */}
          <div className="absolute top-6 left-6 z-30 flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-sm text-[12px] font-bold tracking-wider animate-pulse">
            <span className="w-2.5 h-2.5 bg-white rounded-full" />
            LIVE
          </div>
        </motion.div>
      </div>
    </section>
  );
}