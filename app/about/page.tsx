import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutWhoWeAre } from "@/components/sections/about/AboutWhoWeAre";
import { AboutValues } from "@/components/sections/about/AboutValues";
import { AboutLeadership } from "@/components/sections/about/AboutLeadership";
import { AboutBeliefs } from "@/components/sections/about/AboutBeliefs";
import  AboutGallery  from "@/components/sections/about/AboutGallery";
import { Footer } from "@/components/sections/Footer";
import AboutMission from "@/components/sections/about/AboutMission";
import AboutDisciple from "@/components/sections/about/AboutDisciple";


export default function AboutPage() {
    return (
        <main className="relative min-h-screen flex flex-col bg-white">
            {/* Section 1: Hero */}
            <AboutHero />
            <AboutWhoWeAre />
            <AboutDisciple/>
            <AboutMission />
            <AboutLeadership/>
            <AboutValues/>        
            <AboutBeliefs/>
            <AboutGallery/>

            {/* Placeholder for Section 2 (We will do this next) */}


            <Footer />
        </main>
    );
}