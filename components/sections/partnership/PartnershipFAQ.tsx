"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
    {
        question: "How are the funds utilized?",
        answer: "All resources are managed with radical transparency, honesty, and accountability to ensure they exclusively fuel the mission of healing and saving souls."
    },
    {
        question: "Can I give if I live outside of Uganda?",
        answer: "Yes! We have secure online giving options that accept international cards (Visa, MasterCard) and mobile money transfers, allowing you to partner with us from anywhere in the world."
    },
    {
        question: "Is my partnership donation recurring?",
        answer: "This is a recurring monthly partnership. It is a  monthly commitments as they help us plan and sustain our mission effectively."
    }
];

export function PartnershipFAQ() {
    // State to track which item is open (null = all closed)
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
                        className="font-caveat text-[28px] text-[#E8751A]"
                        style={{ fontFamily: "var(--font-caveat)" }}
                    >
                        Answers to
                    </span>
                    <h2 className="text-[36px] md:text-[40px] font-bold text-gray-900">
                        Common Questions
                    </h2>
                </div>

                {/* 2. ACCORDION LIST */}
                <div className="flex flex-col">
                    {FAQS.map((faq, index) => (
                        <div key={index} className="border-b border-gray-100 last:border-0">

                            {/* Question Clickable Area */}
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

                            {/* Answer Area (Collapsible) */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-[200px] opacity-100 mb-6" : "max-h-0 opacity-0"}`}
                            >
                                <p className="text-[16px] leading-[1.6] text-gray-600 font-normal">
                                    {faq.answer}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}