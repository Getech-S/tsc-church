"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LifeGallery() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#E8751A] text-[25px] leading-[27px] tracking-[1px] block mb-2"
            style={{ fontFamily: 'var(--font-caveat), cursive' }}
          >
            Moments of grace
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#1B1C1E] text-[36px] font-bold leading-[40px] tracking-[-1px] max-w-[658px] mx-auto"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            This Is What <br/> 
            Life Here Looks Like.
          </motion.h2>
        </div>

        {/* Masonry-Style Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Top Left: Baptism (Portrait Frame) */}
          <div className="film-frame">
            <div className="relative aspect-[4/3] w-full bg-black overflow-hidden border-[12px] border-[#1B1C1E] rounded-sm">
               <Image src="/about-baptism.jpg" alt="Baptism" fill className="object-cover" />
               <div className="absolute top-1 left-2 text-[8px] text-orange-400 font-mono">21 FRAME PORTRA 400 22</div>
            </div>
          </div>

          {/* Top Middle: Worship (Portrait Frame) */}
          <div className="film-frame">
            <div className="relative aspect-[4/3] w-full bg-black overflow-hidden border-[12px] border-[#1B1C1E] rounded-sm">
               <Image src="/TSC_5.JPG.jpeg" alt="Worship" fill className="object-cover" />
               <div className="absolute top-1 left-2 text-[8px] text-orange-400 font-mono">21 FRAME PORTRA 400 22</div>
            </div>
          </div>

          {/* Top Right: Choir B&W (Portrait Frame) */}
          <div className="film-frame">
            <div className="relative aspect-[4/3] w-full bg-black overflow-hidden border-[12px] border-[#1B1C1E] rounded-sm grayscale">
               <Image src="/TSC_9.JPG.jpeg" alt="Choir" fill className="object-cover" />
               <div className="absolute top-1 left-2 text-[8px] text-orange-400 font-mono">21 FRAME PORTRA 400 22</div>
            </div>
          </div>

          {/* Bottom Left/Middle: Apostle Preaching (Landscape - Gemini-svg 3 specs) */}
          <div className="md:col-span-2 film-frame">
            <div className="relative w-full aspect-[821/340] bg-black overflow-hidden border-[12px] border-[#1B1C1E] rounded-sm">
               <Image src="/TSC 2.jpg" alt="Preaching" fill className="object-cover" />
               <div className="absolute top-1 left-4 text-[10px] text-orange-400 font-mono">21 FRAME PORTRA 400 22</div>
            </div>
          </div>

          {/* Bottom Right: Community (Portrait Frame) */}
          <div className="film-frame">
            <div className="relative aspect-[4/3] w-full bg-black overflow-hidden border-[12px] border-[#1B1C1E] rounded-sm">
               <Image src="/gallery-gathering.jpg" alt="Community" fill className="object-cover" />
               <div className="absolute top-1 left-2 text-[8px] text-orange-400 font-mono">21 FRAME PORTRA 400 22</div>
            </div>
          </div>

        </div>
      </div>
      
      <style jsx>{`
        .film-frame {
          transition: transform 0.3s ease;
        }
        .film-frame:hover {
          transform: scale(1.02);
          z-index: 10;
        }
      `}</style>
    </section>
  );
}