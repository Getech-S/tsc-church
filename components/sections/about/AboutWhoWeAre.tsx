import Image from "next/image";

export function AboutWhoWeAre() {
    return (
        <section className="bg-white py-20 lg:py-28">
            <div className="mx-auto max-w-[1280px] px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* LEFT COLUMN: Text Content */}
                <div id="whoweare" className="flex flex-col items-start">

                    {/* Eyebrow */}
                    <span className="font-caveat text-[28px] leading-[27px] text-[#DD5F4C] mb-4 block"
                        style={{
                            fontVariantNumeric: "lining-nums tabular-nums",
                            fontFeatureSettings: '"liga" off, "calt" off',
                            fontFamily: "var(--font-caveat)",
                        }}>

                        Who we Are
                    </span>

                    {/* Heading */}
                    <h2 className="text-[40px] md:text-[48px] font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight">
                        A Place of Restoration
                    </h2>

                    {/* Main Description */}
                    <p className="text-[16px] md:text-[18px] leading-[28px] text-gray-500 mb-8 font-normal">
                        True Salvation Church is a faith-based family dedicated to the healing and saving of souls. We bring people to the knowledge of the salvation brought by Jesus Christ, helping them experience an abundant life on earth and the guarantee of eternal life
                    </p>

                    {/* Divider Line */}
                    <div className="w-full h-[px] bg-gray-200 mb-8" />

                    {/* Mission Section */}
                    <div className="flex flex-col gap-3 w-full">
                        <h3 className="text-[20px] font-bold text-gray-900">
                            Our Mission
                        </h3>
                        <p className="text-[16px] md:text-[18px] leading-[28px] text-gray-500">
                            To seek the lost and disciple them to become Christ-like in word and deed.
                        </p>

                        {/* Tagline (Bottom Right of text block) */}
                        <span className="font-caveat text-[28px] text-[#DD5F4C] self-end mt-4 transform rotate-2"
                            style={{
                                fontVariantNumeric: "lining-nums tabular-nums",
                                fontFeatureSettings: '"liga" off, "calt" off',
                                fontFamily: "var(--font-caveat)",
                            }}
                        >
                            See me, See Christ
                        </span>
                    </div>

                </div>

                {/* RIGHT COLUMN: Image Grid 
           - UPDATED: Removed fixed h-[500px]. Used items-end to align them at the bottom.
        */}
                <div className="flex gap-6 h-auto items-end">

                    {/* Image 1: Baptism (Left) 
             - UPDATED: Used aspect-[3/4] for a standard portrait shape.
             - Removed h-[85%].
          */}
                    <div className="relative w-1/2 aspect-3/4 rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/about-baptism.jpg"
                            alt="Baptism Service"
                            fill
                            className="object-cover -scale-x-100"
                        />
                    </div>

                    {/* Image 2: Group (Right) 
             - UPDATED: Used aspect-[2/3] for a taller portrait shape.
             - Removed h-full.
          */}
                    <div className="relative w-1/2 aspect-2/3 rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/about-group.jpg"
                            alt="Community Gathering"
                            fill
                            className="object-cover"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}