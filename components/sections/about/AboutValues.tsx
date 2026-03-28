export function AboutValues() {
    const values = [
        {
            title: "Bold Faith",
            desc: "We trust God enough to act even when fear screams don’t. By faith in Jesus, lives are restored and his name is glorified everyday."
        },
        {
            title: "Integrity",
            desc: "We speak truth in love and value authenticity, striving for a biblical humility that never compromises on the truth."
        },
        {
            title: "Stewardship",
            desc: "We firmly believe all resources belong to our Father, and we commit to radically and unreservedly use what he has blessed us with to forward his kingdom."
        },
        {
            title: "Expected Reward",
            desc: "We serve with the joy of a faithful servant, looking forward to eternal glory with Christ. Meanwhile, we are  gladly living abundantly."
        }
    ];

    return (
        <section className="bg-[#FFFFFD] py-20 lg:py-[100px]">

            {/* CONTAINER: Max width 1280px to align with other sections */}
            <div className="mx-auto max-w-[1280px] px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">

                {/* LEFT COLUMN: Main Heading & Description (Span 4) */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                <p className="text-[24px] lg:text-[28px] text-[#E8751A] leading-[12px] tracking-[0.5px] font-normal text-left "
                 style={{
                   fontVariantNumeric: "lining-nums tabular-nums",
                   fontFeatureSettings: '"liga" off, "calt" off',
                   fontFamily: "var(--font-caveat)",
                 }}
              >
                What We Stand On
              </p>
                    <h2 className="text-[32px] sm:text-[36px] sm:mb-8 md:text-[40px] lg:text-[48px] font-bold text-gray-900 leading-[1.1] tracking-[-2px] mb-8">
                        Beyond Sunday. <br/>
                        This Is Our Life.
                    </h2>
                    
                </div>

                {/* RIGHT COLUMN: Values Grid (Span 8) 
             - 2 Column Grid on Desktop
          */}
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-12">
                    {values.map((value, index) => (
                        <div key={index} className="flex flex-col gap-3">

                            {/* HEADER WITH VERTICAL LINE 
                   - Border Left: 2px solid white/50
                   - Padding Left: 16px
                */}
                            <div className="border-l-2 border-black/40 pl-4">
                                <h3 className="text-[20px] font-bold text-black">
                                    {value.title}
                                </h3>
                            </div>

                            {/* DESCRIPTION
                   - Added pl-4 + border-transparent to keep alignment with title
                */}
                            <div className="pl-[18px]">
                                <p className="text-[15px] leading-[24px] text-black/80">
                                    {value.desc}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}