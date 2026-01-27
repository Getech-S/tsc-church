import Image from "next/image";
import Link from "next/link";

export function About() {
    return (
        <section className="bg-white py-20 lg:py-28">
            {/* Container: Max width 1220px */}
            <div className="mx-auto max-w-[1220px] px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* LEFT COLUMN: Text Content */}
                <div className="flex flex-col items-start gap-6">

                    {/* Eyebrow: "Who we Are" */}
                    <span
                        className="font-caveat text-[28px] text-[#DD5F4C] leading-[27px] tracking-[0.5px] font-normal text-left"
                        style={{
                            fontVariantNumeric: "lining-nums tabular-nums",
                            fontFeatureSettings: '"liga" off, "calt" off',
                            fontFamily: "var(--font-caveat)",
                        }}
                    >
                        Who we Are
                    </span>

                    {/* Heading */}
                    <h2 className="text-[48px] md:text-[32px] sm:text-[24px] font-bold text-gray-900 leading-[1.1] tracking-[-2px]">
                        More Than a Church. A Family Walking With Christ
                    </h2>

                    {/* Description */}
                    <p className="text-[18px] leading-[24px] text-gray-600 font-normal max-w-lg">
                        True Salvation Church exists for those seeking meaning, healing, and a deeper relationship with God through Jesus Christ. Here, faith goes beyond services, shaping how we live, love, and serve every day.
                    </p>

                    {/* FIXED BUTTON: Single line, pill shape */}
                    <Link href="/about#whoweare">
                        <button
                            className="text-[#ffffff] bg-[#DD5F4C] font-bold text-[15px] rounded-[100px] flex items-center justify-center shadow-md transition-transform duration-300 hover:scale-105 active:scale-95"
                            style={{
                                paddingTop: '16px',
                                paddingBottom: '16px',
                                paddingLeft: '32px',
                                paddingRight: '32px'
                            }}
                        >
                            Discover Our Story
                        </button>
                    </Link>
                </div>

                {/* RIGHT COLUMN: Images */}
                <div className="relative flex gap-4 justify-center lg:justify-end">

                    {/* Image 1: (Lower Left) */}
                    <div className="relative w-[45%] aspect-[3/4] rounded-[16px] overflow-hidden shadow-xl mt-12">
                        <Image
                            src="/about-baptism.jpg" // Make sure this file exists in public/
                            alt="Baptism Service"
                            fill
                            className="object-cover -scale-x-100"
                        />
                    </div>

                    {/* Image 2: (Upper Right - THE APOSTLE) 
             FIXED: Added '-scale-x-100' to horizontally flip the image so he looks left.
          */}
                    <div className="relative w-[45%] aspect-[3/4] rounded-[16px] overflow-hidden shadow-xl mb-12">
                        <Image
                            src="/about-group.jpg" // Make sure this file exists in public/
                            alt="Apostle"
                            fill
                            className="object-cover" // 👈 This flips the image!
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}