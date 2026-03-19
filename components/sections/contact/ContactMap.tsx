"use client";

import { motion } from "framer-motion";

export function ContactMap() {
  return (
    <section id="ContactMap" className="w-full bg-white pb-20 px-6 md:px-12">
      <div className="mx-auto max-w-[1200px]">
        {/* Container for the map with 16px radius to match your form card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full h-[450px] md:h-[550px] rounded-[24px] overflow-hidden shadow-sm border-white"
        >
          <iframe
            src="https://maps.google.com/maps?q=Muganzirwazza%20Commercial%20Complex%2C%20Kampala&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="True Salvation Church Location"
          ></iframe>
        </motion.div>
        
        {/* Caption/Direct Link for Accessibility */}
        <div className="mt-4 flex justify-end">
          <a 
            href="https://maps.app.goo.gl/YourExactLink" 
            target="_blank" 
            className="text-[13px] text-gray-400 hover:text-[#E8751A] font-medium transition-colors"
          >
            Open in Google Maps ↗
          </a>
        </div>
      </div>
    </section>
  );
}