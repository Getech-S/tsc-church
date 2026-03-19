"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function GiveVision() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        
        {/* LEFT COLUMN: Text Content - Width 628px */}
        <div className="w-full lg:w-[628px] flex flex-col gap-4">
          
          {/* Eyebrow: Caveat, 25px, #E8751A */}
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[#E8751A] text-[25px] leading-[27px] tracking-[1px]"
            style={{ fontFamily: 'var(--font-caveat), cursive' }}
          >
            Give
          </motion.span>

          {/* Heading: Montserrat Bold, 36px, #1B1C1E */}
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#1B1C1E] text-[36px] font-bold leading-[40px] tracking-[-1px]"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Seed the Future. <br />
            Honor the Harvest.
          </motion.h2>

          {/* Body: Montserrat Regular, 18px, Line-height 24px */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-[18px] leading-[24px] font-normal"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            When we give through tithes and offerings from the blessings God 
            has provided, it displays our worship, gratitude, and devotion to Him. 
            Thank you for sowing into all that God is doing, and be sure to check 
            out our Offering Readings as you give!
          </motion.p>
        </div>

        {/* RIGHT COLUMN: Image - 552px x 411px */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-[552px] h-[411px] overflow-hidden rounded-[16px] shadow-lg"
        >
          <Image
            src="/give-harvest.jpg" // Your img.png file
            alt="Wheat harvest"
            fill
            className="object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}