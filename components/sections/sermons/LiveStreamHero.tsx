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
    <section className="pt-12 pb-20 px-0 md:px-6">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-12">

        {/* VIDEO PLAYER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-full aspect-video md:h-[616px] md:rounded-[16px] overflow-hidden shadow-2xl bg-[#1B1C1E] md:border md:border-white/5"
        >
          {/* IFRAME */}
          <iframe
            src={liveEmbedUrl}
            width="100%"
            height="100%"
            title={title || "TSC Live Stream"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 z-10 border-none"
          />

          {/* GRADIENT OVERLAY */}
          <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

          {/* LIVE BADGE — only shown when live */}
          {isLive && (
            <div className="absolute top-4 left-4 md:top-6 md:left-6 z-30 flex items-center gap-2 bg-red-600 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-sm text-[11px] md:text-[12px] font-bold tracking-wider animate-pulse">
              <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-white rounded-full" />
              LIVE
            </div>
          )}
        </motion.div>

      </div>
    </section>
  );
}