import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Youtube, InstagramIcon, Video } from "lucide-react";

// 1. Define the specific links here to match your Navbar routes
const FOOTER_LINKS = [
    { label: "About us", href: "/about" },
    { label: "Testimonies", href: "/testimonies" },
    { label: "Sermons", href: "/sermons" },
    { label: "Events", href: "/events" },
    { label: "Partnerships", href: "/partnership" },
    { label: "Give", href: "/give" },
    { label: "Contact us", href: "/contact" },
];

export function Footer() {
    return (
        <footer className="bg-[#121212] pt-16 pb-10 border-t border-white/5 font-sans">

            {/* MAIN CONTAINER */}
            <div className="mx-auto max-w-[1280px] px-6 md:px-12 flex flex-col gap-16">

                {/* --- TOP CTA SECTION (Added from Screenshot) --- */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-white/10 pb-16">
                    <h2 className="text-[28px] md:text-[36px] font-bold text-white leading-tight max-w-2xl">
                        Your generosity fuels our mission; to impact lives and advance the Gospel with integrity.
                    </h2>
                    <Link href="/partnership">
                        <button className="bg-[#F5BE40] text-black font-bold px-8 py-3.5 rounded-full transition-transform duration-300 hover:scale-105 active:scale-95 cursor-pointer text-[15px]">
                            Support the Work
                        </button>
                    </Link>
                </div>

                {/* --- MAIN GRID SECTION --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

                    {/* COL 1: DARK CONTACT CARD (Span 4) */}
                    <div className="lg:col-span-4">
                        <div className="bg-[#1F1F1F] rounded-[16px] p-8 flex flex-col gap-6 h-full border border-white/5">

                            {/* LOGO CONTAINER */}
                            <div className="bg-white rounded-[8px] px-6 py-4 inline-flex items-center justify-center w-full">
                                <Image
                                    src="/logo.png"
                                    alt="True Salvation Church"
                                    width={200}
                                    height={80}
                                    className="object-contain h-[50px] w-auto"
                                />
                            </div>

                            <p className="text-[#FFFFFF]/70 text-[14px] leading-[1.6]">
                                We are a family built on the lordship of Jesus Christ
                            </p>

                            {/* Contact Details */}
                            <div className="flex flex-col gap-4 mt-2">
                                {/* Phone */}
                                <div className="flex items-center gap-4 text-white group">
                                    <div className="w-10 h-10 rounded-full bg-[#DD5F4C] flex items-center justify-center shrink-0 group-hover:bg-[#c54e3d] transition-colors">
                                        <Phone size={18} fill="white" className="text-white" />
                                    </div>
                                    <div className="flex flex-col ">

                                        <span className="text-[15px]">+(256) 742401012</span>

                                        <span className="text-[15px]">+(250) 788293932</span>

                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-center gap-4 text-white group">
                                    <div className="w-10 h-10 rounded-full bg-[#DD5F4C] flex items-center justify-center shrink-0 group-hover:bg-[#c54e3d] transition-colors">
                                        <Mail size={18} fill="white" className="text-white" />
                                    </div>
                                    <span className="text-[14px]  break-all">info@truesalvationchurch.com</span>
                                </div>
                            </div>

                            {/* Social Icons (Matching Screenshot Look) */}
                            <div className="flex items-center gap-5 mt-4">
                                <a href="https://www.youtube.com/@truesalvation6136" target="_blank" className="text-white hover:text-[#F5BE41] transition-colors">
                                    <Youtube size={24} strokeWidth={1.5} />
                                </a>
                                {/* Replaced Instagram with Video icon to match screenshot, or keep Instagram if preferred */}
                                <a href="https://www.instagram.com/truesalvationchurch/" target="_blank" className="text-white hover:text-[#F5BE41] transition-colors">
                                    <Video size={24} strokeWidth={1.5} />
                                </a>
                                <a href="https://www.tiktok.com/@truesalvationchurch" target="_blank" className="text-white hover:text-[#F5BE41] transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* COL 2: QUICK LINKS (Span 3) */}
                    <div className="lg:col-span-3 lg:pl-12 flex flex-col gap-6 pt-2">
                        <div className="flex flex-col gap-2">
                            <h3 className="text-white text-[18px] font-bold">Quick Links</h3>
                            <div className="w-[30px] h-[3px] bg-[#FFFFFF]/30 rounded-full"></div>
                        </div>

                        <nav className="flex flex-col gap-3">
                            {FOOTER_LINKS.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="text-[#FFFFFF]/70 hover:text-[#F5BE41] transition-colors text-[15px] font-medium"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* COL 3: FELLOWSHIP SCHEDULE (Span 5) */}
                    <div className="lg:col-span-5 flex flex-col gap-6 pt-2">
                        <div className="flex flex-col gap-2">
                            <h3 className="text-white text-[18px] font-bold">Join the Fellowship</h3>
                            <div className="w-[30px] h-[3px] bg-[#FFFFFF]/30 rounded-full"></div>
                        </div>

                        <div className="flex flex-col gap-4 text-[#FFFFFF]/80 text-[15px] leading-[1.6]">
                            <p>
                                <strong className="text-white font-bold">Tuesday:</strong> Night of Beauty | 17:00 – 20:00
                            </p>
                            <p>
                                <strong className="text-white font-bold">Thursday:</strong> Deliverance Morning | 09:00 – 13:00
                            </p>
                            <p>
                                <strong className="text-white font-bold">Friday:</strong> Worship Encounter | 20:00 – 23:00
                            </p>
                            <p>
                                <strong className="text-white font-bold">Sunday:</strong> The Family Encounter | 09:00 – 13:00
                            </p>
                        </div>
                    </div>

                </div>

                {/* BOTTOM BAR */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[#FFFFFF]/40 text-[13px] font-medium">

                    <div className="flex items-center gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
                        <span>|</span>
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <span>|</span>
                        <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
                    </div>

                    <p>© 2026 TSC | Powered by GeTech Solutions</p>
                </div>

            </div>
        </footer >
    );
}