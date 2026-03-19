"use client";

import { motion } from "framer-motion";
import { Phone, User, Globe } from "lucide-react";

export function GiveMethodsHeader() {
  return (
    <section id="offer"
      className="w-full bg-[#1B1C1E] flex flex-col items-center justify-center text-center overflow-hidden"
      /* Exact Padding from Figma: Top/Bottom 80px, Sides 200px */
      style={{ padding: "80px 20px" }} 
        >
      <div className="max-w-[1040px] mx-auto flex flex-col items-center">
        {/* Eyebrow: Caveat, 25px, #E8751A */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-orange-600 text-[25px] leading-[27px] tracking-[1px] block mb-4"
          style={{ fontFamily: 'var(--font-caveat), cursive' }}
        >
          Simple and secure
        </motion.span>

        {/* Heading: Montserrat Bold, 56px (H1 size) */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-white font-bold tracking-tight mb-16"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "56px",
            lineHeight: "62px",
            letterSpacing: "-2px"
          }}
        >
          Choose How <br className="hidden md:block" /> 
          You Want to Give.
        </motion.h2>

        {/* MTN MoMo PAYMENT CARD 
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          /* Changed bg-white to bg-neutral-900 for dark mode visibility 
          className="relative group w-full max-w-[500px] bg-yellow-400 rounded-[24px] p-8 border border-white/10 shadow-2xl overflow-hidden"
        >
          {/* MTN Yellow Accent Bar 
          <div className="absolute top-0 left-0 w-full h-2 bg-yellow-400" />
          
          <div className="flex flex-col items-center text-center">
            {/* MoMo Logo Circle 
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-yellow-400/20">
               <span className="text-sky-900 font-black text-xs">MoMo</span>
            </div>

            <h3 className="text-white font-bold text-xl mb-1 flex items-center gap-2">
              MTN Mobile Money
            </h3>
            <p className="text-neutral-400 text-sm mb-8">Support the work via Mobile Money</p>

            {/* Details Grid 
            <div className="w-full space-y-4 text-left">
              {/* Name Detail - Changed bg-white/5 to bg-neutral-800 
              <div className="flex items-center gap-4 bg-neutral-800 p-4 rounded-xl border border-white/5">
                <User size={20} className="text-yellow-400" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-neutral-500 uppercase font-bold tracking-widest">Account Name</span>
                  <span className="text-white font-semibold">Charles Lwanga</span>
                </div>
              </div>

              {/* RWF Detail 
              <div className="flex items-center gap-4 bg-neutral-800 p-4 rounded-xl border border-white/5">
                <Globe size={20} className="text-yellow-400" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-neutral-500 uppercase font-bold tracking-widest">Rwanda (RWF)</span>
                  <span className="text-white font-mono text-lg">+250 788 312 384</span>
                </div>
              </div>

              {/* UGX Detail 
              <div className="flex items-center gap-4 bg-neutral-800 p-4 rounded-xl border border-white/5">
                <Globe size={20} className="text-yellow-400" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-neutral-500 uppercase font-bold tracking-widest">Uganda (UGX)</span>
                  <span className="text-white font-mono text-lg">+256 740 604 827</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}