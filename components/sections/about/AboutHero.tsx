"use client";

import { motion } from "framer-motion";
import Image from "next/image";


export function AboutHero() {
  return (
    <section className="relative h-[60vh] min-h-[600px] w-full overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/TSC.jpg"
          alt="TSC Church"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      {/* NAVBAR */}
      

      {/* CENTER TEXT CONTENT */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6 pt-40">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-bold tracking-tight leading-[1.1] text-white text-4xl sm:text-5xl md:text-7xl lg:text-[64px] drop-shadow-2xl max-w-3xl"
        >
          We Exist For One Reason.
          To Heal And Save Souls.
        </motion.h1>
      </div>

    </section>
  );
}