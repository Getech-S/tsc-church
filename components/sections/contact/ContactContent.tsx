"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, ChevronDown } from "lucide-react";

export function ContactContent() {
    const [reason, setReason] = useState("");

    return (
        // 👇 UPDATED: Reduced padding (py-12 px-4) for mobile
        <section className="bg-white py-12 px-4 md:py-20 md:px-12">
            <div className="mx-auto max-w-[1280px] flex flex-col gap-12 md:gap-20">

                {/* 1. TOP INFO CARDS - Stacks vertically on mobile */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

                    {/* Email */}
                    <div className="bg-[#FFF5F2] p-6 md:p-8 rounded-[8px] flex items-center gap-4 md:gap-6">
                        <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-[#DD5F4C] rounded-[6px] flex items-center justify-center shrink-0 text-white">
                            <Mail size={20} className="md:w-[24px] md:h-[24px]" />
                        </div>
                        <div className="flex flex-col overflow-hidden">
                            <h3 className="text-[16px] md:text-[18px] font-bold text-gray-900">Email us</h3>
                            <p className="text-[14px] md:text-[15px] text-gray-600 break-all">info@truesalvationchurch.org</p>
                        </div>
                    </div>

                    {/* Call */}
                    <div className="bg-[#FFF5F2] p-6 md:p-8 rounded-[8px] flex items-center gap-4 md:gap-6">
                        <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-[#DD5F4C] rounded-[6px] flex items-center justify-center shrink-0 text-white">
                            <Phone size={20} className="md:w-[24px] md:h-[24px]" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-[16px] md:text-[18px] font-bold text-gray-900">Call us</h3>
                            <p className="text-[14px] md:text-[15px] text-gray-600">+(250) 788-888-888</p>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="bg-[#FFF5F2] p-6 md:p-8 rounded-[8px] flex items-center gap-4 md:gap-6">
                        <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-[#DD5F4C] rounded-[6px] flex items-center justify-center shrink-0 text-white">
                            <MapPin size={20} className="md:w-[24px] md:h-[24px]" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-[16px] md:text-[18px] font-bold text-gray-900">Our Location</h3>
                            <p className="text-[14px] md:text-[15px] text-gray-600">Muganzirwazza, Kampala-Uganda</p>
                        </div>
                    </div>

                </div>

                {/* 2. BOTTOM SECTION: FORM + MAP */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* LEFT: Contact Form */}
                    <div className="flex flex-col gap-6 md:gap-8">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-[24px] md:text-[32px] font-bold text-gray-900 leading-tight">
                                Feel free to contact us or <br className="hidden md:block" /> visit us in person.
                            </h2>
                        </div>

                        <form className="flex flex-col gap-4 md:gap-6">

                            {/* Row 1: Name & Email - Stacks on mobile */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-[14px] font-medium text-gray-700">Full Name</label>
                                    <input type="text" placeholder="Enter full name" className="w-full px-4 py-3 rounded-[6px] border border-gray-200 focus:outline-none focus:border-[#DD5F4C] text-[14px]" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-[14px] font-medium text-gray-700">Email</label>
                                    <input type="email" placeholder="Enter email address" className="w-full px-4 py-3 rounded-[6px] border border-gray-200 focus:outline-none focus:border-[#DD5F4C] text-[14px]" />
                                </div>
                            </div>

                            {/* Row 2: Phone & Reason */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start">
                                <div className="flex flex-col gap-2">
                                    <label className="text-[14px] font-medium text-gray-700">Phone Number</label>
                                    <input type="tel" placeholder="Enter phone number" className="w-full px-4 py-3 rounded-[6px] border border-gray-200 focus:outline-none focus:border-[#DD5F4C] text-[14px]" />
                                </div>

                                <div className="flex flex-col gap-2 w-full">
                                    <label className="text-[14px] font-medium text-gray-700">Reason to Contact</label>
                                    <div className="relative">
                                        <select
                                            value={reason}
                                            onChange={(e) => setReason(e.target.value)}
                                            className="w-full px-4 py-3 rounded-[6px] border border-gray-200 focus:outline-none focus:border-[#DD5F4C] text-[14px] appearance-none bg-white text-gray-500 cursor-pointer"
                                        >
                                            <option value="">Select a reason</option>
                                            <option value="Prayer Request">Prayer Request</option>
                                            <option value="General Inquiry">General Inquiry</option>
                                            <option value="Partnership">Partnership</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                                    </div>
                                    {reason === "Other" && (
                                        <input type="text" placeholder="Please specify" className="w-full px-4 py-3 rounded-[6px] border border-gray-200 focus:outline-none focus:border-[#DD5F4C] text-[14px] mt-2 animate-in fade-in slide-in-from-top-2" />
                                    )}
                                </div>
                            </div>

                            {/* Row 3: Message */}
                            <div className="flex flex-col gap-2">
                                <label className="text-[14px] font-medium text-gray-700">Your message</label>
                                <textarea rows={4} placeholder="Your message goes here..." className="w-full px-4 py-3 rounded-[6px] border border-gray-200 focus:outline-none focus:border-[#DD5F4C] text-[14px] resize-none" />
                            </div>

                            <button className="w-full bg-[#DD5F4C] text-white font-bold py-3 md:py-4 rounded-[100px] hover:bg-[#c54e3d] transition-colors mt-2 md:mt-4 text-[16px]">
                                Send
                            </button>
                        </form>
                    </div>

                    {/* RIGHT: Map Embed - Adjust height for mobile */}
                    <div id="map-location" className="w-full h-[300px] md:h-[400px] lg:h-full min-h-[300px] bg-gray-100 rounded-[16px] overflow-hidden">
                        <iframe
                            src="https://maps.google.com/maps?q=Muganzirwazza+Commercial+Complex,+Katwe+Road,+Kampala&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                </div>
            </div>
        </section>
    );
}