"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Family() {
  return (
    <section className="bg-[#FFFFFD] py-20 lg:py-24 flex justify-center">
      <div className="w-full mx-auto px-6 md:px-10 lg:px-32 flex flex-col items-center gap-12">

        {/* HEADER */}
        <motion.div
          className="flex flex-col items-center text-center gap-3"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="text-[24px] lg:text-[28px] leading-[12px] text-[#E8751A] tracking-[0.5px]"
            style={{
              fontVariantNumeric: "lining-nums tabular-nums",
              fontFeatureSettings: '"liga" off, "calt" off',
              fontFamily: "var(--font-caveat)",
            }}
          >
            Distance is No Barrier
          </span>

          <h2 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-bold text-[#1B1C1E] leading-tight tracking-[-1px]">
            Wherever You Are,<br/>
            You Belong Here.
          </h2>
        </motion.div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] w-full">

          {/* CARD 1: IN PERSON */}
          <motion.div
            className="group relative h-[350px] w-full rounded-[16px] overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/TSC_15.JPG.jpeg"
              alt="Worship In Person"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10" />

            <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col items-start gap-4">
              <h3 className="text-[24px] font-bold leading-[32px] text-white">
                Come and Experience it.
              </h3>
              <Link
                href="/contact#ContactMap"
                className="inline-flex items-center gap-2 rounded-full border border-[#E8A020] px-4 py-2 text-[14px] font-bold text-[#E8A020] transition-all duration-300 hover:bg-[#E8A020] hover:text-white hover:border-[#E8A020]"
              >
                Plan your visit
                <ChevronRight size={16} />
              </Link>
            </div>
          </motion.div>

          {/* CARD 2: ONLINE */}
          <motion.div
            className="group relative h-[350px] w-full rounded-[16px] overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/family-online.jpg"
              alt="Online Presence"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10" />
            <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col items-start gap-4">
              <h3 className="text-[24px] font-bold leading-[32px] text-white">
                Your screen is your front row.
              </h3>
              <Link
                href="/worship-online"
                className="inline-flex items-center gap-2 rounded-full border border-[#E8A020] px-4 py-2 text-[14px] font-bold text-[#E8A020] transition-all duration-300 hover:bg-[#E8A020] hover:text-white hover:border-[#E8A020]"
              >
                Worship Online
                <ChevronRight size={16} className="mt-1"/>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}