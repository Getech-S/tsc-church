"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Journey() {
  return (
    <section className="bg-[#FDF6EC] py-24 lg:py-24 overflow-hidden">
      <div className="w-full mx-auto px-6 md:px-10 lg:px-32 flex flex-col gap-12">

        {/* SECTION HEADER */}
        <motion.div
          className="flex flex-col items-center text-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="text-[24px] lg:text-[28px] leading-[8px] tracking-[0.5px] text-[#E8751A]"
            style={{
              fontVariantNumeric: "lining-nums tabular-nums",
              fontFeatureSettings: '"liga" off, "calt" off',
              fontFamily: "var(--font-caveat)",
            }}
          >
            Where Do You Begin?
          </span>

          <h2 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-bold leading-[1.1] tracking-[-2px] text-gray-900">
            Every Journey With God <br />
            Starts Somewhere
          </h2>
        </motion.div>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* CARD 1: HEALING & PRAYER */}
          <motion.div
            className="relative overflow-hidden rounded-[16px] p-8 md:p-[40px] flex flex-col justify-end items-start min-h-[286px] group"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div
              className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: "url('/journey1.jpg')" }}
            />
            <div className="absolute inset-0 z-0 bg-[#E8751A]/80 mix-blend-multiply" />
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/60 to-transparent" />

            {/* Content pushed to bottom */}
            <div className="relative z-10 flex flex-col gap-4">
              <span className="text-[16px] leading-[24px] font-normal text-white/90">
                Healing & Prayer
              </span>
              <h3 className="text-[18px] sm:text-[20px] md:text-[24px] font-bold leading-[1.4] text-white">
                A safe place to bring your burdens, receive prayer, and trust God for healing and renewal.
              </h3>
              <Link
                href="/contact#contactform"
                className="inline-flex items-center gap-2 self-start rounded-full border border-[#E8A020] px-4 py-2 text-[13px] font-bold text-[#E8A020] transition-all duration-300 hover:bg-[#E8A020] hover:text-white hover:border-[#E8A020]"
              >
                Request Prayer
                <ChevronRight size={15} className="mt-1"/>
              </Link>
            </div>
          </motion.div>

          {/* CARD 2: TOTAL DELIVERANCE */}
          <motion.div
            className="relative overflow-hidden rounded-[16px] p-8 md:p-[40px] flex flex-col justify-end items-start min-h-[286px] group"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div
              className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: "url('/journey2.png')" }}
            />
            <div className="absolute inset-0 z-0 bg-[#E8A020]/80 mix-blend-multiply" />
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/50 to-transparent" />

            {/* Content pushed to bottom */}
            <div className="relative z-10 flex flex-col gap-4">
              <span className="text-[16px] leading-[24px] font-normal text-white/90">
                Total Deliverance
              </span>
              <h3 className="text-[18px] sm:text-[20px] md:text-[24px] font-bold leading-[1.4] text-white">
                Break free from spiritual chains and experience the freedom Christ gives.
              </h3>
              <Link
                href="/contact#contactform"
                className="inline-flex items-center gap-2 self-start rounded-full border border-[#E8A020] px-4 py-2 text-[13px] font-bold text-[#E8A020] transition-all duration-300 hover:bg-[#E8A020] hover:text-white hover:border-[#E8A020]"
              >
               Find Freedom
                <ChevronRight size={15} className="mt-1"/>
              </Link>
            </div>
          </motion.div>

          {/* CARD 3: DISCIPLESHIP (VIDEO) */}
          <motion.div
            className="relative col-span-1 md:col-span-2 rounded-[16px] overflow-hidden flex items-end md:items-center min-h-[500px] md:min-h-[400px] md:h-[400px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover z-0"
            >
              <source src="/journeyvid1.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-black/50 md:hidden z-10" />
            <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black via-black/50 to-black/40 z-10" />

            <div className="relative z-20 w-full flex flex-col items-start gap-6 p-8 pb-10 md:p-[40px]">
              <div className="flex flex-col gap-3">
                <span className="text-[16px] leading-[24px] font-normal text-white/90">
                  Discipleship
                </span>
                <h3 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold leading-[1.2] text-white md:max-w-[60%]">
                  Live so they See Christ in you. Join a family committed to growing into His likeness in every word and every deed.
                </h3>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 self-start rounded-full border border-[#E8A020] px-4 py-2 text-[13px] font-bold text-[#E8A020] transition-all duration-300 hover:bg-[#E8A020] hover:text-white hover:border-[#E8A020]"
              >
                Join the Family
                <ChevronRight size={15} className="mt-1"/>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}