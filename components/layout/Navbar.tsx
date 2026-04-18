"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; 
import { cn } from "@/lib/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Sermons", href: "/sermons" },
  { name: "Testimonies", href: "/testimonies" },
  { name: "Events", href: "/events" },
  { name: "Give", href: "/give" },
  { name: "Contact", href: "/contact" },
];

type NavbarProps = {
  isFloating?: boolean;
};

export function Navbar({ isFloating = true }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle sticky scroll state
  useEffect(() => {
    if (!isFloating) return;
    
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsSticky(window.scrollY > 100);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isFloating]);

  return (
    <header
      className={cn(
        "z-50 flex justify-center transition-all duration-300 w-full",
        // --- MOBILE ONLY: Always sticky (in document flow), edge-to-edge, solid white ---
        "sticky top-0 bg-white shadow-sm",
        // --- DESKTOP ONLY: Your exact original conditional logic ---
        isFloating
          ? [
              "lg:fixed lg:left-0 lg:right-0 lg:bg-transparent lg:shadow-none",
              isSticky
                ? "lg:top-0 lg:py-2 lg:bg-white lg:shadow-sm lg:px-4"
                : "lg:top-8 lg:px-6", 
            ]
          : "lg:relative lg:bg-white lg:px-4"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between w-full transition-all duration-300",
          // Mobile: Standard padding, no inner backgrounds/shadows
          "px-4 sm:px-6 py-3 lg:py-0 lg:px-0",
          // Desktop: Your exact original conditional logic
          isFloating
            ? isSticky
              ? "lg:max-w-[1280px] lg:px-6 lg:py-2"
              : "lg:bg-white lg:rounded-[5px] lg:shadow-lg lg:px-8 lg:py-2 lg:max-w-[1280px]"
            : "lg:max-w-[1280px] lg:px-6 lg:py-3 lg:bg-white lg:shadow-sm"
        )}
      >
        {/* Logo */}
        <Link href="/" className="shrink-0" aria-label="Go to homepage">
          <div className={cn(
            "relative flex items-center justify-center transition-all duration-300",
            isSticky
              ? "w-[70px] h-[56px] sm:w-[90px] sm:h-[72px]"
              : "w-[80px] h-[65px] sm:w-[110px] sm:h-[90px]"
          )}>
            <Image src="/logo.png" alt="TSC Logo" fill className="object-contain" priority />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "text-[16px] font-normal transition-colors duration-200",
                  isActive
                    ? "text-[#E8751A] font-bold"
                    : "text-gray-600 hover:text-[#E8751A]"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <Link
            href="/prayer-request"
            className="text-white font-semibold text-[14px] rounded-full px-6 py-3 bg-[#E8751A] hover:bg-[#E8A020] transition-colors duration-300 ease-in-out"
          >
            Request a Prayer
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div 
          id="mobile-menu"
          // Removed left-4 right-4 and rounded corners so it perfectly fits edge-to-edge
          className="absolute top-full left-0 right-0 bg-white shadow-2xl p-6 flex flex-col gap-4 lg:hidden z-50 animate-in slide-in-from-top-2 border-t border-gray-100"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "text-lg font-normal py-2 border-b border-gray-100 transition-colors duration-200",
                  isActive ? "text-[#E8751A]" : "text-gray-800 hover:text-[#E8751A]"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}

          <Link
            href="/prayer-request"
            onClick={() => setIsOpen(false)}
            className="w-full mt-2 text-white font-bold text-[16px] rounded-full flex items-center justify-center py-3 bg-[#E8751A] hover:bg-[#E8A020] transition-colors duration-300 ease-in-out"
          >
            Request for Prayer
          </Link>
        </div>
      )}
    </header>
  );
}