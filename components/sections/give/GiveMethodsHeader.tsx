"use client";

import { motion } from "framer-motion";
import { User, Globe } from "lucide-react";
import Image from "next/image";

export function GiveMethodsHeader() {
  return (
    <section id="offer"
      className="w-full bg-[#1B1C1E] flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ padding: "80px 20px" }} 
    >
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[24px] lg:text-[28px] text-[#E8751A] leading-[27px] tracking-[0.5px] font-normal text-left mb-1"
          style={{ fontFamily: 'var(--font-caveat), cursive' }}
        >
          Simple and secure
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-[32px] sm:text-[36px] sm:mb-12 md:text-[40px] lg:text-[48px] font-bold text-white leading-[1.1] tracking-[-2px] mb-12"
          style={{
            fontFamily: "Montserrat, sans-serif",
           
          }}
        >
          Support The Mission <br className="hidden md:block" /> 
          Through Your Offering.
        </motion.h2>

        {/* CARDS CONTAINER: Grid for side-by-side on desktop 
        </div><div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">*/}
        <div className="flex flex-col items-center w-full">
          
          {/* MTN MoMo PAYMENT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative group w-full bg-[#252628] rounded-[16px] p-10 border border-[#FFCC00]/20 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-[#FFCC00]" />
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#004F71] rounded-full flex items-center justify-center mb-6  overflow-hidden">
                <Image src="/momo-logo.webp" alt="MoMo Logo" width={40} height={40} className="object-contain" />
              </div>
              <h3 className="text-white font-bold text-2xl mb-1">MTN Mobile Money</h3>
              <h3 className="text-white font-bold text-2xl mb-1">WorldRemit</h3>
              <p className="text-[#8E939A] text-sm mb-10 font-medium">Support the work via Mobile Money</p>
              <div className="w-full space-y-4 text-left">
                <div className="flex items-center gap-5 bg-[#2D2E32] p-5 rounded-2xl border border-[#3F4044]">
                  <div className="w-10 h-10 rounded-full bg-[#1B1C1E] flex items-center justify-center text-[#FFCC00]"><User size={20} /></div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#8E939A] uppercase font-black tracking-widest mb-0.5">Account Name</span>
                    <span className="text-white font-bold text-lg">Charles Lwanga</span>
                  </div>
                </div>
                <div className="flex items-center gap-5 bg-[#2D2E32] p-5 rounded-2xl border border-[#3F4044]">
                  <div className="w-10 h-10 rounded-full bg-[#1B1C1E] flex items-center justify-center text-[#FFCC00]"><Globe size={20} /></div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#8E939A] uppercase font-black tracking-widest mb-0.5">Rwanda (RWF)</span>
                    <span className="text-white font-bold text-xl tracking-tight">+250 788 312 384</span>
                  </div>
                </div>
                <div className="flex items-center gap-5 bg-[#2D2E32] p-5 rounded-2xl border border-[#3F4044]">
                  <div className="w-10 h-10 rounded-full bg-[#1B1C1E] flex items-center justify-center text-[#FFCC00]"><Globe size={20} /></div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#8E939A] uppercase font-black tracking-widest mb-0.5">Uganda (UGX)</span>
                    <span className="text-white font-bold text-xl tracking-tight">+256 740 604 827</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* AIRTEL MONEY PAYMENT CARD 
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="relative group w-full bg-[#252628] rounded-[32px] p-10 border border-[#3F4044] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.8)] overflow-hidden"
          >
            
            <div className="absolute top-0 left-0 w-full h-2 bg-[#E11900]" />
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#ffffff] rounded-full flex items-center justify-center mb-6  overflow-hidden text-white font-bold text-xs">
                
                <Image src="/airtel-logo.png" alt="MoMo Logo" width={40} height={40} className="object-contain" />
              </div>
              <h3 className="text-white font-bold text-2xl mb-1">Airtel Money</h3>
              <p className="text-[#8E939A] text-sm mb-10 font-medium">Support the work via Airtel Money</p>
              <div className="w-full space-y-4 text-left">
                <div className="flex items-center gap-5 bg-[#2D2E32] p-5 rounded-2xl border border-[#3F4044]">
                  <div className="w-10 h-10 rounded-full bg-[#1B1C1E] flex items-center justify-center text-[#E11900]"><User size={20} /></div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#8E939A] uppercase font-black tracking-widest mb-0.5">Account Name</span>
                    <span className="text-white font-bold text-lg">Charles Lwanga</span>
                  </div>
                </div>
                <div className="flex items-center gap-5 bg-[#2D2E32] p-5 rounded-2xl border border-[#3F4044]">
                  <div className="w-10 h-10 rounded-full bg-[#1B1C1E] flex items-center justify-center text-[#E11900]"><Globe size={20} /></div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#8E939A] uppercase font-black tracking-widest mb-0.5">Rwanda (RWF)</span>
                    <span className="text-white font-bold text-xl tracking-tight">+250 788 312 384</span>
                  </div>
                </div>
                <div className="flex items-center gap-5 bg-[#2D2E32] p-5 rounded-2xl border border-[#3F4044]">
                  <div className="w-10 h-10 rounded-full bg-[#1B1C1E] flex items-center justify-center text-[#E11900]"><Globe size={20} /></div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#8E939A] uppercase font-black tracking-widest mb-0.5">Uganda (UGX)</span>
                    <span className="text-white font-bold text-xl tracking-tight">+256 740 604 827</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div> */} 

        </div>
      </div>
    </section>
  );
}