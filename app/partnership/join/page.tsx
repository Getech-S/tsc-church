"use client";

import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ChevronLeft, Lock, Calendar } from "lucide-react";
import Link from "next/link";
import { Suspense, useState } from "react";
import { COUNTRIES } from "@/lib/constants";

// 1. DEFINE THE DATA FOR LOOKUP
const TIER_DATA: Record<string, { price: string; description: string; role: string }> = {
    Gold: {
        price: "30",
        role: "The Sustainer",
        description: "A dedicated partnership that fuels our daily mission to ensure every seeker encounters the life-giving presence of God."
    },
    Diamond: {
        price: "50",
        role: "The Builder",
        description: "A foundational seed that helps grow our family, supporting the environment where people feel at home and meet Jesus Christ."
    },
    Platinum: {
        price: "100",
        role: "The Visionary",
        description: "A commitment to the highest level of kingdom impact, empowering us to reach nations and bridge the gap for souls seeking the Savior."
    }
};

function JoinContent() {
    const searchParams = useSearchParams();
    // Get 'tier' from URL, default to 'Platinum' if missing
    const tierName = searchParams.get("tier") || "Platinum";
    const tier = TIER_DATA[tierName] || TIER_DATA["Platinum"];

    // State for Payment Timing Selection
    const [paymentTiming, setPaymentTiming] = useState<"later" | "now">("now");

    return (
        <section className="min-h-screen pt-[140px] pb-20 px-4 md:px-8 bg-[#FDF2ED]">
            <div className="mx-auto max-w-[1100px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">

                {/* LEFT COLUMN: SELECTED COVENANT CARD */}
                <div className="lg:col-span-5 flex flex-col gap-6">

                    {/* The Card */}
                    <div className="bg-white rounded-[24px] p-8 md:p-10 shadow-sm flex flex-col gap-4">
                        <span className="text-[#DD5F4C] text-[14px] font-bold uppercase tracking-wider">
                            {tierName}
                        </span>

                        <h2 className="text-[24px] font-bold text-gray-900 leading-tight">
                            Monthly Covenant
                        </h2>

                        {/* Price */}
                        <div className="text-[64px] font-bold text-[#DD5F4C] leading-none tracking-tight">
                            ${tier.price}
                        </div>

                        <p className="text-[16px] leading-[1.6] text-gray-500 font-normal mt-2">
                            <span className="font-bold text-gray-700 block mb-1">{tier.role}</span>
                            {tier.description}
                        </p>
                    </div>

                    {/* Back Link */}
                    <Link
                        href="/partnership#back-to-tiers"
                        className="order-1 lg:order-2 text-gray-500 flex items-center gap-2 hover:text-[#DD5F4C] transition-colors self-start lg:self-auto"
                    >
                        <ChevronLeft size={16} />
                        Choose Different Covenant
                    </Link>

                </div>

                {/* RIGHT COLUMN: FORM */}
                <div className="lg:col-span-7 bg-white rounded-[16px] shadow-xl overflow-hidden">

                    {/* Form Header */}
                    <div className="bg-[#DD5F4C] p-8 text-center text-white">
                        <h2 className="text-[28px] md:text-[32px] font-bold leading-tight">Partner Details</h2>
                        <p className="text-white/90 text-[16px] mt-1 font-medium">Please fill in your information below</p>
                    </div>

                    {/* Form Inputs */}
                    <form className="p-6 md:p-10 flex flex-col gap-5">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="flex flex-col gap-2">
                                <label className="text-[14px] font-medium text-gray-700">Full Name</label>
                                <input type="text" placeholder="Enter full name" className="w-full px-4 py-3 rounded-[6px] border border-gray-200 text-[14px] focus:outline-none focus:border-[#DD5F4C]" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[14px] font-medium text-gray-700">Email</label>
                                <input type="email" placeholder="Enter email address" className="w-full px-4 py-3 rounded-[6px] border border-gray-200 text-[14px] focus:outline-none focus:border-[#DD5F4C]" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[14px] font-medium text-gray-700">Phone Number</label>
                            <input type="tel" placeholder="Enter phone number" className="w-full px-4 py-3 rounded-[6px] border border-gray-200 text-[14px] focus:outline-none focus:border-[#DD5F4C]" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[14px] font-medium text-gray-700">Country</label>
                            <select className="w-full px-4 py-3 rounded-[6px] border border-gray-200 text-[14px] bg-white cursor-pointer focus:outline-none focus:border-[#DD5F4C]" defaultValue="">
                                <option value="" disabled>Select your country</option>
                                {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
                            </select>
                        </div>

                        {/* --- NEW SECTION: PAYMENT TIMING SELECTION --- */}
                        <div className="flex flex-col gap-3 mt-2">
                            <label className="text-[14px] font-medium text-gray-700">When would you like to commit?</label>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                {/* Option 1: Commit Later */}
                                <div
                                    onClick={() => setPaymentTiming("later")}
                                    className={`cursor-pointer rounded-[8px] p-4 border transition-all duration-200 flex flex-col gap-1 relative ${paymentTiming === "later"
                                        ? "bg-[#FFF5F2] border-[#DD5F4C]"
                                        : "bg-white border-gray-200 hover:border-gray-300"
                                        }`}
                                >
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${paymentTiming === "later" ? "border-[#DD5F4C]" : "border-gray-300"
                                            }`}>
                                            {paymentTiming === "later" && <div className="w-2.5 h-2.5 rounded-full bg-[#DD5F4C]" />}
                                        </div>
                                        <span className="font-bold text-gray-900 text-[15px]">Commit Later</span>
                                    </div>
                                    <span className="text-[13px] text-gray-500 pl-7">${tier.price}/Month</span>
                                </div>

                                {/* Option 2: Commit Now */}
                                <div
                                    onClick={() => setPaymentTiming("now")}
                                    className={`cursor-pointer rounded-[8px] p-4 border transition-all duration-200 flex flex-col gap-1 relative ${paymentTiming === "now"
                                        ? "bg-[#FFF5F2] border-[#DD5F4C]"
                                        : "bg-white border-gray-200 hover:border-gray-300"
                                        }`}
                                >
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${paymentTiming === "now" ? "border-[#DD5F4C]" : "border-gray-300"
                                            }`}>
                                            {paymentTiming === "now" && <div className="w-2.5 h-2.5 rounded-full bg-[#DD5F4C]" />}
                                        </div>
                                        <span className="font-bold text-gray-900 text-[15px]">Commit Now</span>
                                    </div>
                                    <span className="text-[13px] text-gray-500 pl-7">${tier.price}/Month</span>
                                </div>

                            </div>
                        </div>

                        {/* --- CONDITIONAL DATE PICKER (Only if 'later' is selected) --- */}
                        {paymentTiming === "later" && (
                            <div className="flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
                                <label className="text-[14px] font-medium text-gray-700">Choose your commitment date</label>
                                <div className="relative">
                                    <input
                                        type="date"
                                        className="w-full px-4 py-3 rounded-[6px] border border-gray-200 text-[14px] focus:outline-none focus:border-[#DD5F4C] appearance-none"
                                    />
                                    <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                                </div>
                            </div>
                        )}

                        {/* Submit Button - Dynamic Text */}
                        <button className={`w-full text-white font-bold py-4 rounded-[100px] hover:opacity-90 transition-all mt-4 text-[16px] shadow-xl ${paymentTiming === "now"
                            ? "bg-[#DD5F4C] shadow-[#DD5F4C]/20" // Primary Color for Payment
                            : "bg-[#E07E6C] shadow-[#E07E6C]/20" // Slightly softer color for Sign Up
                            }`}>
                            {paymentTiming === "now" ? "Complete my Commitment" : "Sign Up"}
                        </button>

                        <div className="flex items-center justify-center gap-2 text-gray-400 text-[12px] mt-2">
                            <Lock size={12} />
                            <span>Your privacy is a sacred trust we never share your data.</span>
                        </div>

                    </form>
                </div>

            </div>
        </section>
    );
}

export default function JoinPage() {
    return (
        <main className="relative min-h-screen flex flex-col bg-[#FDF2ED]">
            <Navbar />
            <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
                <JoinContent />
            </Suspense>
            <Footer />
        </main>
    );
}