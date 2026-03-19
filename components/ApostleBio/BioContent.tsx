"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function BioContent() {
  const [activeTab, setActiveTab] = useState("The Calling");
  const tabs = ["The Calling",
     //"Family", 
    // "Messages"
    ];

  return (
    <>
      {/* Navigation Tabs Bar */}
      <nav className="border-b border-gray-100 bg-[#1B1C1E]">
        <div className="max-w-[1200px] mx-auto flex justify-center gap-8 md:gap-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative py-4 px-2 text-[16px] font-bold transition-colors ${
                activeTab === tab ? "text-[#E8751A]" : "text-white/60"
              }`}
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {tab}
              {activeTab === tab && (
                <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E8751A]" />
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Text Content - Fixed Width 840px */}
      <section className="py-20 px-6">
        <div className="max-w-[840px] mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-gray-600 text-[18px] leading-[32px] space-y-8"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {activeTab === "The Calling" && (
                <>
                  <p>Apostle Charles Muhizi serves as the legal representative and founding leader of True Salvation Church. His calling, as he has described it, is not to be admired or followed for his own sake, but to stand as a signpost pointing every heart away from the weight of the world and toward the freedom found only in Jesus Christ.</p>
                  <p>His ministry is built on three pillars that have remained constant from the beginning. The first is prayer, a conviction that nothing of eternal value happens without it. The second is the Word, a belief that the Bible is not merely a religious text but a living truth that changes people when they encounter it honestly. The third is personal encounter, the understanding that healing and transformation rarely happen from a distance. They happen when someone who carries the presence of God gets close enough to another human life to let that presence do its work.</p>
                  <p>This is why he meets people personally. Why the church he leads is structured around encounter, in the daily gatherings, in the prayer sessions, in the one on one appointments where he sits with individuals and believes God for the specific thing that specific person needs. It is not a method. It is a conviction.</p>
                  <p>True Salvation Church began in Kigali, Rwanda, and has since established its home in Kampala, Uganda, a movement, not a monument. Wherever it has gone, the same thing has followed: people encountering God in ways they did not expect, leaving changed in ways they cannot fully explain, and returning because something in them recognises that what happened here was real.</p>
                </>
              )}
              {activeTab === "Family" && <p className="text-center italic py-10">Information about the family of Apostle Charles...</p>}
              {activeTab === "Messages" && <p className="text-center italic py-10">Access recent teachings and messages here...</p>}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}