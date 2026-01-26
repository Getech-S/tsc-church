import { Navbar } from "@/components/layout/Navbar";

export function SermonsHero() {
    return (
        <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">

            {/* 1. BACKGROUND IMAGE 
         - Using a div for the background image to ensure cover fit
         - Positioned to focus on the subject
      */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                style={{ backgroundImage: "url('/sermons-bg.jpeg')" }}
            >
                {/* Dark Gradient Overlay 
           - Starts transparent at top
           - Becomes dark at bottom to make text readable
        */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            </div>

            {/* 2. NAVBAR 
         - Sits on top of the hero
      */}
            <Navbar />

            {/* 3. TEXT CONTENT 
         - Position: Bottom Left
         - Padding: px-6 md:px-12 (Matches site container)
         - Bottom Padding: pb-16
      */}
            <div className="relative z-20 h-full flex flex-col justify-end items-start px-6 md:px-[80px] pb-20">

                {/* Main Heading */}
                <h1 className="text-white font-bold leading-[1.1] tracking-tight drop-shadow-lg flex flex-col">
                    <span className="text-[56px] md:text-[80px]">Kingdom</span>
                    <span className="text-[56px] md:text-[80px]">Teachings</span>
                </h1>

                {/* Subheading / Name 
           - Font: Caveat (Handwritten)
           - Color: #F5BE41 (Gold)
           - Rotation: Slightly italic feel handled by font, but added spacing
        */}
                <p className="font-caveat text-[32px] md:text-[40px] text-[#F5BE41] mt-2"
                    style={{
                        fontVariantNumeric: "lining-nums tabular-nums",
                        fontFeatureSettings: '"liga" off, "calt" off',
                        fontFamily: "var(--font-caveat)",
                    }}
                >
                    Apostle Charles
                </p>

            </div>

        </section>
    );
}