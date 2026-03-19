"use client"; // Required for animations

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

export function About() {
    return (
        <section className="bg-white py-20 lg:py-28 overflow-hidden">
            <div className="mx-auto max-w-[1240px] px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* DESKTOP IMAGE: Hidden on mobile, shown on lg screens */}
                <motion.div 
                    className="relative rounded-[16px] overflow-hidden self-end h-full w-full hidden lg:block"
                    initial={{ opacity: 0, y: -60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
                >
                    <Image
                        src="/about-group.jpg"
                        alt="Apostle Charles on Stage"
                        width={557}
                        height={408}
                        className="w-full h-[408px] object-cover" 
                        priority
                    />
                </motion.div>

                {/* RIGHT COLUMN: Text Content */}
                <motion.div 
                    className="flex flex-col items-start gap-6 order-1 lg:order-2"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.0, ease: "easeOut" }}
                >
                    {/* Eyebrow */}
                    <span
                        className="font-caveat text-[28px] text-[#E8751A] leading-[27px] tracking-[0.5px] font-normal text-left"
                        style={{
                            fontVariantNumeric: "lining-nums tabular-nums",
                            fontFeatureSettings: '"liga" off, "calt" off',
                            fontFamily: "var(--font-caveat)",
                        }}
                    >
                        You Were Led Here
                    </span>

                    {/* Heading */}
                    <h2 className="text-[48px] md:text-[32px] sm:text-[24px] font-bold text-gray-900 leading-[1.1] tracking-[-2px]">
                        A Place Where Broken <br/>
                        Things Become Whole.
                    </h2>

                    {/* MOBILE IMAGE: Shown only on mobile/tablet, hidden on lg screens */}
                    <motion.div 
                        className="relative rounded-[16px] overflow-hidden w-full lg:hidden my-2"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Image
                            src="/about-group.jpg"
                            alt="Apostle Charles on Stage"
                            width={557}
                            height={408}
                            className="w-full h-auto object-cover" 
                        />
                    </motion.div>

                    {/* Description */}
                    <p className="text-[18px] leading-[24px] text-gray-600 font-normal max-w-lg">
                        True Salvation Church exists for those who are searching, for meaning, for healing, for a place where faith is not just a Sunday ritual but a daily reality. If something brought you here, you are exactly where you are supposed to be.
                    </p>

                    {/* BUTTON */}
                    <Link href="/about#whoweare">
                        <button
                            className="text-[#ffffff] bg-[#E8751A] font-bold text-[15px] rounded-[100px] flex items-center justify-center transition-transform duration-300 hover:scale-105 active:scale-95 cursor-pointer gap-2"
                            style={{
                                paddingTop: '16px',
                                paddingBottom: '16px',
                                paddingLeft: '32px',
                                paddingRight: '32px'
                            }}
                        >
                            Discover Our Story
                            <ChevronRight size={16} className="mt-1" />
                        </button>
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}