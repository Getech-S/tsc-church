import Image from "next/image";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";

// Define the specific links here to match your Navbar routes
const FOOTER_LINKS = [
    { label: "About us", href: "/about" },
    { label: "Testimonies", href: "/testimonies" },
    { label: "Sermons", href: "/sermons" },
    { label: "Events", href: "/events" },
    // { label: "Partnerships", href: "/partnership" },
    { label: "Give", href: "/give" },
    { label: "Contact us", href: "/contact" },
];

export function Footer() {
    return (
        <footer className="bg-[#121212] pb-10 border-t border-white/5 font-sans">
            
            {/* --- TOP CTA SECTION (Naturally Full Width) --- */}
            <div className="relative w-full overflow-hidden mb-12 bg-[#1B1C1E]">
                {/* Blurred Background Layer (Space safely URL-encoded to %20) */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center scale-110 blur-sm brightness-50"
                    style={{ backgroundImage: "url('/TSC%203.jpg')" }}
                />

                {/* CTA Content Container */}
                <div className="mx-auto max-w-[1280px] relative z-10 flex flex-col md:flex-row justify-between items-center gap-8 border-b border-white/10 p-8 md:p-16">
                    <h2 className="text-[24px] lg:text-[36px] font-bold text-white leading-tight max-w-4xl text-center md:text-left">
                        Your generosity fuels our mission, to impact <br className="hidden md:block" />
                        lives and advance the Gospel with integrity.
                    </h2>
                    
                    {/* Fixed Link-as-a-button */}
                    <Link 
                        href="/give"
                        className="w-full md:w-auto block md:inline-block bg-[#E8751A] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#E8A020] transition-colors duration-300 ease-in-out text-[14px] text-center shrink-0"
                    >
                        Support the Work
                    </Link>
                </div>
            </div>

            {/* --- MAIN CONTAINER --- */}
            <div className="mx-auto max-w-[1240px] px-6 py-10 md:px-12 flex flex-col gap-16">
                
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

                            <p className="text-[#FFFFFF]/70 text-[16px] leading-[1.6]">
                                We are a family built on the lordship of Jesus Christ
                            </p>

                            {/* Contact Details */}
                            <div className="flex flex-col gap-4 mt-2">
                                {/* Phone */}
                                <div className="flex items-center gap-4 text-white group">
                                    <div className="w-12 h-12 rounded-full bg-[#E8751A] flex items-center justify-center shrink-0 group-hover:bg-[#E8A020] transition-colors">
                                        <Phone size={20} className="text-white" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[16px]">+(256) 742401012</span>
                                        {/* <span className="text-[16px]">+(250) 788293932</span> */}
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-center gap-4 text-white group">
                                    <div className="w-12 h-12 rounded-full bg-[#E8751A] flex items-center justify-center shrink-0 group-hover:bg-[#E8A020] transition-colors">
                                        <Mail size={20} className="text-white" />
                                    </div>
                                    <span className="text-[16px] break-all">info@truesalvationchurch.com</span>
                                </div>
                            </div>

                            {/* Social Icons */}
                            <div className="flex items-center gap-5 mt-4">
                                <a href="https://www.youtube.com/@truesalvationchurch" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-white hover:text-[#E8A020] transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                </a>
                                <a href="https://www.instagram.com/truesalvationchurch/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-[#E8A020] transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                                    </svg>
                                </a>
                                <a href="https://www.tiktok.com/@truesalvationchurch" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-white hover:text-[#E8A020] transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                    </svg>
                                </a>
                                <a href="https://whatsapp.com/channel/0029Vb6WTTkBVJl7PUUJpC41" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-white hover:text-[#E8A020] transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                </a>
                                <a href="https://x.com/truesalvationc?s=20" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="text-white hover:text-[#E8A020] transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
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

                        {/* Updated to semantic unordered list */}
                        <nav aria-label="Footer navigation">
                            <ul className="flex flex-col gap-3">
                                {FOOTER_LINKS.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-[#FFFFFF]/70 hover:text-[#E8A020] transition-colors text-[16px] font-normal"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
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
                                <strong className="text-white font-bold">Monday - Thursday:</strong> Kingdom Verdict | 21:00 – 00:00 EAT
                            </p>
                            <p>
                                <strong className="text-white font-bold">Friday:</strong> Prayer Flames | 21:00 – 00:00 EAT
                            </p>
                            <p>
                                <strong className="text-white font-bold">Saturday:</strong> Bring Your Special Offering To Build For God And Meet The Apostle Privately In His Office Or Via Zoom | 11:00 – 16:00 EAT
                            </p>
                            <p>
                                <strong className="text-white font-bold">Sunday:</strong> Raw Miracle Service | 15:00 – 19:00 EAT
                            </p>
                        </div>
                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[#FFFFFF]/40 text-[13px] font-medium">
                    <div className="flex items-center gap-6">
                        <Link href="/terms-of-use" className="hover:text-white transition-colors">Terms of Use</Link>
                        <span>|</span>
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    </div>

                    <p>© {new Date().getFullYear()} TSC | Powered by GeTech Solutions</p>
                </div>

            </div>
        </footer>
    );
}