"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// DATA STRUCTURE
// You can fill in the descriptions for the other items here later.
const BELIEFS = [
  {
    id: "God",
    title: "About God",
    description: "God is the creator and sovereign ruler of all things seen and un seen. He has eternally existed in three persons – the Father, the Son, and the Holy Spirit. These three are co-equal and are one God.",
    verses: ["Genesis 1:1-31", "Genesis 2:1-4"]
  },
  {
    id: "Jesus",
    title: "About Jesus Christ",
    description: "Jesus Christ is the sui generis mediator between Man and God, and that uniquely in him Man can be reconciled to God.",
    verses: ["1 Timothy 2:5", "Isaiah 9:6"]
  },
  {
    id: "Spirit",
    title: "About the Holy Spirit",
    description: "The Holy Spirit is equal with the Father and the Son as God. He is present in the world to make men aware of their need for Jesus Christ. He also lives in every Christian from the moment of salvation. He provides the Christian with power for living, understanding of spiritual truth, and guidance in doing what is right. The Christian seeks to live under his control daily.",
    verses: ["Genesis 1:1-2", "Acts1:8, 10:38"]
  },
  {
    id: "Salvation",
    title: "About the Salvation",
    description: "Salvation is by grace through faith in Jesus Christ, but the believer is expected to lead a holy life thereafter.",
    verses: ["John 3:16-17", "1 Peter 1:16"]
  },
  {
    id: "Bible",
    title: "About the Bible",
    description: "The Bible is God’s word to all men. It was written by human authors, under the supernatural guidance and inspiration of the Holy Spirit. It is the supreme source of truth for Christian beliefs and living. Because it is inspired by God, it is truth without any mixture of error, without adding or taking away what was written in it.",
    verses: ["2 Timothy 3:16", "2 Peter 1:20, 21"]
  },
  {
    id: "Church",
    title: "About the Church",
    description: "The church is a community of those who follow Christ in faith. We believe the church was envisioned by God, established by Jesus Christ and is energized by the Holy Spirit. God’s church exists to mediate His life-giving presence to a lost and decaying world. Its purpose is to reconcile people and nations to God, and to bring Him glory by carrying out the great commandment and the great commission.",
    verses: ["Matthew 22:37-38", "Acts 2:42-47"]
  },
  {
    id: "Sin",
    title: "About the Sin",
    description: "Sin is placing ourselves at the center of our existence and rejecting God’s purpose and blessing for our lives. It affects every human life – separating us from His presence, robbing us of our potential, and enslaving us to destructive and debilitating behavior. Without God’s intervention, we are incapable of knowing His love and experiencing satisfying life.",
    verses: ["Romans 3:23", "Romans 7:18-25"]
  },
  {
    id: "Future",
    title: "About the Future",
    description: "Jesus Christ will eventually return in person to judge the living and the dead. Those who have accepted Christ will receive the fullness of eternal life and will dwell with God forever. Those who persist in rebellion will be forever cut off from His presence and left to their own destruction. God will end this age with the complete eradication of evil and the final restoration of His creation.",
    verses: ["John 14:2-3", "Revelations 21"]
  }
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
          <span className="font-caveat text-[28px] leading-[27px] text-[#F5BE41] tracking-[0.5px]"
            style={{
              fontVariantNumeric: "lining-nums tabular-nums",
              fontFeatureSettings: '"liga" off, "calt" off',
              fontFamily: "var(--font-caveat)",
            }}
          >
            What we Believe
          </span>
          <h2 className="text-[40px] md:text-[48px] font-bold text-white leading-tight">
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
                    <ChevronUp className="text-[#F5BE41]" size={24} />
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
                      {belief.verses.map((verse) => (
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