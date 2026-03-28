"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const GIVE_FAQS = [
    {
        question: "How do I calculate my tithe?",

        answer: (
            <div className="flex flex-col gap-4">
                <p>
                Your tithe is ten percent of your total income before any deductions. If you earn 100,000 shillings, your tithe is 10,000 shillings. It is the first tenth, taken from the top, before anything else is allocated. The principle is simple: God first, everything else after.
                </p>
               
            </div>
        ),
    },
   
    {
        question: "What is Thanksgiving?",
        answer: "At True Salvation Church, this offering is a sacred express of praise, remembrance, and acknowledgement that every victory, provision, and preservation came from the Lord"


    },
    {
        question: "Is my transaction secure?",
        answer: "Absolutely. We use industry-standard encryption and secure payment gateways to ensure your personal and financial information is never compromised."
    }
];

export function GiveFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white py-20 px-6 md:px-12">
            <div className="mx-auto max-w-[800px] flex flex-col gap-12">

                {/* 1. HEADER */}
                <div className="flex flex-col items-center text-center gap-2">
                    <span
                        className="text-[24px] lg:text-[28px] text-[#E8751A] leading-[27px] tracking-[0.5px] font-normal text-left mb-1"
                        style={{ fontFamily: "var(--font-caveat)" }}
                    >
                        Answers to
                    </span>
                    <h2 className="text-[32px] sm:text-[36px] sm:mb-12 md:text-[40px] lg:text-[48px] font-bold text-gray-900 leading-[1.1] tracking-[-2px] mb-12">
                        Common Questions
                    </h2>
                </div>

                {/* 2. ACCORDION LIST */}
                <div className="flex flex-col">
                    {GIVE_FAQS.map((faq, index) => (
                        <div key={index} className="border-b border-gray-100 last:border-0">

                            {/* Question Header */}
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full py-6 flex items-center justify-between text-left group"
                            >
                                <span className="text-[18px] font-bold text-gray-900 group-hover:text-[#E8751A] transition-colors">
                                    {faq.question}
                                </span>
                                <div className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : "rotate-0"}`}>
                                    <ChevronDown className="text-gray-400 group-hover:text-[#E8751A]" size={20} />
                                </div>
                            </button>

                            {/* Answer Content */}
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-[1000px] opacity-100 mb-6" : "max-h-0 opacity-0"}`}
                            >
                                <div className="text-[16px] leading-[1.6] text-gray-500 font-normal">

                                    {faq.answer}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}