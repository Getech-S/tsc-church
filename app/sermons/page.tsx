import { Navbar } from "@/components/layout/Navbar";
import { SermonsHero } from "@/components/sections/sermons/SermonsHero";
import { SermonsList } from "@/components/sections/sermons/SermonsList";
import { Footer } from "@/components/sections/Footer";

export default function SermonsPage() {
    return (
        <main className="relative min-h-screen flex flex-col bg-white">
            <Navbar />
            {/* Hero Section */}
            <SermonsHero />
            <SermonsList />

            {/* Placeholder for the List of Sermons (Next Step) */}


            <Footer />
        </main>
    );
}