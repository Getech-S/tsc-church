"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      {/* Content Wrapper */}
      <div className="grow pt-[140px] pb-20 px-6 md:px-12">
        <div className="mx-auto max-w-3xl bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-gray-100">
          
          {/* Header */}
          <div className="border-b border-gray-100 pb-8 mb-8 text-center">
            <h1 className="text-[32px] md:text-[40px] font-bold text-gray-900 mb-2">Privacy Policy</h1>
            <p className="text-gray-500">Last Updated: January 2026</p>
          </div>

          {/* Text Content */}
          <div className="prose prose-lg max-w-none text-gray-700 prose-headings:font-bold prose-headings:text-gray-900 prose-a:text-[#DD5F4C]">
            
            <h3 className="text-[20px] font-bold mt-8 mb-4">1. Introduction</h3>
            <p>
              True Salvation Church ("TSC") is committed to protecting your privacy. Rooted in our core value of <strong>Stewardship</strong>, we view the protection of your personal data as a sacred trust. This Privacy Policy outlines how we collect, use, and safeguard the information you provide to us, in compliance with the <strong>Data Protection and Privacy Act of Uganda</strong>.
            </p>

            <h3 className="text-[20px] font-bold mt-8 mb-4">2. Information We Collect</h3>
            <p>We collect information that you voluntarily provide to us, including:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Personal Identification Information:</strong> Full Name, Email Address, Phone Number, and Country of Residence.</li>
              <li><strong>Financial Information:</strong> If you engage in a Monthly Covenant or donation, we collect payment details necessary to process the transaction via secure third-party processors.</li>
              <li><strong>Spiritual and Sensitive Information:</strong> We may collect prayer requests or testimonies. In specific cases where users seek healing prayers, we may receive health-related information, which is treated with strict confidentiality.</li>
            </ul>

            <h3 className="text-[20px] font-bold mt-8 mb-4">3. How We Use Your Information</h3>
            <p>We use your data solely to fulfill our mission and operational needs:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Processing Transactions:</strong> To process your offerings and covenant commitments.</li>
              <li><strong>Communication:</strong> To send you updates, spiritual resources, and receipts.</li>
              <li><strong>Pastoral Care:</strong> To follow up on new members and respond to prayer requests.</li>
              <li><strong>Internal Record Keeping:</strong> To maintain accurate records of our partners and members for accountability and reporting.</li>
            </ul>

            <h3 className="text-[20px] font-bold mt-8 mb-4">4. Data Protection and Stewardship</h3>
            <p>
              We implement appropriate security measures to maintain the safety of your personal information. Guided by our value of <strong>Stewardship</strong>, we ensure transparency and honesty in managing all data entrusted to us. We will not sell, trade, or rent your personal identification information to others.
            </p>

            <h3 className="text-[20px] font-bold mt-8 mb-4">5. Sharing Your Information</h3>
            <p>We do not share your information with third parties except:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Service Providers:</strong> Trusted partners who assist us in operating our website (e.g., payment gateways), provided they agree to keep this information confidential.</li>
              <li><strong>Legal Requirements:</strong> When required to comply with Ugandan law or protect our rights and safety.</li>
            </ul>

            <h3 className="text-[20px] font-bold mt-8 mb-4">6. Your Rights</h3>
            <p>Under Ugandan law, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Request access to the personal data we hold about you.</li>
              <li>Request correction of any incorrect data.</li>
              
            </ul>

            <h3 className="text-[20px] font-bold mt-8 mb-4">7. Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, please contact the Church Administration:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mt-4 border border-gray-100">
              <p className="font-bold text-gray-900">True Salvation Church</p>
              <p>Muganzirwazza Commercial Complex</p>
              <p>Katwe, Kampala, Uganda</p>
              <p className="mt-2">Email: <a href="mailto:info@truesalvationchurch.com" className="text-[#E8751A]">info@truesalvationchurch.com</a></p>
              <p>Phone: +256 742 401 012</p>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}