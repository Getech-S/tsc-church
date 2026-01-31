"use client";

import Link from "next/link";
// We use an SVG for Zoom, Tiktok, and Whatsapp to get exact brand colors/shapes

const SOCIAL_LINKS = [
    {
        name: "YouTube",
        url: "https://www.youtube.com/@truesalvation6136/streams",
        color: "bg-[#FF0000]", // YouTube Red
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" fill="white" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="black" stroke="none" />
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
        label: "Join Tiktok Live"
    },
    {
        name: "WhatsApp",
        url: "https://whatsapp.com/channel/0029Vb6WTTkBVJl7PUUJpC41",
        color: "bg-[#25D366]", // WhatsApp Green
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
        ),
        label: "Join Our Channel"
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

                {/* ICONS GRID - Updated to grid-cols-5 for the new item */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 w-full max-w-6xl justify-center">
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