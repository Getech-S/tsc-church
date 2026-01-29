import type { Metadata } from "next";
// 1. Import both fonts
import { Montserrat, Caveat } from "next/font/google";
import "./globals.css";

// Configure Montserrat (Global font)
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
});

// 2. Configure Caveat (Accent font)
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "True Salvation Church",
  icons: {
    icon: "/logo.png"
  },
  description: "Welcome to True Salvation Church",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 3. Add BOTH font variables to the body class */}
      <body className={`${montserrat.variable} ${caveat.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}