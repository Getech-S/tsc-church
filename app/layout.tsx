import type { Metadata } from "next";
// 1. Import Caveat
import { Montserrat, Caveat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

// 2. Configure Caveat
const fontCaveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "True Salvation Church",
  icons: {
    icon: "/logo.png",
  },
  description: "Welcome to True Salvation Church.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          // 3. Add the variable here
          fontSans.variable,
          fontCaveat.variable
        )}
      >
        <main className="relative flex min-h-screen flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}