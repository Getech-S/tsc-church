import { PartnershipHero } from "@/components/sections/partnership/PartnershipHero";
import { PartnershipTiers } from "@/components/sections/partnership/PartnershipTiers";
import { PartnershipImpact } from "@/components/sections/partnership/PartnershipImpact";
import { PartnershipFAQ } from "@/components/sections/partnership/PartnershipFAQ";
import { Footer } from "@/components/sections/Footer";

export default function PartnershipPage() {
    return (
        <main className="relative min-h-screen flex flex-col bg-white">
            <PartnershipHero />
            <PartnershipTiers />
            <PartnershipImpact />
            <PartnershipFAQ />
            <Footer />
        </main>
    );
}