import Image from "next/image";

export function AboutLeadership() {
    return (
        <section className="bg-white py-20 lg:py-28">
            <div className="mx-auto max-w-[1280px] px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* LEFT COLUMN: Text Content */}
                <div className="flex flex-col items-start">

                    {/* Eyebrow: Handwritten Style */}
                    <span className="font-caveat text-[28px] leading-[27px] text-[#DD5F4C] mb-4 block"
                        style={{
                            fontVariantNumeric: "lining-nums tabular-nums",
                            fontFeatureSettings: '"liga" off, "calt" off',
                            fontFamily: "var(--font-caveat)",
                        }}
                    >
                        Leadership
                    </span>

                    {/* Main Heading 
             - Size: 48px
             - Weight: Bold (700)
          */}
                    <h2 className="text-[40px] md:text-[48px] font-bold text-gray-900 leading-[1.1] mb-6 tracking-[-1px]">
                        Jesus Christ <br />
                        is the Shepherd
                    </h2>

                    {/* Subtext */}
                    <p className="text-[16px] text-gray-500 mb-10 font-medium">
                        He is the theme, the head, and the only owner of this house.
                    </p>

                    {/* Divider Line */}
                    <div className="w-full h-[1px] bg-gray-200 mb-10" />

                    {/* Apostle Section */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-[24px] font-bold text-gray-900">
                            Apostle Charles
                        </h3>
                        <p className="text-[16px] leading-[28px] text-gray-500 max-w-lg">
                            serves as a minister of the Gospel of Jesus Christ, entrusted with shepherding, teaching, and guiding the church in accordance with biblical doctrine. His calling is to point people to Christ, encourage repentance, discipleship, and faithful Christian living through prayer, teaching, and pastoral leadership.
                        </p>
                    </div>

                </div>

                {/* RIGHT COLUMN: Image 
           - Radius: 16px
           - Height: 619px (on desktop)
        */}
                <div className="relative w-full aspect-[4/5] lg:h-[619px] lg:w-auto rounded-[16px] overflow-hidden shadow-lg">
                    <Image
                        src="/about-apostle.jpg"
                        alt="Apostle Charles"
                        fill
                        className="object-cover"
                    />
                </div>

            </div>
        </section>
    );
}