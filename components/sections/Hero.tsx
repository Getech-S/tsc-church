"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { db } from "@/lib/firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

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
  const [heroEvent, setHeroEvent] = useState<any | null>(null);

  // Background slider timer
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [paused]);

  // Automatically fetch the latest active event for the flyer
  useEffect(() => {
    const q = query(collection(db, "events"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      
      // FIX: Explicitly typing as any[] stops the TypeScript "Property does not exist" error
      const data: any[] = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      // Robust Local Date Generator (Prevents UTC timezone shifts)
      const now = new Date();
      const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
      
      // Find the most recently created event that has NOT passed yet
      const upcoming = data.find(event => !event.systemDate || event.systemDate >= today);
      
      setHeroEvent(upcoming || null);
    });
    
    return () => unsubscribe();
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden bg-[#1B1C1E] flex flex-col justify-end lg:flex-row lg:items-end pb-8 sm:pb-12 lg:pb-16 h-[calc(100dvh-80px)] lg:h-screen"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* BACKGROUND LAYER */}
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
            
            <div className="absolute inset-0 bg-linear-to-t from-[#1B1C1E] from-0% via-[#1B1C1E]/95 via-15% to-transparent to-60% lg:from-black/80 lg:from-0% lg:via-black/20 lg:via-30% lg:to-transparent pointer-events-none" />
            
            <div className="absolute inset-0 bg-linear-to-r from-black/50 via-transparent to-transparent pointer-events-none hidden lg:block" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ===================== DYNAMIC CONFERENCE FLYER ===================== */}
      {/* Only renders if there is an upcoming event found in the database   */}
      {heroEvent && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
          className="absolute top-3 right-3 sm:top-5 sm:right-5 lg:top-28 lg:right-10 xl:right-16 z-30"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Link
              href="/events"
              aria-label="View event details on the events page"
              className="group block"
            >
              <motion.div
                animate={{ rotate: 2 }}
                whileHover={{ rotate: 0, scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="relative w-24 sm:w-32 md:w-36 lg:w-48 xl:w-56 rounded-lg overflow-hidden ring-1 ring-white/30 shadow-[0_10px_35px_rgba(0,0,0,0.55)] transition-shadow duration-500 group-hover:ring-[#E8A020] group-hover:shadow-[0_10px_45px_rgba(232,160,32,0.35)]"
              >
                <Image
                  src={heroEvent.image}
                  alt={heroEvent.titleEn || "Upcoming Church Event"}
                  width={400}
                  height={500}
                  className="block w-full h-auto"
                  sizes="(max-width: 640px) 96px, (max-width: 1024px) 144px, 224px"
                  quality={90}
                />

                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/85 to-transparent pt-6 pb-1.5 lg:pb-2 text-center lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] lg:text-sm font-semibold text-[#E8A020]">
                    View details →
                  </span>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      )}
      {/* =================== END DYNAMIC CONFERENCE FLYER =================== */}

      {/* CONTENT LAYER */}
      <div className="relative z-20 w-full mx-auto px-6 md:px-10 lg:px-32 flex flex-col items-center text-center lg:items-start lg:text-left">
        
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="font-bold tracking-tight leading-[1.2] lg:leading-[1.1] text-white text-[32px] sm:text-5xl md:text-7xl lg:text-[64px] drop-shadow-2xl max-w-3xl"
        >
          You Belong Here.<br />
          And You Always Did.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-3 md:mt-5 text-white/85 text-sm sm:text-base md:text-lg font-light tracking-wide max-w-xl"
        >
          Whatever you are carrying, there is room for it here.
        </motion.p>

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

        {/* SLIDE INDICATORS (Tailwind class syntax fixed) */}
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
                  ? "w-8 lg:w-1.5 lg:h-8 h-1.5 bg-white"
                  : "w-1.5 h-1.5 bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}