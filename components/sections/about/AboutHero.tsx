// Removed the internal Navbar import because Navbar is now usually in the layout.tsx
// But if you are placing it manually in pages, keep it here.
import { Navbar } from "@/components/layout/Navbar";

export function AboutHero() {
    return (
        <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">

            {/* 1. BACKGROUND IMAGE */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                style={{ backgroundImage: "url('/hero-bg.jpg')" }}
            >
                {/* Dark Overlay with Multiply for that deep studio look */}
                <div className="absolute inset-0 bg-[#000000]/60 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            {/* 2. NAVBAR (If you are manually mounting it here) */}
            <Navbar />

            {/* 3. CENTER TEXT CONTENT */}
            <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 pt-20">
                <h1 className="text-[36px] sm:text-[48px] md:text-[72px] font-bold leading-tight tracking-tight drop-shadow-lg break-words max-w-full">
                    {/* "About" -> White
            "us" -> Linear Gradient Text
           
          */}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5BE40] via-[#FFFFFF] to-[#F5BE40]">About </span>
                    <span
                        className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F5BE40] to-[#F5BE40]"
                    >
                        us
                    </span>
                </h1>
            </div>

        </section>
    );
}