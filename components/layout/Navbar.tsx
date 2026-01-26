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
  { name: "Partnership", href: "/partnership" },
  { name: "Contact", href: "/contact" },
];

const languages = [
  { name: "English", active: true },
  { name: "Kinyarwanda", active: false },
  { name: "French", active: false },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname(); // 👈 Gets the current URL

  // Close dropdown when clicking outside
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
    <header className="fixed top-8 left-0 right-0 z-50 flex justify-center px-4">
      <div className="bg-white rounded-[5px] shadow-lg px-8 py-3 w-full max-w-[1240px] flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <div className="relative w-[96px] h-[78px] flex items-center justify-center">
            {/* Make sure you have logo.png in your public folder */}
            <Image src="/logo.png" alt="TSC Logo" fill className="object-contain" priority />
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-[24px]">
          {navLinks.map((link) => {
            // Check if this specific link is the current page
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-[16px] font-bold transition-colors",
                  isActive
                    ? "text-[#DD5F4C]" // 👈 Active Page becomes Red
                    : "text-gray-600 hover:text-[#DD5F4C]" // Others are gray
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-6">

          {/* LANGUAGE SWITCHER */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center gap-[4px] pl-[8px] text-gray-500 hover:text-black transition-colors"
              onClick={() => setIsLangOpen(!isLangOpen)}
            >
              <Globe size={20} />
              <span className="text-[16px] font-bold">EN</span>
            </button>

            {/* Popup Overlay */}
            {isLangOpen && (
              <div
                className="absolute top-full right-[-10px] mt-4 bg-white shadow-2xl flex flex-col gap-[8px] z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
                style={{
                  width: "137px",
                  padding: "16px",
                  borderRadius: "0 0 8px 8px"
                }}
              >
                {languages.map((lang) => (
                  <button
                    key={lang.name}
                    onClick={() => setIsLangOpen(false)}
                    className={cn(
                      "text-left text-[16px] leading-[24px] transition-colors",
                      lang.active
                        ? "text-[#DD5F4C] font-normal"
                        : "text-gray-600 hover:text-black font-normal"
                    )}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Give Now Button */}
          <button
            className="text-white font-bold text-[15px] rounded-[100px] flex items-center justify-center shadow-md hover:opacity-90 transition-opacity"
            style={{
              backgroundColor: "#DD5F4C",
              width: "116px",
              height: "44px"
            }}
          >
            Give Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2 text-gray-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-28 left-4 right-4 bg-white rounded-xl shadow-2xl p-6 flex flex-col gap-4 lg:hidden z-50">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-lg font-bold py-2 border-b border-gray-100",
                  isActive ? "text-[#DD5F4C]" : "text-gray-800"
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
              <span key={lang.name} className={cn("text-sm", lang.active ? "text-[#DD5F4C] font-bold" : "text-gray-500")}>
                {lang.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}