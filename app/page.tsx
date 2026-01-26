import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { MeetApostle } from "@/components/sections/MeetApostle";
import { Journey } from "@/components/sections/Journey";
import { Family } from "@/components/sections/Family";
import { Testimonies } from "@/components/sections/Testimonies";
import { Sermons } from "@/components/sections/Sermons";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <MeetApostle />
      <Journey />
      <Family />
      <Testimonies />
      <Sermons />
      <Footer />

      {/* Placeholder for future sections */}

    </main>
  );
}