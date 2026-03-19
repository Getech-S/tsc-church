import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function Family() {
    return (
        <section className="bg-[#FFFFFD] py-20 lg:py-24 flex justify-center">

            {/* MAIN CONTAINER CARD 
         - Bg: #2E2E2E (Dark Grey)
         - Radius: 24px
         - Padding: 56px
         - Width: Fixed 1280px (Max width)
      */}
            <div className="mx-6 w-full max-w-[1280px] bg-[#FFFFFD] rounded-0px px-6 py-12 md:p-[56px] flex flex-col items-center gap-12">

                {/* HEADER TEXT */}
                <div className="flex flex-col items-center text-center gap-2">
                    {/* Eyebrow: "Distance is No Barrier" 
             - Font: Caveat 
             - Color: #F5BE41 (Gold)
          */}
                    <span className="font-caveat text-[28px] leading-[27px] text-[#E8751A] tracking-[0.5px]"
                        style={{
                            fontVariantNumeric: "lining-nums tabular-nums",
                            fontFeatureSettings: '"liga" off, "calt" off',
                            fontFamily: "var(--font-caveat)",
                        }}
                    >
                        Distance is No Barrier
                    </span>

                    {/* Heading: "One Family, Everywhere."
             - Color: White
          */}
                    <h2 className="text-[40px] md:text-[48px] font-bold text-[#1B1C1E] leading-tight tracking-[-1px]">
                        However You Join Us, <br/>
                        You Belong
                    </h2>
                </div>

                {/* CARDS GRID 
           - Gap: 45px
        */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[45px] w-full">

                    {/* CARD 1: WORSHIP IN PERSON 
             - Height: 350px
             - Radius: 16px
          */}
                    <div className="group relative h-[350px] w-full rounded-[16px] overflow-hidden">
                        <Image
                            src="/TSC_15.JPG.jpeg" // Make sure this file exists in public/
                            alt="Worship In Person"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* GRADIENT OVERLAY 
               - Linear Black gradient for text readability
            */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

                        {/* CONTENT 
               - Padding: 32px
            */}
                        <div className="absolute bottom-0 left-0 w-full p-[32px] flex flex-col items-start gap-4">
                            <h3 className="text-[24px] font-bold leading-[32px] text-white">
                                Come and Experience it.
                            </h3>

                            {/*  NEW DESCRIPTION TEXT 
                            <p className="text-[#FFFFFF]/80 text-[16px] leading-1.5 max-w-[90%]">
                                Experience God’s presence. Worship, grow, and connect in Kampala.
                            </p> */}

                            {/* BUTTON 
                 - Border: 1px Solid #F5BE41
                 - Text: #F5BE41
                 - Radius: 100px
              */}
                            <Link href="\contact#ContactMap">
                                <button className="flex items-center gap-2 rounded-[100px] border border-[#E8A020] px-[16px] py-[8px] text-[14px] font-bold text-[#E8A020] transition-colors hover:border-white hover:text-white cursor-pointer">
                                    Plan your visit
                                    <ChevronRight size={16} />
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* CARD 2: ONLINE PRESENCE */}
                    <div className="group relative h-[350px] w-full rounded-[16px] overflow-hidden">
                        <Image
                            src="/family-online.jpg" // Make sure this file exists in public/
                            alt="Online Presence"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

                        <div className="absolute bottom-0 left-0 w-full p-[32px] flex flex-col items-start gap-4">
                            <h3 className="text-[24px] font-bold leading-[32px] text-white">
                                Your screen is your front row.
                            </h3>
                            {/*  NEW DESCRIPTION TEXT 
                            <p className="text-[#FFFFFF]/80 text-[16px] leading-1.5 max-w-[90%]">
                                Stay connected through our online services, teachings, and prayer moments available on Zoom, YouTube, and TikTok.
                            </p> */}

                            <Link href="\worship-online">
                                <button className="flex items-center gap-2 rounded-[100px] border border-[#E8A020] px-[16px] py-[8px] text-[14px] font-bold text-[#E8A020] transition-colors hover:border-white hover:text-white cursor-pointer">
                                    Worship Online
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