import { PrayerRequestForm } from "@/components/sections/prayer/PrayerRequestForm";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
  title: "Request Prayer | True Salvation Church",
  description: "Share your prayer request with Apostle Charles and the True Salvation Church family. We stand in faith with you.",
};

export default function PrayerRequestPage() {
  return (
    <main className="min-h-screen bg-[#FDF8F3]">
      <Navbar />
      <div className="pt-10 pb-20">
        

        {/* THE DYNAMIC FORM COMPONENT */}
        <PrayerRequestForm />
      </div>

      <Footer />
    </main>
  );
}