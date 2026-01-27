export function PartnershipImpact() {
    return (
        <section className="bg-[#DD5F4C] py-20 px-6 md:px-12 text-white">
            <div className="mx-auto max-w-[1280px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                {/* LEFT COLUMN: Main Title & Intro 
              - Spans 4 columns on large screens
          */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                    <h2 className="text-[36px] md:text-[48px] font-bold leading-[1.1]">
                        How Your <br />
                        Partnership Helps
                    </h2>
                    <p className="text-[16px] md:text-[18px] leading-[1.6] text-white/90 font-medium">
                        Your generous contributions allow us to maintain our life-giving presence and expand our reach to those in need.
                    </p>
                </div>

                {/* RIGHT COLUMN: Impact Details Grid 
              - Spans 8 columns
              - Internal Grid: 1 col on mobile, 2 cols on desktop
          */}
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">

                    {/* Item 1: Sanctuary */}
                    <div className="flex flex-col gap-3 pl-6 border-l-[3px] border-white/30 hover:border-white transition-colors">
                        <h3 className="text-[20px] font-bold">Sanctuary & Worship</h3>
                        <p className="text-[15px] leading-[1.6] text-white/80">
                            Maintaining the physical temple where people come to feel at home and meet Jesus Christ.
                        </p>
                    </div>

                    {/* Item 2: Digital Evangelism */}
                    <div className="flex flex-col gap-3 pl-6 border-l-[3px] border-white/30 hover:border-white transition-colors">
                        <h3 className="text-[20px] font-bold">Digital Evangelism</h3>
                        <p className="text-[15px] leading-[1.6] text-white/80">
                            Funding our communication channels to reconcile people and nations to God through a Digital Sanctuary.
                        </p>
                    </div>

                    {/* Item 3: Biblical Education */}
                    <div className="flex flex-col gap-3 pl-6 border-l-[3px] border-white/30 hover:border-white transition-colors">
                        <h3 className="text-[20px] font-bold">Biblical Education</h3>
                        <p className="text-[15px] leading-[1.6] text-white/80">
                            Supporting our discipleship and Sunday School departments to make members Christ-like in word and deed.
                        </p>
                    </div>

                    {/* Empty div to balance grid if needed, or leave blank */}
                    <div className="hidden md:block" />

                </div>

            </div>
        </section>
    );
}