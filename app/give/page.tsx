import { Navbar } from "@/components/layout/Navbar";
import { GiveFormSection } from "@/components/sections/give/GiveFormSection";
import { GiveFAQ } from "@/components/sections/give/GiveFAQ";
import { Footer } from "@/components/sections/Footer";
// FIXED: Ensured casing matches the file name 'GiveHero.tsx'
import { GiveHero } from "@/components/sections/give/GiveHero"
import { GiveVision } from "@/components/sections/give/GiveVision";
import { Offerings } from "@/components/sections/give/Offerings";
import { GiveMethodsHeader } from "@/components/sections/give/GiveMethodsHeader";

export default function GivePage() {
    return (
        /* REMOVED: pt-[140px] 
           The GiveHero should start at the very top (y=0) so the background 
           image sits behind the transparent/floating navbar correctly.
        */
        <main className="relative min-h-screen flex flex-col bg-white">

            <Navbar />
            
            {/* The Hero handles its own internal spacing and height */}
            <GiveHero />
            <GiveVision/>
            <Offerings/>
            <GiveMethodsHeader/>

            {/* <GiveFormSection /> */}
            <GiveFAQ />

            <Footer />
        </main>
    );
}