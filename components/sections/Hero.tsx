"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const HERO_IMAGES = [
  "/TSC.jpg",
  "/TSC 2.jpg",
  "/TSC 3.jpg",  
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    /* UPDATED: pt-[65vh] and md:pt-[75vh] to force content to the bottom third of the screen.
       Added pb-12 to prevent it from sitting flush against the very bottom edge. */
       <section className="relative h-screen w-full overflow-hidden bg-black flex items-end justify-start pb-20 md:pb-32">
      
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence >
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3, ease: "linear" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${HERO_IMAGES[index]}')` }}
          >
           <div className="absolute inset-0 bg-black/40" />

<div className="absolute inset-0 bg-linear-to-r from-black/60 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
        <div className="flex flex-col items-start text-left max-w-4xl">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="flex flex-col items-start font-[700] tracking-tight leading-[1.1]">
              <span className="text-white text-5xl md:text-7xl lg:text-[64px] drop-shadow-2xl">
                You Belong Here.<br />
                And You Always Did.
              </span>
            </h1>
          </motion.div>

          {/* SECONDARY MESSAGE */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 md:mt-6"
          >
            <p className="text-white/90 text-sm md:text-lg font-medium tracking-wide max-w-xl drop-shadow-md">
              Whatever you are carrying, there is a room for it here.
            </p>
          </motion.div>

          {/* BUTTONS - LINKED */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 md:mt-10 flex flex-wrap gap-4"
          >
            <Link href="/worship-online">
              <button className="px-10 py-4 bg-[#E8751A] text-white font-semibold rounded-full text-xs tracking-widest hover:bg-[#E8A020] transition-all flex items-center gap-2 cursor-pointer shadow-xl">
                Worship Online
                <ChevronRight size={16} />
              </button>
            </Link>

            <Link href="/contact#ContactMap">
              <button className="px-10 py-4 border-2 border-[#E8751A] bg-transparent hover:border-[#E8A020] text-[#E8751A] font-semibold rounded-full text-xs tracking-widest hover:text-[#E8A020] transition-all cursor-pointer shadow-xl">
                Plan Your Visit
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}