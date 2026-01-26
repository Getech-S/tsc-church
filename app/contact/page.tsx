import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactContent } from "@/components/sections/contact/ContactContent";
import { ContactSocials } from "@/components/sections/contact/ContactSocials";
import { Footer } from "@/components/sections/Footer";

export default function ContactPage() {
    return (
        <main className="relative min-h-screen flex flex-col bg-white">

            {/* 1. Hero Section */}
            <ContactHero />
            <ContactContent />
            <ContactSocials />

            {/* Placeholder for Contact Form (We will build this next) */}


            {/* Footer */}
            <Footer />
        </main>
    );
}