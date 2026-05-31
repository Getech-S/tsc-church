import { Navbar } from "@/components/layout/Navbar";
import { EventsHero } from "@/components/sections/events/EventsHero";
import { Footer } from "@/components/sections/Footer";
import { EventList } from "@/components/sections/events/EventList";

export function EventsPage() {
    return (
        <main className="relative min-h-screen flex flex-col bg-white">
             {/* 2. NAVBAR */}
            <Navbar />
            {/* 1. Hero Section */}
            <EventsHero />

            {/* 2. Coming Soon Section 
         - Matches the simple centered look in your design
         - Padding: py-32 to give it plenty of white space
      */}
            <EventList />

            {/* 3. Footer */}
            <Footer />
        </main>
    );
}

export default EventsPage;