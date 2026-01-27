import { EventsHero } from "@/components/sections/events/EventsHero";

import { Footer } from "@/components/sections/Footer";

export function EventsPage() {
    return (
        <main className="relative min-h-screen flex flex-col bg-white">

            {/* 1. Hero Section */}
            <EventsHero />

            {/* 2. Coming Soon Section 
         - Matches the simple centered look in your design
         - Padding: py-32 to give it plenty of white space
      */}
            <div className="grow flex items-center justify-center py-32 md:py-48">
                <h2 className="text-[32px] md:text-[40px] font-bold text-gray-900 tracking-tight">
                    Coming soon..
                </h2>
            </div>

            {/* 3. Footer */}
            <Footer />
        </main>
    );
}

export default EventsPage;