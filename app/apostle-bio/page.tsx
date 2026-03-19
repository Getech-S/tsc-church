import { BioHero } from "@/components/ApostleBio/BioHero";
import { BioContent } from "@/components/ApostleBio/BioContent";
import { BioCTA } from "@/components/ApostleBio/BioCTA";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function ApostleBioPage() {
  return (
    <main className="bg-white">
        <Navbar/>
      <BioHero />
      <BioContent />
      <Footer />
    </main>
  );
}