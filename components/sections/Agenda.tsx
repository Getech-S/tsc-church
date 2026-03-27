"use client";

import { Clock } from "lucide-react";
import { motion } from "framer-motion";

const gatherings = [
  {
    day: "MONDAY – THURSDAY",
    title: "Kingdom Verdict",
    description: "Your prayer is answered.",
    time: "21:00 – 00:00 · EAT",
  },
  {
    day: "FRIDAY",
    title: "Prayer Flames",
    description: "A focused hour of prayer and intercession.",
    time: "21:00 – 00:00 · EAT",
  },
  {
    day: "SATURDAY",
    title: "One on One With Apostle",
    description: "Personal spiritual guidance and ministry.",
    time: "11:00 – 16:00 · EAT",
  },
  {
    day: "SUNDAY",
    title: "Raw Miracle Service",
    description: "A powerful gathering of worship, Word, and miracles.",
    time: "15:00 – 19:00 · EAT",
  },
];

export default function WeeklyAgenda() {
  return (
    <section className="bg-[#1B1C1E] py-20 lg:py-28 text-white overflow-hidden">
      <div className="w-full mx-auto px-6 md:px-10 lg:px-32">

        {/* HEADER */}
        <motion.div
          className="text-center mb-8 md:mb-24"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="text-[24px] lg:text-[28px] leading-[12px] tracking-[0.5px] text-[#E8751A] mb-4"
            style={{
              fontVariantNumeric: "lining-nums tabular-nums",
              fontFeatureSettings: '"liga" off, "calt" off',
              fontFamily: "var(--font-caveat)",
            }}
          >
            Weekly Program
          </p>
          <h2 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-bold text-white leading-[1.1] tracking-[-1px]">
            Experience God <br />
            With Us All Week Long
          </h2>
        </motion.div>

       {/* GRID — no border-top */}
        <div className="grid grid-cols-1 md:grid-cols-4">
          {gatherings.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`
                flex flex-col items-start px-6 md:px-4 py-8
                border-b border-white/10
                ${index !== 0 ? "md:border-l border-white/10" : ""}
                md:border-b-0
              `}
            >
              {/* Day Label — largest, most prominent */}
              <p className="text-[16px] sm:text-[18px] tracking-[0.2em] font-bold text-white uppercase">
                {item.day}
              </p>

              {/* Orange Line */}
              <div className="w-8 h-[2px] bg-[#E8751A] mt-3 mb-8 md:mb-10" />

              {/* Program Title — second in hierarchy */}
              <h3 className="text-[16px] md:text-[18px] font-semibold tracking-tight leading-[1.3] mb-3">
                {item.title}
              </h3>

              {/* Description — third */}
              <p className="text-white/70 text-[14px] sm:text-sm leading-relaxed mb-8 md:mb-10 min-h-[48px]">
                {item.description}
              </p>

              {/* Clock — last, smallest */}
              <div className="mt-auto flex items-center gap-2">
                <Clock size={20} className="text-white/70" />
                <span className="text-[14px] font-bold tracking-widest text-white/70 uppercase">
                  {item.time}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}