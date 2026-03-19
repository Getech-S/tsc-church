"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function BioHero() {
  return (
    <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">

            {/* 1. BACKGROUND IMAGE 
         - Using a div for the background image to ensure cover fit
         - Positioned to focus on the subject
      */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                style={{ backgroundImage: "url('/sermons-bg.jpeg')" }}
            >
                {/* Dark Gradient Overlay 
           - Starts transparent at top
           - Becomes dark at bottom to make text readable
        */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
            </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-[80px]">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white text-[48px] md:text-[62px] font-bold tracking-tight text-center max-w-[796px] px-4"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Apostle Charles.
        </motion.h1>
      </div>
    </section>
  );
}