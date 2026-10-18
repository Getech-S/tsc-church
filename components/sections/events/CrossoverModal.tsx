"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Flame, Navigation, X } from "lucide-react";
import { CROSSOVER } from "./crossover";

interface CrossoverModalProps {
  open: boolean;
  onClose: () => void;
}

export function CrossoverModal({ open, onClose }: CrossoverModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  // Lock background scroll and close on Escape while open
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  // Move focus into the dialog so keyboard and screen reader users land on it
  useEffect(() => {
    if (open) dialogRef.current?.focus();
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="crossover-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-[#1B1C1E]/80 backdrop-blur-sm font-montserrat"
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="crossover-title"
            tabIndex={-1}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[860px] max-h-[92vh] bg-[#FFFFFD] rounded-[32px] overflow-hidden shadow-2xl flex flex-col outline-none"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-[#E8751A] transition-colors backdrop-blur-md"
            >
              <X size={20} />
            </button>

            <div className="overflow-y-auto">
              {/* Flyer graphic — grabs attention before the instructions.
                  Capped on short screens; trims the bottom so the title and Apostle Charles stay in view */}
              <div className="relative w-full aspect-[16/9] max-h-[50vh] bg-[#1B1C1E]">
                <Image
                  src={CROSSOVER.flyers.landscape.src}
                  alt="2026–2027 Crossover flyer: My Year of Grand Achievement with Apostle Charles"
                  fill
                  sizes="(max-width: 892px) 100vw, 860px"
                  quality={90}
                  className="object-cover object-top"
                />
              </div>

              <div className="p-6 sm:p-8 md:p-12 text-left">
                {/* Header */}
                <p className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full bg-[#E8751A]/10 text-[#E8751A] text-xs font-black uppercase tracking-widest">
                  <Flame size={14} /> {CROSSOVER.eyebrow}
                </p>
                <h2 id="crossover-title" className="text-2xl sm:text-3xl font-bold text-[#1B1C1E] tracking-tight leading-tight">
                  {CROSSOVER.title}
                </h2>
                <p className="mt-2 text-sm font-semibold text-[#E8A020]">{CROSSOVER.host}</p>
                <p className="mt-5 text-gray-500 leading-relaxed text-sm font-medium">{CROSSOVER.intro}</p>

                {/* What to Bring */}
                <h3 className="mt-8 mb-1 text-lg font-bold text-[#1B1C1E]">What to Bring</h3>
                <p className="mb-4 text-gray-500 text-sm font-medium">{CROSSOVER.bringIntro}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {CROSSOVER.bring.map(({ icon: Icon, title, text }) => (
                    <li key={title} className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                      <span className="shrink-0 p-2 rounded-xl bg-[#E8751A]/10 text-[#E8751A]">
                        <Icon size={18} />
                      </span>
                      <p className="text-sm text-gray-500 leading-relaxed font-medium">
                        <span className="block text-[#1B1C1E] font-bold mb-0.5">{title}</span>
                        {text}
                      </p>
                    </li>
                  ))}
                </ul>

                {/* Event Details */}
                <h3 className="mt-8 mb-4 text-lg font-bold text-[#1B1C1E]">Event Details</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {CROSSOVER.details.map(({ icon: Icon, label, value }) => (
                    <li key={label} className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                      <Icon className="text-[#E8751A] shrink-0 mt-0.5" size={20} />
                      <div>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">{label}</p>
                        <p className="text-[#1B1C1E] font-medium text-sm">{value}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Actions — pinned so they stay reachable while the content scrolls */}
            <div className="shrink-0 flex flex-col sm:flex-row gap-3 p-4 sm:p-6 md:px-12 border-t border-gray-100 bg-[#FFFFFD]">
              <a
                href={CROSSOVER.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#E8751A] text-white font-black py-4 rounded-xl hover:bg-orange-600 transition-all active:scale-95 shadow-lg shadow-orange-100 uppercase tracking-widest text-[14px]"
              >
                <Navigation size={18} /> Get Directions
              </a>
              <button
                onClick={onClose}
                className="flex-1 py-4 rounded-xl border border-gray-200 bg-gray-50 text-[#1B1C1E] font-black hover:bg-gray-100 transition-all active:scale-95 uppercase tracking-widest text-[14px]"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
