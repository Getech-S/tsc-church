import { TestimoniesHero } from "@/components/sections/testimonies/TestimoniesHero";
import { TestimoniesList } from "@/components/sections/testimonies/TestimoniesList";
import { Footer } from "@/components/sections/Footer";

export default function TestimoniesPage() {
    return (
        <main className="relative min-h-screen flex flex-col bg-white">

            {/* Hero Section */}
            <TestimoniesHero />
            <TestimoniesList />

            {/* Placeholder for the Video Grid (Coming next) */}


            <Footer />
        </main>
    );
}