"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// DATA STRUCTURE
// You can fill in the descriptions for the other items here later.
const BELIEFS = [
  {
    id: "God",
    title: "About God",
    description: "God is the creator and sovereign ruler of all things seen and unseen.",
    verses: ["Genesis 1:1-31", "Genesis 2:1-4"]
  },
  {
    id: "Jesus",
    title: "About Jesus Christ",
    description: "Jesus Christ is the sui generis mediator between Man and God, and that uniquely in him Man can be reconciled to God.",
    verses: ["1 Timothy 2:5", "Isaiah 61:1-3"]
  },
  {
    id: "Spirit",
    title: "About the Holy Spirit",
    description: "The Holy Spirit is the leader of the church and the power of God that manifest his will.",
    verses: ["John 16:13-14", "Acts1:8, 10:38"]
  },
  {
    id: "Salvation",
    title: "About the Salvation",
    description: "Salvation is by grace through faith in Jesus Christ, but the believer is expected to lead a holy life thereafter.",
    verses: ["John 3:16-17", "1 Peter 1:16"]
  },
   
];

export function AboutBeliefs() {
  // State to track which item is open. Default is the first one (index 0).
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#121212] py-20 lg:py-28 text-white">

      {/* CONTAINER */}
      <div className="mx-auto max-w-[1000px] px-6 md:px-12 flex flex-col gap-16">

        {/* HEADER */}
        <div className="flex flex-col items-center text-center gap-2">
          <span className="text-[24px] lg:text-[28px] text-[#E8751A] leading-[12px] tracking-[0.5px] font-normal text-left mb-3"
            style={{
              fontVariantNumeric: "lining-nums tabular-nums",
              fontFeatureSettings: '"liga" off, "calt" off',
              fontFamily: "var(--font-caveat)",
            }}
          >
            What we Believe
          </span>
          <h2 className="text-[32px] sm:text-[36px] sm:mb-8 md:text-[40px] lg:text-[48px] font-bold text-white leading-[1.1] tracking-[-2px] mb-8">
            Our Foundational Beliefs
          </h2>
        </div>

        {/* ACCORDION LIST */}
        <div className="flex flex-col border-t border-white/10">
          {BELIEFS.map((belief, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={belief.id}
                className="border-b border-white/10 overflow-hidden transition-all duration-300"
              >

                {/* ACCORDION HEADER (Clickable) */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-6 flex items-center justify-between text-left group hover:bg-white/5 px-4 rounded-lg transition-colors"
                >
                  <span className="text-[20px] md:text-[24px] font-bold text-white/90 group-hover:text-white transition-colors">
                    {belief.title}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="text-[#E8751A]" size={24} />
                  ) : (
                    <ChevronDown className="text-white/50 group-hover:text-white" size={24} />
                  )}
                </button>

                {/* ACCORDION CONTENT (Visible if Open) */}
                <div
                  className={`px-4 transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100 pb-8" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="flex flex-col gap-6 pt-2">
                    {/* Description Text */}
                    <p className="text-[16px] leading-[28px] text-white/70 max-w-3xl">
                      {belief.description}
                    </p>

                    {/* Verses Pills */}
                    <div className="flex flex-wrap gap-3">
                      {belief.verses?.map((verse) => (
                        <div
                          key={verse}
                          className="bg-[#2E2E2E] px-4 py-2 rounded-[26px] text-[12px] font-bold text-white/90"
                        >
                          {verse}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}