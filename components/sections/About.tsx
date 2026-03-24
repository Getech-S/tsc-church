"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
// import { ChevronRight } from "lucide-react";

export function About() {
  return (
    <section className="bg-white pt-1 pb-24 lg:pt-10 lg:pb-24 overflow-hidden">
      <div className="w-full mx-auto px-6 md:px-10 lg:px-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* DESKTOP IMAGE */}
        <motion.div
          className="relative rounded-[16px] overflow-hidden self-end h-full w-full hidden lg:block"
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
        >
          <Image
            src="/about-group.jpg"
            alt="Apostle Charles on Stage"
            width={557}
            height={408}
            className="w-full h-[408px] object-cover"
            priority
          />
        </motion.div>

        {/* RIGHT COLUMN: Text Content */}
        <motion.div
          className="flex flex-col items-center text-center sm:items-start sm:text-left gap-6 order-1 lg:order-2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, ease: "easeOut" }}
        >
          {/* Eyebrow */}
          <span
            className="text-[24px] lg:text-[28px] text-[#E8751A] leading-[8px] tracking-[0.5px] font-normal text-left"
            style={{
              fontVariantNumeric: "lining-nums tabular-nums",
              fontFeatureSettings: '"liga" off, "calt" off',
              fontFamily: "var(--font-caveat)",
            }}
          >
            You Were Led Here
          </span>

          {/* Heading — correct responsive sizing, small to large */}
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold text-gray-900 leading-[1.1] tracking-[-2px]">
            A Place Where Broken <br />
            Things Become Whole.
          </h2>

          {/* MOBILE IMAGE */}
          <motion.div
            className="relative rounded-[16px] overflow-hidden w-full lg:hidden my-2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/about-group.jpg"
              alt="Apostle Charles on Stage"
              width={557}
              height={408}
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Description */}
          <p className="text-base md:text-[18px] leading-[1.6] text-gray-600 font-normal max-w-lg">
            True Salvation Church exists for those who are searching, for meaning, for healing, for a place where faith is not just a Sunday ritual but a daily reality. If something brought you here, you are exactly where you are supposed to be.
          </p>

          {/* BUTTON — Link styled directly, no nested button */}
          <Link
                href="/about#whoweare"
                className="text-white bg-[#E8751A] font-semibold text-[14px] rounded-full px-8 py-3 flex items-center justify-center gap-2 hover:bg-[#E8A020] transition-colors duration-300 ease-in-out self-center sm:self-start"
                >
                Discover Our Story
                {/* <ChevronRight size={16} className="mt-[1px]" /> */}
            </Link>
        </motion.div>

      </div>
    </section>
  );
}