"use client";

import { motion } from "framer-motion";
import { Calendar, HeartHandshakeIcon, SproutIcon } from "lucide-react";
import Link from "next/link";

export function SermonDetails() {
  return (
    <section className="bg-[#1B1C1E] py-12 px-6 md:px-12">
      <div className="max-w-[1240px] mx-auto">
        
        {/* Title & Meta Section */}
        <div className="flex flex-col gap-2 mb-6">
          <h2 
            className="text-[#FFFFFD] font-bold"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '24px',
              lineHeight: '32px' 
            }}
          >
            Welcome To Our Live Service
          </h2>
          
          <div className="flex flex-col gap-1 opacity-75">
            <span 
              className="text-[#FFFFFD]"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '18px',
                lineHeight: '24px' 
              }}
            >
              With Apostle Charles
            </span>
            
            
          </div>
        </div>

        {/* Give Button - Styled to match your "Support the Work" style */}
        <Link href="/give">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#E8751A] hover:bg-[#ff8a2b] text-white font-bold py-2.5 px-8 rounded-full flex items-center gap-2 mb-10 transition-colors shadow-lg cursor-pointer"
            style={{ fontSize: "14px" }}
          >
            Give <SproutIcon className="text-[16px]" />
          </motion.button>
        </Link>

        {/* Description Text - Montserrat Regular 16px/24px */}
        <div className="max-w-[800px] space-y-6">
          <div 
            className="text-[#FFFFFD] space-y-4"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '16px',
              lineHeight: '28px',
              fontWeight: 400
            }}
          >
            <p className="italic">Mugire amahoro bakundwa!</p>
            
            <p>
              Tugushimiye ko wahisemo kubana natwe iteka. Intego yacu nugutegura umugeni wa Kristo 
              kugira ubwo agiye kugaruka vuba amusange atagira ikizinga cyangwa umunkanyari. 
              Twubakiye kumvugo igira iti <span className="text-[#E8A020]">"Ndeba ubone Kristo"</span>. 
            
            </p>

            <p className="pt-4 border-t border-white italic">
              Peace be with you, beloved!
            </p>

            <p>
              We thank you for choosing to be with us always. Our goal is to prepare the Bride 
              of Christ so that when He returns soon, He may find her without spot or wrinkle. 
              We are built on the word that says, <span className="text-[#E8A020]">"See me, see Christ."</span> 
              
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}