"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { ChevronRight } from "lucide-react";
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
      className="relative h-screen w-full overflow-hidden bg-[#1B1C1E] flex items-end justify-start pb-16 sm:pb-24 md:pb-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >

      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
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
  className={`${HERO_IMAGES[index].position} object-cover`}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
  quality={90}
/>
            {/* Gradients travel with each image — no flash during transitions */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-linear-to-r from-black/50 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-20 w-full mx-auto px-6 md:px-10 lg:px-32 flex flex-col items-center text-center sm:items-start sm:text-left">

        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="font-bold tracking-tight leading-[1.1] text-white text-4xl sm:text-5xl md:text-7xl lg:text-[64px] drop-shadow-2xl max-w-3xl"
        >
          You Belong Here.<br />
          And You Always Did.
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-3 md:mt-6 text-white/85 text-sm sm:text-base md:text-lg font-light tracking-wide max-w-xl"
        >
          Whatever you are carrying, there is room for it here.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link
            href="/worship-online"
            className="w-full sm:w-auto text-center px-8 py-3 bg-[#E8751A] text-white text-[14px] font-semibold rounded-full hover:bg-[#E8A020] transition-colors duration-300 ease-in-out flex items-center justify-center gap-2"
          >
            Worship Online
          </Link>

          <Link
            href="/contact#ContactMap"
            className="w-full sm:w-auto text-center px-8 py-3 border-2 border-[#E8A020] bg-transparent hover:bg-[#E8A020] text-[#E8A020] hover:text-white text-[14px] font-semibold rounded-full transition-all duration-300 ease-in-out"
          >
            Plan Your Visit
          </Link>
        </motion.div>

        {/* SLIDE INDICATORS — below buttons on mobile, right side on desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 flex flex-row sm:flex-col gap-3 items-center justify-center sm:justify-start w-full sm:w-auto sm:absolute sm:right-8 sm:top-1/2 sm:-translate-y-1/2"
        >
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`rounded-full transition-all duration-500 ${
                i === index
                  ? "w-8 sm:w-[6px] sm:h-8 h-[6px] bg-white"
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