"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const GIVE_FAQS = [
    {
        question: "How do I calculate my tithe?",

        answer: (
            <div className="flex flex-col gap-4">
                <p>
                    The tithe is holy. It is a declaration that God is our provider and sustainer. It is tenth of what you earned. By returning the tithe, we acknowledge that everything we have flows from him.
                </p>
                <p>
                    <strong>“Bring the whole tithe into the store house… and see if i will not open the windows of haven” Malachai 3:10</strong>
                </p>
                <p>
                    As you tithe, we prophetically declare:
                </p>
                {/* Bullet List */}
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Open heaven over your household</li>
                    <li>Multiplication and overflow to your finances</li>
                    <li>Devourers rebuked and resources preserved</li>
                </ul>
                <p>
                    The tithe establishes covenant alignment and invites divine covering
                </p>
            </div>
        ),
    },
    {
        question: "What is the First Fruit?",
        answer: (
            <div className="flex flex-col gap-4">
                <p>
                    First fruits are a prophetic act of trust. They declare that God goes first in every season, every increase, every beginning.
                </p>
                <p>
                    <strong>“Honor the Lord with the first fruits of all your increase” Proverbs 3:9</strong>
                </p>
                <p>
                    When you give your first fruit:

                </p>
                {/* Bullet List */}
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>You sanctify the whole harvest</li>
                    <li>You invite divine acceleration</li>
                    <li>You set the tone for blessing in the season ahead</li>
                </ul>
                <p>
                    First fruits align beginnings with heaven’s order
                </p>
            </div>
        ),
    },
    {
        question: "What is the Love Offering?",
        answer: (
            <div className="flex flex-col gap-4">
                <p>
                    At True Salvation Church, a love offering aka Kwihuza n’Igicaniro or connecting to the altar is a sacred seed- released with gratitude, compassion to honor the grace of God upon the apostle and connecting to the anointing upon to receive a miracle. It is offered as soon as the Apostle ascends the altar.
                </p>
                <p>
                    <strong>“Honor the Lord with the first fruits of all your increase” Proverbs 3:9</strong>
                </p>
                <p>
                    A prophetic declaration:

                </p>
                {/* Bullet List */}
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Your giving will attract instant favor</li>
                    <li>Your generosity has spoken for you in the heavenly places</li>
                    <li>God has rewarded you openly for what you gave in love</li>
                </ul>
                <p>
                    You are not giving to a man or a moment - you are honoring God through love
                </p>
            </div>
        ),
    },
    {
        question: "What is the Seed Offering?",
        answer: (
            <div className="flex flex-col gap-4">
                <p>
                    A seed offering is a prophetic act of faith. It is given with expectation, planted in obedience and released into God’s timing. At True Salvation Church, we believe every seed carries a future. What you place in God’s hands today becomes tomorrow’s testimony.

                </p>
                <p>
                    <strong>“Unless a grain of wheat falls into the ground and dies, it remains alone; but if it dies, it produces much grain” John 12:24</strong>
                </p>
                <p>The special power of a seed offering Faith beyond what can be seen*Trust beyond what is felt Obedience beyond understanding
                </p>
                <p>
                    A prophetic declaration:

                </p>
                {/* Bullet List */}
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>What you release will return multiplied</li>
                    <li>Delayed promises will begin to move</li>
                    <li>Denied opportunity will be released adequately </li>
                </ul>

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
                        className="font-caveat text-[28px] text-[#DD5F4C]"
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
                    {GIVE_FAQS.map((faq, index) => (
                        <div key={index} className="border-b border-gray-100 last:border-0">

                            {/* Question Header */}
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full py-6 flex items-center justify-between text-left group"
                            >
                                <span className="text-[18px] font-bold text-gray-900 group-hover:text-[#DD5F4C] transition-colors">
                                    {faq.question}
                                </span>
                                <div className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : "rotate-0"}`}>
                                    <ChevronDown className="text-gray-400 group-hover:text-[#DD5F4C]" size={20} />
                                </div>
                            </button>

                            {/* Answer Content */}
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-[1000px] opacity-100 mb-6" : "max-h-0 opacity-0"}`}
                            >
                                <p className="text-[16px] leading-[1.6] text-gray-500 font-normal">

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