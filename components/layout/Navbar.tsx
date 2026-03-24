"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Globe, Menu, X } from "lucide-react";
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

const languages = [
  { name: "English", active: true },
];

type NavbarProps = {
  isFloating?: boolean;
};

export function Navbar({ isFloating = true }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle scroll for sticky navbar
  useEffect(() => {
    if (!isFloating) return;
    const handleScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isFloating]);

  // Close language dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
   <header
        className={cn(
          "z-50 flex justify-center px-2 sm:px-4 transition-all duration-300",
          isFloating
            ? [
                "fixed left-0 right-0",
                isSticky
                  ? "top-0 py-2 bg-white shadow-sm"
                  : "top-4 sm:top-8",
              ]
            : "relative bg-white"
        )}
      >
      <div
        className={cn(
          "flex items-center justify-between w-full max-w-[1240px] transition-all duration-300",
          isFloating
            ? isSticky
              ? "px-4 sm:px-6 py-2"
              : "bg-white rounded-[5px] shadow-lg px-4 sm:px-8 py-2"
            : "px-4 sm:px-6 py-3 bg-white shadow-sm"
        )}
      >
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <div className={cn(
            "relative flex items-center justify-center transition-all duration-300",
            isSticky
              ? "w-[70px] h-[56px] sm:w-[90px] sm:h-[72px]"
              : "w-[80px] h-[65px] sm:w-[110px] sm:h-[90px]"
          )}>
            <Image src="/logo.png" alt="TSC Logo" fill className="object-contain" priority />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
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

          {/* Language Switcher */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center gap-1 text-gray-500 hover:text-black transition-colors duration-200"
              onClick={() => setIsLangOpen(!isLangOpen)}
            >
              <Globe size={20} />
              <span className="text-[16px] font-normal">EN</span>
            </button>

            {isLangOpen && (
              <div
                className="absolute top-full right-0 mt-4 bg-white shadow-2xl flex flex-col gap-2 z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
                style={{ width: "137px", padding: "16px", borderRadius: "0 0 8px 8px" }}
              >
                {languages.map((lang) => (
                  <button
                    key={lang.name}
                    onClick={() => setIsLangOpen(false)}
                    className={cn(
                      "text-left text-[16px] leading-6 font-normal transition-colors duration-200",
                      lang.active ? "text-[#E8751A]" : "text-gray-600 hover:text-black"
                    )}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Request a Prayer Button */}
          <Link
            href="/contact#contactform"
            className="text-white font-semibold text-[14px] rounded-full px-6 py-3 bg-[#E8751A] hover:bg-[#E8A020] transition-colors duration-300 ease-in-out"
          >
            Request a Prayer
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-4 right-4 bg-white rounded-xl shadow-2xl p-6 flex flex-col gap-4 lg:hidden z-50 animate-in slide-in-from-top-2 mt-2">

          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
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

          {/* Mobile Language Options */}
          <div className="flex gap-4 py-2">
            {languages.map((lang) => (
              <span
                key={lang.name}
                className={cn(
                  "text-sm font-normal",
                  lang.active ? "text-[#E8751A]" : "text-gray-500"
                )}
              >
                {lang.name}
              </span>
            ))}
          </div>

          {/* Mobile Request a Prayer Button */}
          <Link
            href="/contact#contactform"
            onClick={() => setIsOpen(false)}
            className="w-full mt-2 text-white font-bold text-[16px] rounded-full flex items-center justify-center py-3 bg-[#E8751A] hover:bg-[#E8A020] transition-colors duration-300 ease-in-out"
          >
            Request a Prayer
          </Link>

        </div>
      )}
    </header>
  );
}