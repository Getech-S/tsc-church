"use client";

import { motion } from "framer-motion";
import { User, Globe } from "lucide-react";
import Image from "next/image";

export function GiveMethodsHeader() {
  return (
    <section
      id="offer"
      className="w-full bg-[#1B1C1E] flex flex-col items-center justify-center text-center overflow-hidden py-20 px-5 md:px-8"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col items-center w-full">

        {/* EYEBROW */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#E8751A] text-[25px] leading-[27px] tracking-[1px] block mb-4"
          style={{ fontFamily: "var(--font-caveat), cursive" }}
        >
          Simple and secure
        </motion.span>

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-white font-bold tracking-tight mb-16 text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.1]"
          style={{ letterSpacing: "-2px" }}
        >
          Support The Mission <br className="hidden md:block" />
          Through Your Offering.
        </motion.h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">

          {/* MTN MoMo CARD */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative w-full bg-[#252628] rounded-[16px] p-10 md:p-14 border border-[#3F4044] shadow-sm overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-[#FFCC00]" />

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#004F71] rounded-full flex items-center justify-center mb-6 overflow-hidden">
                <Image src="/momo-logo.webp" alt="MoMo Logo" width={40} height={40} className="object-contain" />
              </div>
              <h3 className="text-white font-bold text-xl md:text-2xl mb-1">MTN Mobile Money</h3>
              <h3 className="text-white font-bold text-xl md:text-2xl mb-1">WorldRemit</h3>
              <p className="text-[#8E939A] text-sm mb-8 font-medium">Support the work via Mobile Money</p>

              <div className="w-full space-y-4 text-left">
                <div className="flex items-center gap-4 bg-[#2D2E32] p-4 md:p-5 rounded-2xl border border-[#3F4044]">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-[#004F71] flex items-center justify-center text-[#FFCC00]">
                    <User size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#8E939A] uppercase font-black tracking-widest mb-0.5">Account Name</span>
                    <span className="text-white font-bold text-base md:text-lg">Charles Lwanga</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-[#2D2E32] p-4 md:p-5 rounded-2xl border border-[#3F4044]">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-[#004F71] flex items-center justify-center text-[#FFCC00]">
                    <Globe size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#8E939A] uppercase font-black tracking-widest mb-0.5">Rwanda (RWF)</span>
                    <span className="text-white font-bold text-lg md:text-xl tracking-tight">+250 788 312 384</span>
                  </div>
                </div>

                
              </div>
            </div>
          </motion.div>

          {/* AIRTEL MONEY CARD */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="relative w-full bg-[#252628] rounded-[16px] p-10 md:p-14 border border-[#3F4044] shadow-sm overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-[#E11900]" />

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 overflow-hidden">
                <Image src="/airtel-logo.png" alt="Airtel Logo" width={40} height={40} className="object-contain" />
              </div>
              <h3 className="text-white font-bold text-xl md:text-2xl mb-1">Airtel Money</h3>
              <h3 className="text-white font-bold text-xl md:text-2xl mb-1">WorldRemit</h3>
              <p className="text-[#8E939A] text-sm mb-8 font-medium">Support the work via Airtel Money</p>

              <div className="w-full space-y-4 text-left">
                <div className="flex items-center gap-4 bg-[#2D2E32] p-4 md:p-5 rounded-2xl border border-[#3F4044]">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-[#FFFFFF] flex items-center justify-center text-[#E11900]">
                    <User size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#8E939A] uppercase font-black tracking-widest mb-0.5">Account Name</span>
                    <span className="text-white font-bold text-base md:text-lg">Charles Lwanga</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-[#2D2E32] p-4 md:p-5 rounded-2xl border border-[#3F4044]">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-[#FFFFFF] flex items-center justify-center text-[#E11900]">
                    <Globe size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#8E939A] uppercase font-black tracking-widest mb-0.5">Uganda (UGX)</span>
                    <span className="text-white font-bold text-lg md:text-xl tracking-tight">+256 740 604 827</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}