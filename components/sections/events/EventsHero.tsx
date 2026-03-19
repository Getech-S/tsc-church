import { Navbar } from "@/components/layout/Navbar";

export function EventsHero() {
    return (
        <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">

            {/* 1. BACKGROUND IMAGE 
         - Reusing 'about-bg.jpg' for consistency
      */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                style={{ backgroundImage: "url('/TSC.jpg')" }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-[#000000]/60 mix-blend-multiply" />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
            </div>

            {/* 2. NAVBAR */}
            <Navbar />

            {/* 3. CENTER TEXT CONTENT */}
            <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 pt-20">
                <h1 className="text-[36px] sm:text-[48px] md:text-[72px] font-bold leading-tight tracking-tight drop-shadow-lg wrap-break-words max-w-full">
                    {/* "Events" -> Gold Gradient */}
                    <span
                        className="text-transparent bg-clip-text bg-white"
                    >
                        Events
                    </span>
                </h1>
            </div>

        </section>
    );
}