"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function MeetApostle() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-[1240px] mx-auto">
        
        {/* THE CARD */}
        <div className="relative bg-[#1B1C1E] rounded-[16px] overflow-hidden flex flex-col lg:flex-row items-stretch min-h-[500px]">
          
          {/* THE SEAMLESS GRADIENT */}
          <div
            className="absolute right-0 top-0 w-full lg:w-[60%] h-full opacity-60 blur-[100px] pointer-events-none z-0"
            style={{
              background: "radial-gradient(circle at 75% 75%, rgba(232,117,26,0.35) 0%, rgba(0,0,0,0) 75%)"
            }}
          />

          {/* TEXT & MOBILE IMAGE CONTENT */}
          <div className="relative z-20 w-full lg:w-[55%] flex flex-col justify-center p-8 md:p-14 text-white">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-caveat text-[28px] leading-[27px] tracking-[0.5px] text-[#E8751A] mb-2"
                 style={{
                   fontVariantNumeric: "lining-nums tabular-nums",
                   fontFeatureSettings: '"liga" off, "calt" off',
                   fontFamily: "var(--font-caveat)",
                 }}
              >
                Meet Apostle Charles
              </p>

              <h3 className="text-3xl md:text-5xl font-bold tracking-tighter  mb-6 lg:mb-4">
                A humble vessel loved <br className="hidden md:block"/>
                by Jesus, sent to you.
              </h3>

              {/* MOBILE ONLY IMAGE: Focused on upper part only */}
              <div className="lg:hidden w-full h-[250px] mb-4 overflow-hidden flex justify-center relative rounded-2xl">
                 <img
                  src="/apostle_no_bg.png"
                  alt="Apostle Charles"
                  /* object-cover + object-top ensures only the upper body/head 
                     is visible, cutting off the rest for a tight fit.
                  */
                  className="w-full h-full object-cover object-right scale-95"
                />
              </div>

              <p className="text-white/70 text-sm md:text-base leading-normal mb-8 max-w-max">
                Apostle Charles serves as a minister of the Gospel of Jesus Christ, entrusted with shepherding, teaching, and guiding the church in accordance with biblical doctrine. His calling is to point people to Christ and pastoral leadership.
              </p>

              <Link href="/apostle-bio">
                <button className="group flex items-center gap-3 bg-[#E8751A] hover:bg-[#E8A020] px-6 py-3 rounded-full transition-all">
                  <span className="text-white text-xs font-bold tracking-widest cursor-pointer">Read More</span>
                  <div className="bg-white/20 rounded-full p-1 group-hover:scale-110 transition-transform">
                    <ArrowRight size={14} className="text-white " />
                  </div>
                </button>
              </Link>
            </motion.div>
          </div>

          {/* DESKTOP ONLY IMAGE SECTION */}
          <div className="hidden lg:flex relative w-full lg:w-[45%] h-[400px] lg:h-auto overflow-hidden pt-8 lg:pt-12">
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1.2 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 z-10 w-full h-full flex justify-center lg:justify-end"
            >
              <img
                src="/apostle_no_bg.png"
                alt="Apostle Charles"
                className="h-full w-auto object-fill scale-[1.0] lg:scale-[1.6] origin-bottom-right translate-y-45"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}