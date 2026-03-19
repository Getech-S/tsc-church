"use client";

import { motion } from "framer-motion";

export default function DiscipleSection() {
  return (
    <section 
      className="w-full bg-[#FDF6EC] flex flex-col items-center justify-center overflow-hidden"
      /* Maintained your Figma Padding: 100px Top/Bottom */
      style={{ padding: "100px 20px" }} 
    >
      <div className="max-w-[904px] mx-auto text-center px-4 flex flex-col items-center gap-6">
        
        {/* UPDATED: "See Me, See Christ" moved to top with larger font */}
        <motion.span 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[#E8751A]"
          style={{
            fontSize: "48px", // Big font size as requested
            lineHeight: "1.2",
            fontVariantNumeric: "lining-nums tabular-nums",
            fontFeatureSettings: '"liga" off, "calt" off',
            fontFamily: "var(--font-caveat), cursive",
          }}
        >
          See Me, See Christ
        </motion.span>

        {/* Paragraph text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-black font-bold tracking-tight"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "24px",
            lineHeight: "36px", // Increased slightly for better readability with the larger heading
            fontWeight: 700,
            letterSpacing: "0px",
          }}
        >
          We seek the lost and disciple them to become Christ like in word and 
          deed.
        </motion.p>
      </div>
    </section>
  );
}