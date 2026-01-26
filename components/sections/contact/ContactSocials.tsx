"use client";

import Link from "next/link";
// We use an SVG for Zoom and Tiktok to get exact brand colors/shapes if Lucide doesn't suffice
// Lucide has Instagram, Youtube. We will build custom SVGs for accurate brand colors.

const SOCIAL_LINKS = [
    {
        name: "YouTube",
        url: "https://www.youtube.com/@truesalvation6136/streams",
        color: "bg-[#FF0000]", // YouTube Red
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" fill="white" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="black" stroke="none" /> {/* White icon on Red bg usually, or just white path */}
            </svg>
        ),
        label: "Join Youtube Live"
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/truesalvationchurch/",
        color: "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]", // Insta Gradient
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
        ),
        label: "Follow Updates"
    },
    {
        name: "TikTok",
        url: "https://www.tiktok.com/@truesalvationchurch",
        color: "bg-[#000000]", // TikTok Black
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
        ),
        label: "Trending Moments"
    },
    {
        name: "Zoom",
        url: "https://us06web.zoom.us/j/89648189740?pwd=Fkpabpwu9V0trqZTeagUKI2sA23h8I.1",
        color: "bg-[#2D8CFF]", // Zoom Blue
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M4.5 5.5h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2z" />
                <path d="M17.5 8.5l4-2.5v12l-4-2.5" />
            </svg>
        ),
        label: "Join Live Service"
    }
];

export function ContactSocials() {
    return (
        <section id="online-worship" className="bg-gray-50 py-20 px-6 md:px-12 border-t border-gray-100">
            <div className="mx-auto max-w-[1280px] flex flex-col items-center gap-12 text-center">

                {/* HEADER */}
                <div className="flex flex-col gap-4 max-w-2xl">
                    <h2 className="text-[32px] md:text-[40px] font-bold text-gray-900 leading-tight">
                        Connect & Worship Online
                    </h2>
                    <p className="text-[16px] text-gray-600 leading-[1.6]">
                        Cannot make it in person? No problem. Join our digital community on Zoom for live services or follow us on social media for daily inspiration.
                    </p>
                </div>

                {/* ICONS GRID */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl">
                    {SOCIAL_LINKS.map((social) => (
                        <Link
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            className="group flex flex-col items-center gap-4 p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all border border-gray-100 hover:-translate-y-1"
                        >
                            {/* Icon Circle */}
                            <div className={`w-[64px] h-[64px] rounded-full flex items-center justify-center shadow-lg ${social.color} transition-transform group-hover:scale-110`}>
                                {social.icon}
                            </div>

                            {/* Text */}
                            <div className="flex flex-col gap-1">
                                <span className="text-[18px] font-bold text-gray-900">{social.name}</span>
                                <span className="text-[14px] text-gray-500 font-medium">{social.label}</span>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}