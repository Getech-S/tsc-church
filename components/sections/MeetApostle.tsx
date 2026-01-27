"use client";

import Image from "next/image";
//import { motion } from "framer-motion";

export function MeetApostle() {

    return (
        // 1. CONTAINER: Added min-h-[750px] for Mobile height, changed flex-col to items-end
        <section className="bg-black relative overflow-hidden flex items-end md:block min-h-[750px] md:min-h-0">

            {/* 2. IMAGE CONTAINER 
          - Mobile: Changed to 'absolute inset-0' to cover background.
          - Desktop: Kept exactly as you had it (right aligned, 75% width).
      */}
            <div className="absolute inset-0 w-full h-full md:w-[75%] md:left-auto md:right-0 md:z-10 overflow-hidden"

            >
                <div className="relative h-full w-full">
                    <Image
                        src="/apostle.jpeg"
                        alt="Apostle Charles"
                        fill
                        // Mobile: scale-[1.4] origin-top (Zoomed on face).
                        // Desktop: scale-[1.4] origin-top (Matches your desktop preference).
                        className="object-cover object-top scale-[1.4] origin-top"
                        priority
                    />

                    {/* NEW: Mobile Gradient (Bottom Up) for text readability */}
                    <div className="absolute bottom-0 left-0 right-0 h-[80%] bg-linear-to-t from-black via-black/80 to-transparent md:hidden" />

                    {/* Studio Blend Gradient - DESKTOP ONLY (Unchanged) */}
                    <div
                        className="hidden md:block absolute inset-y-0 left-0 w-[50%] bg-linear-to-r from-black via-black/80 to-transparent"
                    />
                </div>
            </div>

            {/* 3. TEXT CONTAINER 
          - Mobile: Removed 'bg-black', added 'pb-16' to lift text slightly.
          - Desktop: Unchanged.
      */}
            <div className="relative z-20 w-full bg-transparent md:max-w-[1440px] md:min-h-[600px] md:mx-auto md:px-[80px] md:flex md:items-end pointer-events-none">

                {/* Inner Content Wrapper */}
                <div className="pointer-events-auto px-6 pb-16 pt-32 md:py-20 md:pb-[60px] md:px-0 max-w-[485px] flex flex-col gap-[24px]">
                    <h2 className="font-bold text-[36px] leading-[42px] md:text-[45px] md:leading-[52px] text-transparent bg-clip-text bg-linear-to-r from-[#F5BE40] via-[#ffffff] to-[#F5BE40] tracking-[-2px] drop-shadow-lg">
                        Our Spiritual Leadership
                    </h2>
                    <p className="font-normal text-[16px] leading-[26px] text-white/90 drop-shadow-md">
                        Apostle Charles serves as a minister of the Gospel of Jesus Christ, entrusted with shepherding, teaching, and guiding the church in accordance with biblical doctrine. His calling is to point people to Christ, encourage repentance, discipleship, and faithful Christian living through prayer, teaching, and pastoral leadership.
                    </p>
                </div>
            </div>

        </section>
    );
}