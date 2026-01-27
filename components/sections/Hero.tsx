"use client";

// 1. Import 'Variants' type to fix the TypeScript error
import { motion, Variants } from "framer-motion";

export function Hero() {

  // 2. Define the types explicitly as ': Variants'
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4, // Time delay between each line appearing
        delayChildren: 0.3,   // Initial pause before starting
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(10px)" // Starts blurry (ethereal effect)
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)", // Becomes sharp
      transition: {
        duration: 1.2,
        ease: "easeOut" // TypeScript now knows this is a valid animation type
      },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">

      {/* BACKGROUND IMAGE LAYER (Ken Burns Effect) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="relative w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
          // The Animation: Zoom out slowly from 115% to 100%
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#000000]/50 mix-blend-multiply" />
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
        </motion.div>
      </div>

      {/* TEXT LAYER */}
      <div className="relative z-20 flex flex-col items-center justify-center px-4 text-center mt-16 md:mt-24">

        <motion.h1
          className="leading-tight drop-shadow-2xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          {/* "Welcome to" */}
          <motion.span
            variants={itemVariants}
            className="block font-medium text-5xl md:text-7xl lg:text-[90px] mb-2 md:mb-4 text-transparent bg-clip-text bg-linear-to-r from-[#F5BE40] via-[#FFFFFF] to-[#F5BE40]"
          >
            Welcome to
          </motion.span>

          {/* "True Salvation" */}
          <motion.span
            variants={itemVariants}
            className="block font-bold text-6xl md:text-8xl lg:text-[110px] mb-2 md:mb-4 tracking-tight text-transparent bg-clip-text bg-linear-to-r from-[#F5BE40] via-[#FFFFFF] to-[#F5BE40]"
          >
            True Salvation
          </motion.span>

          {/* "Church" */}
          <motion.span
            variants={itemVariants}
            className="block font-bold text-6xl md:text-8xl lg:text-[110px] text-transparent bg-clip-text bg-linear-to-r from-[#F5BE40] via-[#FFFFFF] to-[#F5BE40]"
          >
            Church
          </motion.span>

        </motion.h1>

        {/* Optional: A subtle "Scroll Down" indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1.5 }}
          className="absolute bottom-10"
        >
          <div className="w-[px] h-[60px] bg-linear-to-b from-transparent via-[#F5BE40] to-transparent opacity-60" />
        </motion.div>

      </div>
    </section>
  );
}