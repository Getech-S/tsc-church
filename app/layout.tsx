import type { Metadata } from "next";
import { Montserrat, Caveat } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google'; // 👈 IMPORT THIS
import "./global.css";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", display: "swap" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat", display: "swap" });

// 👇 UPDATED METADATA FOR SEO
export const metadata: Metadata = {
  metadataBase: new URL("https://www.truesalvationchurch.com"), 
  title: {
    default: "True Salvation Church",
    template: "%s | True Salvation Church",
  },
  description:
    "Welcome to True Salvation Church. More than a church, a family built on the lordship of Jesus Christ. Join us for healing, deliverance, and the word of God.",
  keywords: [
    "True Salvation Church",
    "TSC Uganda",
    "TSC Rwanda",
    "Church in Kampala",
    "Healing Prayers",
    "Deliverance Ministry",
    "Apostle Charles",
    "Katwe Road Church",
    "Online Service",
    "Sermons",
    "Power of God",
    "Holy Spirit",
    "Holiness"
  ],
  verification:{
    google: "KpBOfMx2EYejp3NoUZhVfpyG2V_G3tVLHGrIq6g42vg",
  },
  authors: [{ name: "True Salvation Church" }],
  creator: "True Salvation Church",
  publisher: "True Salvation Church",
  openGraph: {
    title: "True Salvation Church | Healing & Saving Souls",
    description: "Belonging to our Father, we steward His resources to heal and save souls. Join us in Kampala or online.",
    url: "https://www.truesalvationchurch.com",
    siteName: "True Salvation Church",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/sermons-bg.jpeg", 
        width: 1200,
        height: 630,
        alt: "Apostle Charles",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* 👇 ADD THIS COMPONENT HERE */}
      <GoogleTagManager gtmId="GTM-KVFLS22F" />
      
      <body className={`${montserrat.variable} ${caveat.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}