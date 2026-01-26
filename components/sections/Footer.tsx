import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Youtube, Video, Music2, InstagramIcon } from "lucide-react";

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
        <footer className="bg-[#121212] pt-20 pb-10 border-t border-white/5">

            {/* MAIN CONTAINER */}
            <div className="mx-auto max-w-[1280px] px-6 md:px-12 flex flex-col gap-16">

                {/* TOP CTA SECTION */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-white/10 pb-16">
                    <h2 className="text-[32px] md:text-[40px] font-bold text-white leading-tight max-w-2xl tracking-[-1px]">
                        Belonging to our Father, we steward His resources to heal and save souls.
                    </h2>

                    <button className="bg-[#F5BE41] hover:bg-[#F5BE41]/90 text-black font-bold text-[16px] px-[24px] py-[16px] rounded-[100px] transition-all">
                        Support the Work
                    </button>
                </div>

                {/* MAIN GRID SECTION */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

                    {/* COL 1: BRAND & CONTACT (Span 5) */}
                    <div className="lg:col-span-5 flex flex-col gap-8">

                        {/* LOGO CONTAINER */}
                        <div className="bg-white rounded-[8px] px-6 py-3 inline-flex items-center justify-start w-fit">
                            <Image
                                src="/logo.png"
                                alt="True Salvation Church"
                                width={200}
                                height={80}
                                className="object-contain h-[60px] w-auto"
                            />
                        </div>

                        <p className="text-[#FFFFFF]/70 text-[16px] leading-[26px] max-w-[350px]">
                            We are a family built on the lordship of Jesus Christ
                        </p>

                        {/* Contact Details */}
                        <div className="flex flex-col gap-4 mt-2">
                            <div className="flex items-center gap-3 text-white">
                                <div className="w-10 h-10 rounded-full bg-[#DD5F4C] flex items-center justify-center shrink-0">
                                    <Phone size={18} />
                                </div>
                                <span className="text-[16px]">+256 742401012</span>
                            </div>

                            <div className="flex items-center gap-3 text-white">
                                <div className="w-10 h-10 rounded-full bg-[#DD5F4C] flex items-center justify-center shrink-0">
                                    <Mail size={18} />
                                </div>
                                <span className="text-[16px]">info@truesalvationchurch.org</span>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4 mt-4">
                            <a href="https://www.youtube.com/@truesalvation6136" className="text-white hover:text-[#F5BE41] transition-colors"><Youtube size={24} /></a>
                            <a href="https://www.instagram.com/truesalvationchurch/" className="text-white hover:text-[#F5BE41] transition-colors"><InstagramIcon size={24} /></a>
                            <a href="https://www.tiktok.com/@truesalvationchurch?is_from_webapp=1&sender_device=pc" className="text-white hover:text-[#F5BE41] transition-colors">
                                {/* Custom TikTok Icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* COL 2: QUICK LINKS (Span 3) - UPDATED ⚡️ */}
                    <div className="lg:col-span-3 flex flex-col gap-6">
                        <h3 className="text-white text-[20px] font-bold">Quick Links</h3>
                        <div className="w-[40px] h-[2px] bg-white/20"></div>

                        <nav className="flex flex-col gap-4">
                            {/* Using the mapping from FOOTER_LINKS */}
                            {FOOTER_LINKS.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="text-[#FFFFFF]/70 hover:text-[#F5BE41] transition-colors text-[16px]"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* COL 3: FELLOWSHIP SCHEDULE (Span 4) */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <h3 className="text-white text-[20px] font-bold">Join the Fellowship</h3>
                        <div className="w-[40px] h-[2px] bg-white/20"></div>

                        <div className="flex flex-col gap-4 text-[#FFFFFF]/80 text-[15px] leading-[1.6]">
                            <p>
                                <strong className="text-white">Tuesday:</strong> Night of Beauty | 17:00 – 20:00
                            </p>
                            <p>
                                <strong className="text-white">Thursday:</strong> Deliverance Morning | 09:00 – 13:00
                            </p>
                            <p>
                                <strong className="text-white">Friday:</strong> Worship Encounter | 20:00 – 23:00
                            </p>
                            <p>
                                <strong className="text-white">Sunday:</strong> The Family Encounter | 09:00 – 13:00
                            </p>
                        </div>
                    </div>

                </div>

                {/* BOTTOM BAR */}
                <div className="border-t border-white/[0.125] pt-[35px] flex flex-col md:flex-row justify-between items-center gap-4 text-[#FFFFFF]/50 text-[14px]">

                    <div className="flex items-center gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
                        <span>|</span>
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <span>|</span>
                        <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
                    </div>

                    <p>© 2026 | Powered by GeTech Solutions </p>
                </div>

            </div>
        </footer>
    );
}