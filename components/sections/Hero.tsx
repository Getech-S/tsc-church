"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import tsc1 from "../../public/TSC.jpg";
import tsc2 from "../../public/TSC 2.jpg";
import tsc3 from "../../public/TSC 3.jpg";

const HERO_IMAGES = [
  { src: tsc1, position: "object-center" },
  { src: tsc2, position: "object-top" },
  { src: tsc3, position: "object-center" },
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section
      className="relative w-full overflow-hidden bg-[#1B1C1E] flex flex-col justify-end lg:flex-row lg:items-end pb-8 sm:pb-12 lg:pb-16 h-[calc(100dvh-80px)] lg:h-screen"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* BACKGROUND LAYER */}
      {/* FIX 2: Height reduced to 55% on mobile for a wider image aspect ratio, maintaining full height on desktop */}
      <div className="absolute top-0 left-0 right-0 h-[55%] lg:h-full z-0">
        <AnimatePresence>
          <motion.div
            key={index}
            initial={{ opacity: index === 0 ? 1 : 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={HERO_IMAGES[index].src}
              alt="Church service"
              fill
              placeholder="blur"
              priority={index === 0}
              className={`${HERO_IMAGES[index].position} object-cover w-full`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              quality={90}
            />
            
            {/* FIX 3: Aggressive gradient stops. The bottom 15% is incredibly dark, completely hiding the image seam. */}
            <div className="absolute inset-0 bg-linear-to-t from-[#1B1C1E] from-0% via-[#1B1C1E]/95 via-15% to-transparent to-60% lg:from-black/80 lg:from-0% lg:via-black/20 lg:via-30% lg:to-transparent pointer-events-none" />
            
            {/* Desktop side-gradient */}
            <div className="absolute inset-0 bg-linear-to-r from-black/50 via-transparent to-transparent pointer-events-none hidden lg:block" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-20 w-full mx-auto px-6 md:px-10 lg:px-32 flex flex-col items-center text-center lg:items-start lg:text-left">
        
        {/* FIX 1: Font size adjusted from text-4xl to text-[32px] strictly for mobile. Keeps it at 2 lines. */}
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="font-bold tracking-tight leading-[1.2] lg:leading-[1.1] text-white text-[32px] sm:text-5xl md:text-7xl lg:text-[64px] drop-shadow-2xl max-w-3xl"
        >
          You Belong Here.<br />
          And You Always Did.
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-3 md:mt-5 text-white/85 text-sm sm:text-base md:text-lg font-light tracking-wide max-w-xl"
        >
          Whatever you are carrying, there is room for it here.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 md:mt-10 flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
        >
          <Link
            href="/worship-online"
            className="w-full sm:w-auto text-center px-8 py-3.5 bg-[#E8751A] text-white text-[15px] font-semibold rounded-full hover:bg-[#E8A020] transition-colors duration-300 ease-in-out flex items-center justify-center gap-2"
          >
            Worship Online
          </Link>

          <Link
            href="/contact#ContactMap"
            className="w-full sm:w-auto text-center px-8 py-3.5 border-2 border-[#E8A020] bg-transparent hover:bg-[#E8A020] text-[#E8A020] hover:text-white text-[15px] font-semibold rounded-full transition-all duration-300 ease-in-out"
          >
            Plan Your Visit
          </Link>
        </motion.div>

        {/* SLIDE INDICATORS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 lg:mt-12 flex flex-row lg:flex-col gap-3 items-center justify-center lg:justify-start w-full lg:w-auto lg:absolute lg:right-8 lg:top-1/2 lg:-translate-y-1/2"
        >
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`rounded-full transition-all duration-500 ${
                i === index
                  ? "w-8 lg:w-[6px] lg:h-8 h-[6px] bg-white"
                  : "w-[6px] h-[6px] bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}