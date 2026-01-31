"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      {/* Content Wrapper */}
      <div className="grow pt-[140px] pb-20 px-6 md:px-12">
        <div className="mx-auto max-w-3xl bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-gray-100">
          
          {/* Header */}
          <div className="border-b border-gray-100 pb-8 mb-8 text-center">
            <h1 className="text-[32px] md:text-[40px] font-bold text-gray-900 mb-2">Terms of Use</h1>
            <p className="text-gray-500">Last Updated: January 2026</p>
          </div>

          {/* Text Content */}
          <div className="prose prose-lg max-w-none text-gray-700 prose-headings:font-bold prose-headings:text-gray-900 prose-a:text-[#DD5F4C]">
            
            <h3 className="text-[20px] font-bold mt-8 mb-4">1. Introduction</h3>
            <p>
              Welcome to the website of <strong>True Salvation Church</strong> ("TSC", "we", "us", or "our"). We are a Faith-Based Organization operating in <strong>Uganda</strong>. By accessing or using our website, you agree to comply with and be bound by these Terms of Use. If you do not agree, please do not use our website.
            </p>

            <h3 className="text-[20px] font-bold mt-8 mb-4">2. Mission and Purpose</h3>
            <p>
              Our website exists to further our mission of <strong>"Healing and Saving Souls"</strong> and to provide a platform where people can meet Jesus Christ. Content provided here, including sermons, teachings, and testimonies, is intended for spiritual edification and discipleship.
            </p>

            <h3 className="text-[20px] font-bold mt-8 mb-4">3. User Conduct and Integrity</h3>
            <p>
              In line with our core value of <strong>Integrity</strong>, which we define as being authentic and honest, users agree to use this website responsibly. You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Use the website for any unlawful purpose or to solicit others to perform unlawful acts.</li>
              <li>Harass, abuse, insult, harm, defame, or discriminate against others.</li>
              <li>Submit false or misleading information through our contact or partnership forms.</li>
            </ul>

            <h3 className="text-[20px] font-bold mt-8 mb-4">4. Intellectual Property</h3>
            <p>
              All content on this website, including but not limited to text, graphics, logos, sermon recordings, and images, is the property of True Salvation Church. You may not reproduce, distribute, or create derivative works from this content without express written permission from the Executive Committee.
            </p>

            <h3 className="text-[20px] font-bold mt-8 mb-4">5. Donations and Partnership Covenants</h3>
            <p>
              Our website offers opportunities to support the ministry through "Monthly Covenants" and one-time donations.
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Stewardship:</strong> We commit to being careful and positive stewards of all financial resources received.</li>
              <li><strong>Commitment:</strong> By filling out the "Partner Details" form, you agree to honor the financial commitment you have selected (e.g., "Commit Now" or "Commit Later") to the best of your ability.</li>
            </ul>

            <h3 className="text-[20px] font-bold mt-8 mb-4">6. Medical and Healing Disclaimer</h3>
            <p>
            While our mission involves healing which actually happens more often than not. It is not a substitute for professional medical advice, diagnosis, or treatment.
            </p>

            <h3 className="text-[20px] font-bold mt-8 mb-4">7. Governing Law</h3>
            <p>
              These Terms shall be governed by and construed in accordance with the <strong>laws of the Republic of Uganda</strong>. Any disputes arising under these terms shall be resolved according to biblical principles of conflict resolution, and failing that, subject to the exclusive jurisdiction of the courts located in <strong>Kampala, Uganda</strong>.
            </p>

            <h3 className="text-[20px] font-bold mt-8 mb-4">8. Contact Information</h3>
            <p>
              For questions regarding these Terms of Use, please contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mt-4 border border-gray-100">
              <p className="font-bold text-gray-900">True Salvation Church</p>
              <p>Muganzirwazza Commercial Complex</p>
              <p>Katwe, Kampala, Uganda</p>
              <p className="mt-2">Email: <a href="mailto:info@truesalvationchurch.com" className="text-[#DD5F4C]">info@truesalvationchurch.com</a></p>
              <p>Phone: +256 742 401 012</p>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}