import { Navbar } from "@/components/layout/Navbar";

export function PartnershipHero() {
    return (
        <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden bg-slate-900">

            {/* 1. BACKGROUND IMAGE 
         - Requires a sky/cloud image in your public folder named 'partnership-bg.jpg'
      */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                style={{ backgroundImage: "url('/TSC.jpg')" }}
            >
                {/* Dark Blue Overlay to match the contrast in design */}
                <div className="absolute inset-0 bg-[#000000]/60 mix-blend-multiply" />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
            </div>

            {/* 2. NAVBAR */}
            <Navbar />

            {/* 3. CENTER TEXT CONTENT */}
            <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6 pt-20">

                <div className="flex flex-col items-center gap-6">

                    {/* Main Heading 
             - Size: 56px (Desktop)
             - Line Height: 62px
             - Letter Spacing: -2px
             - Font Weight: 700 (Bold)
             - Layout: Stacked (Block)
          */}
                    <h1 className="flex flex-col items-center font-bold tracking-[-2px] drop-shadow-xl">
                        <span className="text-[42px] leading-[48px] md:text-[56px] md:leading-[62px] text-transparent bg-clip-text bg-white">
                            Partner with
                        </span>
                        <span className="text-[42px] leading-[48px] md:text-[56px] md:leading-[62px] text-transparent bg-clip-text bg-white">
                            God&apos;s Mission
                        </span>
                    </h1>

                    {/* Description Text 
             - Max Width: 536px
             - Size: 16px
             - Line Height: 24px
             - Font Weight: 400 (Normal/Book)
          */}
                    <p className="text-white/90 text-[16px] leading-[24px] font-normal max-w-[536px] drop-shadow-md">
                        Join us in a covenant of support. Your monthly gift sustains our spiritual home and empowers the mission to heal and save souls.
                    </p>

                </div>

            </div>

        </section>
    );
}