"use client";

import React from "react";
import Link from "next/link";
import { MessageSquare, ArrowLeft, Sparkles } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function SupportLandingPage() {
    return (
        <div className="flex flex-col min-h-screen bg-black">
            {/*<Navbar />*/}

            {/* Main Area: Compact & Centered */}
            <main className="grow relative flex flex-col items-center justify-center text-center px-6 pt-16">
                
                {/* Background (Subtle & Dark) */}
                <div 
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
                    style={{ backgroundImage: `url('/TSC.jpg')` }}
                >
                    <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black" />
                </div>

                {/* Compact Content Stack */}
                <div className="relative z-10 space-y-4 max-w-lg">
                    
                    {/* SVG Gradient Def */}
                    <svg width="0" height="0" className="absolute">
                        <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#F5BE40" />
                            <stop offset="50%" stopColor="#FFFFFF" />
                            <stop offset="100%" stopColor="#F5BE40" />
                        </linearGradient>
                    </svg>

                    {/* Smaller, Elegant Header */}
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight bg-white bg-clip-text text-transparent pb-2">
                        Kingdom Progress
                    </h1>

                    {/* Brief Description */}
                    <p className="text-white text-sm md:text-base font-medium leading-relaxed">
                        Our digital giving gateway is currently being refined. <br />
                        Your generosity continues to fuel the mission.
                    </p>

                    {/* Tighter Action Section */}
                    <div className="pt-4 flex flex-col items-center gap-4">
                        <Link 
                            href="/contact#contact-form"
                            className="group flex items-center gap-3 px-6 py-3 rounded-full border border-[#F5BE40]/50 hover:border-[#E8A020] hover:bg-white/5 transition-all"
                        >
                            <MessageSquare size={16} stroke="url(#E8751A)" />
                            <span className="text-sm font-bold bg-[#E8751A] bg-clip-text text-transparent">
                                 Contact Us
                            </span>
                            <Sparkles size={14} stroke="url(#E8751A)" className="group-hover:rotate-12 transition-transform" />
                        </Link>

                        <Link href="/" className="text-white hover:text-white/20 text-[11px] font-bold tracking-widest flex items-center gap-2 transition-colors">
                            <ArrowLeft size={12} /> Return Home
                        </Link>
                    </div>
                </div>
            </main>

            {/*<Footer />*/}
        </div>
    );
}