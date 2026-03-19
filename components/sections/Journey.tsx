"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Journey() {
    return (
        <section className="bg-[#FDF6EC] py-20 lg:py-28 overflow-hidden">

            {/* Container: Max width 1160px */}
            <div className="mx-auto max-w-[1160px] px-6 md:px-0 flex flex-col gap-12">

                {/* SECTION HEADER - Fades in from above */}
                <motion.div 
                    className="flex flex-col items-center text-center gap-2"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Eyebrow */}
                    <span className="font-caveat text-[28px] leading-[27px] tracking-[0.5px] text-[#E8751A]"
                        style={{
                            fontVariantNumeric: "lining-nums tabular-nums",
                            fontFeatureSettings: '"liga" off, "calt" off',
                            fontFamily: "var(--font-caveat)",
                        }}
                    >
                        Where Do You Begin?
                    </span>

                    {/* Heading */}
                    <h2 className="text-[48px] font-bold leading-[52.8px] tracking-[-2px] text-gray-900">
                       Every Journey With God <br/>
                       Starts Somewhere
                    </h2>
                </motion.div>

                {/* GRID LAYOUT */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-3">

                    {/* CARD 1: DIVINE HEALING (WITH IMAGE BACKGROUND) */}
<motion.div 
    className="relative overflow-hidden rounded-[16px] p-[40px] flex flex-col justify-between items-start min-h-[286px] group"
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.1 }}
>
    {/* Background Image Layer */}
    <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: "url('/journey1.jpg')" }} 
    />
    
    {/* Color Overlay: Using a semi-transparent version of your original red #DD5F4C 
        to ensure text remains readable and the brand color is preserved */}
    <div className="absolute inset-0 z-0 bg-[#E8751A]/80 mix-blend-multiply" />
    <div className="absolute inset-0 z-0 bg-linear-to-t from-black/60 to-transparent" />

    {/* Content Wrapper - Must be z-10 to stay above the image */}
    <div className="relative z-10 flex flex-col gap-4">
        <span className="text-[18px] leading-[24px] font-normal text-white/90">
            Healing & Prayer
        </span>
        <h3 className="text-[24px] font-bold leading-[32px] text-white">
            A safe place to bring your burdens, receive prayer, and trust God for healing and renewal.
        </h3>
    </div>

    <Link href="/contact#form-input" className="relative z-10">
        <button className="group mt-6 flex items-center gap-2 rounded-[109px] border border-[#E8A020] px-[12px] py-[8px] text-[14px] font-bold text-[#E8A020] transition-all hover:border-white hover:text-white">
            Request Prayer
            <ChevronRight size={16} />
        </button>
    </Link>
</motion.div>

                    {/* CARD 2: TOTAL DELIVERANCE (WITH IMAGE BACKGROUND) */}
<motion.div 
    className="relative overflow-hidden rounded-[16px] p-[40px] flex flex-col justify-between items-start min-h-[286px] group"
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.3 }}
>
    {/* Background Image Layer */}
    <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: "url('/journey2.png')" }} 
    />
    
    {/* Gold Tint Overlay - Using #F5BE40 with mix-blend-multiply */}
    <div className="absolute inset-0 z-0 bg-[#E8A020]/80 mix-blend-multiply" />
    {/* Subtle dark gradient for extra legibility */}
    <div className="absolute inset-0 z-0 bg-linear-to-t from-black/50 to-transparent" />

    {/* Content Wrapper */}
    <div className="relative z-10 flex flex-col gap-4">
        <span className="text-[18px] leading-[24px] font-normal text-white/90">
            Total Deliverance
        </span>
        <h3 className="text-[24px] font-bold leading-[32px] text-white">
        Break free from spiritual chains and experience the freedom Christ gives.
        </h3>
    </div>

    <Link href="/contact#form-input" className="relative z-10">
        <button className="group mt-6 flex items-center gap-2 rounded-[109px] border border-[#E8A020] px-[12px] py-[8px] text-[14px] font-bold text-[#E8A020] transition-all hover:border-white hover:text-white">
            Begin Your Freedom Journey
            <ChevronRight size={16} />
        </button>
    </Link>
</motion.div>

                    {/* CARD 3: DISCIPLESHIP (VIDEO BACKGROUND) */}
                    <motion.div 
                        className="relative col-span-1 md:col-span-2 rounded-[16px] overflow-hidden flex items-end md:items-center min-h-[500px] md:min-h-[400px] md:h-[400px]"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                    >

                        {/* The Video Element */}
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover z-0"
                        >
                            <source src="/journeyvid1.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        <div className="absolute inset-0 bg-black/70 md:hidden z-10" />
                        <div className="hidden md:block absolute inset-0 bg-linear-to-r from-black via-black/70 to-black/40 z-10" />

                        <div className="relative z-20 w-full flex flex-col items-start gap-8 p-6 pb-12 md:p-[40px]">
                            <div className="flex flex-col gap-4">
                                <span className="text-[18px] leading-[24px] font-normal text-white/90">
                                    Discipleship
                                </span>
                                <h3 className="text-[32px] font-bold leading-[1.2] text-white w-full">
                                    Live so they See Christ in you. Join a family committed to growing into His likeness in every word and every deed.
                                </h3>
                            </div>

                            <Link href="/contact">
                                <button
                                    className="group flex items-center justify-between rounded-[100px] border border-[#E8A020] px-[12px] py-[8px] text-[14px] font-bold text-[#E8A020] transition-colors hover:border-white hover:text-white"
                                    style={{ width: '180px', height: '38px' }}
                                >
                                    Join the Family
                                    <ChevronRight size={16} />
                                </button>
                            </Link>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}