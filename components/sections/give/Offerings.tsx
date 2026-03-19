"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const offeringData = [
  {
    id: "tithe",
    title: "The Tithe",
    description: "Tithe is holy. It is a declaration that God is our provider and sustainer. It is a tenth of what you earned. By returning the tithe, we acknowledge that everything we have flows from Him. The tithe establishes covenant alignment and invites divine covering.",
    scripture: "Bring the whole tithe into the store house... and see if I will not open the windows of heaven",
    reference: "Malachi 3:10",
    declarations: [
      "Open heaven over your household",
      "Multiplication and overflow to your finances",
      "Devourers rebuked and resources preserved"
    ],
    buttonText: "Return Tithe"
  },
  {
    id: "firstfruit",
    title: "First Fruit",
    description: "First fruits are a prophetic act of trust. They declare that God goes first in every season, every increase, every beginning. First fruits align beginnings with heaven’s order.",
    scripture: "Honor the Lord with the first fruits of all your increase",
    reference: "Proverbs 3:9",
    declarations: ["You sanctify the whole harvest", "You invite divine acceleration", "You set the tone for blessing in the season ahead"],
    buttonText: "Give First Fruit"
  },
  {
    id: "love",
    title: "Love Offering",
    description: "At True Salvation Church, a love offering 'Kwihuza n’Igicaniro' or connecting to the altar is a sacred seed- released with gratitude, compassion to honor the grace of God upon the Apostle and connecting to the anointing upon him to receive a miracle. It is offered as soon as Apostle ascends the altar.",
    scripture: "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion.",
    reference: "2 Corinthians 9:7",
    declarations: ["Your giving will attract instant favor", "Your generosity has spoken for you in the heavenly places", "God has rewarded you openly for what you gave in love"],
    buttonText: "Give Love Offering"
  },
  {
    id: "seed",
    title: "Seed Offering",
    description: " A seed offering is a prophetic act of faith. It is given with expectation, planted in obedience and released into God’s timing. At True Salvation Church, we believe every seed carries a future. What you place in God’s hands today becomes tomorrow’s testimony. The special power of a seed offering: Faith beyond what can be seen* Trust beyond what is felt* Obedience beyond understanding.",
    scripture: "Unless a grain of wheat falls into the ground and dies, it remains alone; but if it dies, it produces much grain.",
    reference: "John 12:24",
    declarations: ["What you release will return multiplied", "Delayed promises will begin to move", "Denied opportunity will be released adequately"],
    buttonText: "Sow a Seed"
  },
  {
    id: "thanks",
    title: "Thanksgiving",
    description: "At True Salvation Church, this offering is a sacred express of praise, remembrance, and acknowledgement that every victory, provision, and preservation came from the Lord.",
    scripture: "Enter his gates with thanksgiving and his courts with praise; give thanks to him and praise his name.",
    reference: "Psalm 100:4",
    declarations: ["Continual joy in your home", "Victory over every battle", "Doors that no man can shut"],
    buttonText: "Give Thanks"
  }
];

export function Offerings() {
  const [activeId, setActiveId] = useState("tithe");

  const activeContent = offeringData.find((item) => item.id === activeId);

  return (
    <section className="bg-[#FDF6EC] py-[100px] px-6">
      <div className="max-w-[1440px] mx-auto text-center mb-12">
        <span className="text-[#E8751A] font-caveat text-[25px] block mb-2"
        style={{
            fontVariantNumeric: "lining-nums tabular-nums",
            fontFeatureSettings: '"liga" off, "calt" off',
            fontFamily: "var(--font-caveat)",
        }}
        >Offerings</span>
        <h2 className="text-[#1B1C1E] font-montserrat font-bold text-[36px] tracking-[-1px]">
          Honor the Covenant
        </h2>
      </div>

      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-4 items-stretch min-h-[620px]">
        
        {offeringData.map((item) => {
          const isActive = activeId === item.id;

          return (
            <motion.div
              key={item.id}
              layout
              onClick={() => setActiveId(item.id)}
              className={`relative rounded-[16px] overflow-hidden cursor-pointer transition-all duration-500 flex flex-col ${
                isActive ? "flex-[4] p-8 md:p-12 cursor-default" : "flex-1 min-w-[100px] justify-end p-6"
              }`}
              style={{
                background: "linear-gradient(135deg, rgba(27, 28, 30, 0.9) 0%, rgba(27, 28, 30, 1) 100%)",
                backdropFilter: isActive ? "blur(45px)" : "none",
              }}
            >
              {/* Background Accents */}
              <div className={`absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,117,26,0.15),transparent_60%)] pointer-events-none transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/80 z-10" />

              {/* ACTIVE CONTENT VIEW */}
              <AnimatePresence mode="wait">
                {isActive ? (
                  <motion.div
                    key="active"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="relative z-20 h-full flex flex-col justify-between"
                  >
                    <div className="max-w-[554px]">
                      <h3 className="text-[#FDF6EC] font-montserrat font-bold text-[28px] mb-6">{item.title}</h3>
                      <div className="space-y-6 text-[#FDF6EC]/80 font-montserrat text-[15px] leading-relaxed">
                        <p>{item.description}</p>
                        <p className="italic font-medium border-l-2 border-[#E8751A] pl-4">
                          "{item.scripture}" <br />
                          <span className="text-[#E8751A] not-italic text-sm">— {item.reference}</span>
                        </p>
                        <div className="pt-2">
                          <p className="font-bold text-white mb-3">Prophetic Declarations:</p>
                          <ul className="space-y-2">
                            {item.declarations.map((dec, i) => (
                              <li key={i} className="flex items-center gap-3">
                                <span className="text-[#E8751A]">✓</span>
                                <span>{dec}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <Link href="/give#offer">
                    <button className="mt-8 bg-[#E8751A] text-white font-bold py-3 px-10 rounded-full w-fit hover:scale-105 transition-transform">
                      {item.buttonText}
                    </button>
                    </Link>
                  </motion.div>
                ) : (
                  /* COLLAPSED PILL VIEW */
                  <motion.div
                    key="collapsed"
                    className="relative z-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <h4 className="text-[#FDF6EC] font-montserrat font-bold text-[18px] leading-tight rotate-0 lg:-rotate-90 lg:whitespace-nowrap lg:origin-left lg:mb-12">
                      {item.title}
                    </h4>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}

      </div>
    </section>
  );
}