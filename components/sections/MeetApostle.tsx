"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function MeetApostle() {
  return (
    // Added overflow-x-hidden here as a failsafe to kill any mobile horizontal scrolling!
    <section className="bg-white py-24 px-6 overflow-x-hidden">
      <div className="max-w-[1240px] mx-auto">

        {/* THE CARD */}
        <div className="relative bg-[#1B1C1E] rounded-2xl overflow-hidden flex flex-col lg:flex-row items-stretch min-h-[500px]">

          {/* DESKTOP BACKGROUND GLOW */}
          <div
            className="hidden lg:block absolute right-0 top-0 w-[65%] h-full pointer-events-none z-0"
            style={{
              background: "radial-gradient(circle at 75% 50%, rgba(232,117,26,0.15) 0%, rgba(27,28,30,0) 65%)"
            }}
          />

          {/* MOBILE ONLY — Image section */}
          <div className="lg:hidden relative w-full h-[400px] sm:h-[480px] overflow-hidden">
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_40%,rgba(232,117,26,0.2),transparent_60%)]" />
            <img
              src="/apostle_no_bg.png"
              alt="Apostle Charles"
              className="relative z-10 w-full h-full object-cover object-top scale-[1.3] -translate-y-12"
            />
            <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent via-transparent to-[#1B1C1E]" />
          </div>

          {/* TEXT CONTENT */}
          <motion.div
            className="relative z-30 w-full lg:w-[60%] flex flex-col justify-center px-8 pb-12 pt-0 md:p-14 text-white"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-[24px] lg:text-[28px] leading-3 tracking-[0.5px] text-[#E8751A] mb-3"
              style={{
                fontVariantNumeric: "lining-nums tabular-nums",
                fontFeatureSettings: '"liga" off, "calt" off',
                fontFamily: "var(--font-caveat)",
              }}
            >
              Meet Apostle Charles
            </p>

            <h3 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-bold tracking-tight leading-[1.1] mb-6">
              A humble vessel loved <br className="hidden md:block" />
              by Jesus, sent to you.
            </h3>

            <p className="text-white/70 text-base md:text-[18px] leading-[1.6] mb-8 max-w-300">
              Apostle Charles serves as a minister of the Gospel of Jesus Christ, entrusted with
              shepherding, teaching, and guiding the church in accordance with biblical doctrine.
              His calling is to point people to Christ and pastoral leadership.
            </p>

            <Link
              href="/apostle-bio"
              className="group flex justify-center items-center gap-3 bg-[#E8751A] hover:bg-[#E8A020] px-6 py-3 rounded-full transition-colors duration-300 w-full md:w-auto md:self-start"
            >
              <span className="text-white text-[14] font-semibold">Read More</span>

            </Link>
          </motion.div>

          {/* DESKTOP ONLY */}
          <div className="hidden lg:block absolute bottom-0 right-0 z-20 w-[45%] h-full pointer-events-none">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full h-full relative"
            >
              <img
                src="/apostle_no_bg.png"
                alt="Apostle Charles"
                className="absolute bottom-0 right-0 lg:-right-10 h-full w-auto object-contain object-bottom origin-bottom-right scale-[2] translate-y-[60%] pointer-events-auto"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}