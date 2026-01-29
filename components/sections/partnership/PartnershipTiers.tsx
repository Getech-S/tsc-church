import { ChevronRight } from "lucide-react";
import Link from "next/link";

const TIERS = [
    {
        name: "Gold",
        price: "30",
        role: "The Sustainer",
        description: "A dedicated partnership that fuels our daily mission to ensure every seeker encounters the life-giving presence of God.",
        isHighlight: false, // Standard Style
    },
    {
        name: "Diamond",
        price: "50",
        role: "The Builder",
        description: "A foundational seed that helps grow our family, supporting the environment where people feel at home and meet Jesus Christ.",
        isHighlight: false, // Standard Style
    },
    {
        name: "Platinum",
        price: "100",
        role: "The Visionary",
        description: "A commitment to the highest level of kingdom impact, empowering us to reach nations and bridge the gap for souls seeking the Savior.",
        isHighlight: true, // Special Gold Background Style
    },
];

export function PartnershipTiers() {
    return (
        <section id="tiers" className="bg-white py-20 px-4 md:px-8">
            <div className="mx-auto max-w-[1280px] flex flex-col gap-12">

                {/* 1. SECTION HEADER */}
                <div className="flex flex-col items-center text-center gap-2">
                    {/* Eyebrow - Cursive Font */}
                    <span
                        className="font-caveat text-[28px] text-[#DD5F4C]"
                        style={{ fontFamily: "var(--font-caveat)" }}
                    >
                        Covenants
                    </span>
                    {/* Main Title */}
                    <h2 className="text-[36px] md:text-[48px] font-bold text-gray-900 leading-tight">
                        Choose your Commitment
                    </h2>
                </div>

                {/* 2. MAIN DARK CONTAINER */}
                <div id="back-to-tiers" className="bg-[#1B1C1E] rounded-[24px] p-6 md:p-[56px]">

                    {/* GRID: 1 Col Mobile, 3 Col Desktop */}
                    <div className="flex flex-col-reverse gap-6 lg:grid lg:grid-cols-3 lg:gap-8 max-w-5xl mx-auto">

                        {TIERS.map((tier) => (

                            <div
                                key={tier.name}
                                className={`
                  relative flex flex-col justify-between rounded-[16px] p-[40px] border transition-transform duration-300 hover:-translate-y-1
                  ${tier.isHighlight
                                        ? "bg-[#F5BE41]/10 border-transparent" // Platinum Style
                                        : "bg-transparent border-white/15"      // Gold/Diamond Style
                                    }
                `}
                                // Ensure consistent height for alignment
                                style={{ minHeight: "375px" }}
                            >

                                {/* TOP CONTENT */}
                                <div className="flex flex-col items-start">
                                    {/* Tier Name */}
                                    <span className={`text-[14px] font-bold uppercase tracking-wider mb-2 ${tier.isHighlight ? "text-[#F5BE41]" : "text-white"}`}>
                                        {tier.name}
                                    </span>

                                    {/* Price */}
                                    <div className="flex items-baseline gap-2 mb-6">
                                        <span className="text-[48px] font-bold text-white leading-none">
                                            ${tier.price}
                                        </span>
                                        <span className="text-[14px] text-white/60 font-medium">
                                            per month
                                        </span>
                                    </div>

                                    {/* Role Title */}
                                    <h3 className="text-[18px] text-white/80 font-medium mb-2">
                                        {tier.role}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-[16px] leading-[24px] text-white/60 font-light">
                                        {tier.description}
                                    </p>
                                </div>

                                {/* BOTTOM BUTTON */}
                                <div className="mt-8">
                                    {/* 👇 NEW LINK: Points to /join and passes the tier name (e.g. ?tier=Gold) */}
                                    <Link href={`/partnership/join?tier=${tier.name}`} className="w-full block">
                                        <button
                                            className={`
                        w-full flex items-center justify-between px-6 py-3 rounded-full text-[14px] font-bold transition-all
                        ${tier.isHighlight
                                                    ? "bg-[#F5BE41] text-black hover:bg-[#dca62e] cursor-pointer" // Solid Gold Button
                                                    : "border border-[#F5BE41] text-[#F5BE41] hover:bg-[#F5BE41] hover:text-black cursor-pointer" // Outline Button
                                                }
                      `}
                                        >
                                            Support the work
                                            <ChevronRight size={16} />
                                        </button>
                                    </Link>
                                </div>

                            </div>
                        ))}

                    </div>
                </div>

            </div>
        </section>
    );
}