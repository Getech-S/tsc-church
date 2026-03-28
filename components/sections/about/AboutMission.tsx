"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LeadershipSection() {
  return (
    <section className="bg-[#1B1C1E] overflow-hidden min-h-[500px] flex flex-col lg:flex-row items-stretch">
      
      {/* LEFT COLUMN: Text Content */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24">
        <div className="max-w-[571px] flex flex-col gap-4">
          
          {/* Eyebrow: Caveat Font, 25px, #E8751A */}
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[24px] lg:text-[28px] text-[#E8751A] leading-[12px] tracking-[0.5px] font-normal text-left"
            style={{ fontFamily: 'var(--font-caveat), cursive' }}
          >
            Leadership
          </motion.span>

          {/* H3 Heading: Montserrat, 36px, Bold, #FFFFFD */}
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[32px] sm:text-[36px] sm:mb-3 md:text-[40px] lg:text-[48px] font-bold text-white leading-[1.1] tracking-[-2px]"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Jesus Christ Is the Shepherd.
          </motion.h3>

          {/* Paragraph: Montserrat, 18px, Regular, 75% Opacity */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#FFFFFD]/75 text-[18px] leading-[24px] font-normal"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            He is the theme, the head, and the only owner of this house. Every
            leader here, from the Apostle to the newest volunteer, serves under
            His authority and exists to point people toward Him. Not toward
            themselves.
          </motion.p>
        </div>
      </div>

      {/* RIGHT COLUMN: Image with Circular Cut (Responsive) */}
<div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full">
  <div className="absolute inset-0 w-full h-full overflow-hidden">
    
    {/* The circular crop effect - Now active on all screens */}
    <div 
      className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_80%,transparent_80%,#1B1C1E_71%)] lg:bg-[radial-gradient(circle_at_70%_50%,transparent_80%,#1B1C1E_71%)]"
    />
    
    <Image
      src="/TSC.jpg"
      alt="True Salvation Church Sanctuary"
      fill
      className="object-cover"
      priority
    />
  </div>
</div>
    </section>
  );
}