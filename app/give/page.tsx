import { Navbar } from "@/components/layout/Navbar";
import { GiveFormSection } from "@/components/sections/give/GiveFormSection";
import { GiveFAQ } from "@/components/sections/give/GiveFAQ";
import { Footer } from "@/components/sections/Footer";

export default function GivePage() {
    return (
        // ADDED: pt-[140px] md:pt-[160px]
        // This pushes the content down so it starts BELOW the floating navbar
        <main className="relative min-h-screen flex flex-col bg-[#DD5F4C]/20 pt-[140px] md:pt-[160px]">

            <Navbar />

            <GiveFormSection />
            <GiveFAQ />

            <Footer />
        </main>
    );
}