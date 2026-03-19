"use client"; // Required for animations

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

export function AboutWhoWeAre() {
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
                        Who We Are
                    </span>

                    {/* Heading */}
                    <h2 className="text-[48px] md:text-[32px] sm:text-[24px] font-bold text-gray-900 leading-[1.1] tracking-[-2px]">
                    A Family Gathered <br/>
                    Around One Truth. 
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
                    True Salvation Church is not a religious institution. It is a family built on the conviction that Jesus Christ heals, saves, and restores anyone who comes to Him. Completely. Without condition. Without exception.
                    </p>
                    <p className="text-[18px] leading-[24px] text-gray-600 font-normal max-w-lg">
                    We exist for the broken, the searching, the spiritually hungry, and the ones who were told there was no hope left. We exist for the person sitting in the back row unsure if any of this is real. We exist for the one who drove past three times before finally walking in.
                    </p>

                    
                </motion.div>

            </div>
        </section>
    );
}