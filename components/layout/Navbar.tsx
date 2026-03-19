"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Globe, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Sermons", href: "/sermons" },
  { name: "Testimonies", href: "/testimonies" },
  { name: "Events", href: "/events" },
  { name: "Give", href: "/give" },
  //{ name: "Partnership", href: "/partnership" },
  { name: "Contact", href: "/contact" },
];

const languages = [
  { name: "English", active: true },
  // { name: "Kinyarwanda", active: false },
  // { name: "French", active: false },
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

  // 1. Handle Scroll for Sticky Navbar
  useEffect(() => {
    if (!isFloating) return;

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isFloating]);

  // 2. Close dropdown when clicking outside
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
      className={clsx(
        "z-50 flex justify-center px-4 transition-all duration-300",
        isFloating
          ? [
              "fixed left-0 right-0",
              isSticky
                ? "top-0 py-2 bg-white backdrop-blur-md shadow-sm"
                : "top-8 ",
            ]
          : "relative bg-white"
      )}
    >
      <div
        className={clsx(
          "flex items-center justify-between w-full max-w-[1240px] transition-all duration-300",
          isFloating
            ? isSticky
              ? "px-6 py-2"
              : "bg-white rounded-[5px] shadow-lg px-8 py-3"
            : "px-6 py-4 bg-white shadow-sm"
        )}
      >

        {/* Logo */}
        <Link href="/" className="shrink-0">
          <div className={clsx("relative flex items-center justify-center transition-all duration-300",
              isSticky ? "w-[80px] h-[65px]" : "w-[96px] h-[78px]" // Slightly smaller logo on scroll
          )}>
            <Image src="/logo.png" alt="TSC Logo" fill className="object-contain" priority />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-[24px]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-[16px] font-regular transition-colors",
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

          {/* LANGUAGE SWITCHER */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center gap-[4px] pl-[8px] text-gray-500 hover:text-black transition-colors"
              onClick={() => setIsLangOpen(!isLangOpen)}
            >
              <Globe size={20} />
              <span className="text-[16px] font-regular">EN</span>
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
                        ? "text-[#E8751A] font-normal"
                        : "text-gray-600 hover:text-black font-normal"
                    )}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Give Now Button (Desktop) */}
          <Link href="/support" className="text-white font-semibold text-[14px] rounded-[100px] flex items-center justify-center hover:shadow-md transition-transform duration-300 hover:scale-105 active:scale-95 cursor-pointer border-0"
            style={{
              backgroundColor: "#E8751A",
              width: "150px",
              height: "50px"
            }}>

            Request For Prayer

          </Link> 
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2 text-gray-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="absolute top-28 left-4 right-4 bg-white rounded-xl shadow-2xl p-6 flex flex-col gap-4 lg:hidden z-50 animate-in slide-in-from-top-2">

          {/* Links */}
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-lg font-regular py-2 border-b border-gray-100",
                  isActive ? "text-[#E8751A]" : "text-gray-800"
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
              <span key={lang.name} className={cn("text-sm", lang.active ? "text-[#E8751A] font-regular" : "text-gray-500")}>
                {lang.name}
              </span>
            ))}
          </div>

          {/* Mobile Give Button */}
          <Link href="/contact#contactform" onClick={() => setIsOpen(false)} className="w-full mt-2">
            <button
              className="w-full text-white font-bold text-[16px] rounded-[100px] flex items-center justify-center shadow-md py-3"
              style={{ backgroundColor: "#E8751A" }}
            >
              Request For Prayer
            </button>
          </Link>

        </div>
      )}
    </header>
  );
}