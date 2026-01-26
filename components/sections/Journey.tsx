import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function Journey() {
    return (
        <section className="bg-white py-20 lg:py-28">

            {/* Container: Max width 1160px */}
            <div className="mx-auto max-w-[1160px] px-6 md:px-0 flex flex-col gap-12">

                {/* SECTION HEADER */}
                <div className="flex flex-col items-center text-center gap-2">
                    {/* Eyebrow */}
                    <span className="font-caveat text-[28px] leading-[27px] tracking-[0.5px] text-[#DD5F4C]"
                        style={{
                            fontVariantNumeric: "lining-nums tabular-nums",
                            fontFeatureSettings: '"liga" off, "calt" off',
                            fontFamily: "var(--font-caveat)",
                        }}
                    >
                        Experience God’s power
                    </span>

                    {/* Heading */}
                    <h2 className="text-[48px] font-bold leading-[52.8px] tracking-[-2px] text-gray-900">
                        Your Journey Begins Here
                    </h2>
                </div>

                {/* GRID LAYOUT */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* CARD 1: DIVINE HEALING (RED) */}
                    <div className="bg-[#DD5F4C] rounded-[16px] p-[40px] flex flex-col justify-between items-start min-h-[286px]">
                        <div className="flex flex-col gap-4">
                            <span className="text-[18px] leading-[24px] font-normal text-white/90">
                                Healing & Prayer
                            </span>
                            <h3 className="text-[24px] font-bold leading-[32px] text-white">
                                A safe place to bring your burdens, receive prayer, and trust God for healing and renewal.
                            </h3>
                        </div>
                        <Link href="/contact#form-input">
                            <button className="group mt-6 flex items-center gap-2 rounded-[109px] border border-white px-[12px] py-[8px] text-[14px] font-bold text-white transition-colors hover:bg-white hover:text-[#DD5F4C]">
                                Request Prayer
                                <ChevronRight size={16} />
                            </button>
                        </Link>
                    </div>

                    {/* CARD 2: TOTAL DELIVERANCE (GOLD) */}
                    <div className="bg-[#F5BE40] rounded-[16px] p-[40px] flex flex-col justify-between items-start min-h-[286px]">
                        <div className="flex flex-col gap-4">
                            <span className="text-[18px] leading-[24px] font-normal text-gray-900/80">
                                Total Deliverance
                            </span>
                            <h3 className="text-[24px] font-bold leading-[32px] text-gray-900">
                                Break the chains. Experience a direct encounter that leaves you truly loved, free, and alive.
                            </h3>
                        </div>
                        <Link href="/contact#form-input">
                            <button className="group mt-6 flex items-center gap-2 rounded-[109px] border border-gray-900 px-[12px] py-[8px] text-[14px] font-bold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white">
                                Begin Your Freedom Journey
                                <ChevronRight size={16} />
                            </button>
                        </Link>
                    </div>

                    {/* CARD 3: DISCIPLESHIP (VIDEO BACKGROUND) - MODIFIED FOR MOBILE */}
                    <div className="relative col-span-1 md:col-span-2 rounded-[16px] overflow-hidden flex items-end md:items-center min-h-[500px] md:min-h-[400px] md:h-[400px]">

                        {/* The Video Element */}
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover z-0"
                        >
                            <source src="/journey-video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        {/* MOBILE GRADIENT (Bottom Up) - Only visible on mobile to make text readable */}
                        <div className="absolute inset-0 bg-black/70 md:hidden z-10" />

                        {/* DESKTOP GRADIENT (Left to Right) - Only visible on desktop */}
                        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/40 z-10" />

                        {/* Content Layer (z-20) */}
                        <div className="relative z-20 w-full max-w-[600px] flex flex-col items-start gap-8 p-6 pb-12 md:p-[40px]">

                            {/* Text Block */}
                            <div className="flex flex-col gap-4">
                                <span className="text-[18px] leading-[24px] font-normal text-white/90">
                                    Discipleship
                                </span>
                                <h3 className="text-[32px] font-bold leading-[1.2] text-white">
                                    Live so they See Christ in you. Join a family committed to growing into His likeness in every word and every deed.
                                </h3>
                            </div>

                            {/* BUTTON: Join the Family */}
                            <Link href="/contact">
                                <button
                                    className="group flex items-center justify-between rounded-[100px] border border-white px-[12px] py-[8px] text-[14px] font-bold text-white transition-colors hover:bg-white hover:text-black"
                                    style={{ width: '180px', height: '38px' }}
                                >
                                    Join the Family
                                    <ChevronRight size={16} />
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}