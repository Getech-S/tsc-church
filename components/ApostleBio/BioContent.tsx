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
                  <p><strong>Apostle Charles</strong> is a devoted minister of the Gospel of Jesus Christ, called and entrusted with the responsibility of shepherding, teaching, and guiding the Church in alignment with sound biblical doctrine. His ministry is centered on leading people back to Christ through truth, transformation, and a life fully surrendered to God.</p>

                  <p>His divine calling began in <strong>2014</strong>, when God revealed Himself to him in a deeper way, calling him into apostolic ministry and commissioning him with a clear mandate: to restore <strong>repentance</strong> and <strong>righteousness</strong> among God’s people, and to teach the message of <strong>True Salvation</strong> as the foundation of a genuine relationship with Christ. Through this calling, he was named and set apart as an Apostle, carrying a message that challenges believers to return to the foundational truths of the Gospel.</p>

<p>Apostle Charles’ teachings strongly emphasize <strong>Holiness</strong>, which he defines through his well-known declaration: <em>“Holiness is the way of life.”</em> His ministry also focuses on <strong>Repentance, Healing, and Deliverance</strong>, calling individuals to experience true spiritual freedom and transformation through Christ.</p>

<p>Central to his message is the concept of <strong>“Shalom”</strong>, which he teaches as the inheritance of every child of God. According to Apostle Charles, Shalom consists of three essential dimensions:</p>

<ul>
  <li>1. The guarantee of eternal life</li>
  <li>2. Inner peace</li>
  <li>3. A healthy and abundantly prosperous life</li>
</ul>

<p>Through his teachings, he seeks to raise believers who live in the fullness of God’s promises—spiritually, physically, and materially.</p>

<p>His ministry continues to impact lives through preaching, teaching, and spiritual guidance, with a mission to prepare a holy and righteous generation ready for the return of Christ.</p>
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