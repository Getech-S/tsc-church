"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, ChevronDown, CheckCircle, AlertCircle, Twitter, Music2, Youtube, Instagram } from "lucide-react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export function ContactContent() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        reason: "",
        otherReason: "",
        message: "",
        "h-captcha-response": "" // Added for Web3Forms
    });

    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle hCaptcha verification
    const onHCaptchaChange = (token: string) => {
        setFormData(prev => ({ ...prev, "h-captcha-response": token }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Prevent submission if captcha isn't solved
        if (!formData["h-captcha-response"]) {
            alert("Please complete the hCaptcha security check.");
            return;
        }

        setStatus("submitting");

        const ACCESS_KEY = "647fc7db-36d1-4607-a345-8486db60caa5";

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: ACCESS_KEY,
                    subject: `New Contact from ${formData.name} - ${formData.reason}`,
                    from_name: "True Salvation Website",
                    ...formData,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus("success");
                setFormData({ name: "", email: "", phone: "", reason: "", otherReason: "", message: "", "h-captcha-response": "" });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <section className="bg-white py-16 md:py-24 px-6 md:px-12">
            <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                {/* LEFT COLUMN: Contact Details (Unchanged) */}
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-[40px] font-bold text-[#1B1C1E] leading-tight font-montserrat">
                            Get in Touch
                        </h2>
                        <p className="text-gray-500 text-[16px] max-w-md leading-relaxed">
                            Whether you have a question, need prayer, or simply want to know more, reach out.
                        </p>
                    </div>

                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-5">
                            <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-900 border border-gray-100">
                                <Mail size={20} />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-[16px] text-[#1B1C1E]">Email us</span>
                                <span className="text-gray-500 text-[14px]">info@truesalvationchurch.com</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-5">
                            <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-900 border border-gray-100">
                                <Phone size={20} />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-[16px] text-[#1B1C1E]">Phone Number</span>
                                <span className="text-gray-500 text-[14px]">+(256) 742 401 012</span>
                                <span className="text-gray-500 text-[14px]">+(250) 788 293 932</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-5">
                            <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-900 border border-gray-100">
                                <MapPin size={20} />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-[16px] text-[#1B1C1E]">Location</span>
                                <span className="text-gray-500 text-[14px]">Muganzirwazza, Katwe, Kampala, Uganda</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-5">
                            <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-900 border border-gray-100">
                                <Clock size={20} />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-[16px] text-[#1B1C1E]">Office Hours</span>
                                <span className="text-gray-500 text-[14px]">9:00am - 5:00pm, Monday - Friday</span>
                            </div>
                        </div>
                    </div>

                    <span className="font-bold text-[20px] text-[#1B1C1E] mb-[-30]">Follow Us Online</span>

                    <div className="flex gap-4 mt-4">
                        <a href="https://www.youtube.com/@truesalvation6136" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full border border-orange-200 flex items-center justify-center text-[#E8751A] hover:bg-orange-50 transition-all duration-300 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                        </a>
                        <a href="https://www.instagram.com/truesalvationchurch/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full border border-orange-200 flex items-center justify-center text-[#E8751A] hover:bg-orange-50 transition-all duration-300 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                        </a>
                        <a href="https://www.tiktok.com/@truesalvationchurch" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full border border-orange-200 flex items-center justify-center text-[#E8751A] hover:bg-orange-50 transition-all duration-300 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
                        </a>
                        <a href="https://whatsapp.com/channel/0029Vb6WTTkBVJl7PUUJpC41" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full border border-orange-200 flex items-center justify-center text-[#E8751A] hover:bg-orange-50 transition-all duration-300 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                        </a>
                        <a href="https://x.com/truesalvationc?s=20" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full border border-orange-200 flex items-center justify-center text-[#E8751A] hover:bg-orange-50 transition-all duration-300 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
                        </a>
                    </div>
                </div>

                {/* RIGHT COLUMN: Contact Form Card */}
                <div id="contactform" className="bg-white rounded-[24px] p-8 md:p-10 border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)]">
                    <div className="mb-8">
                        <h3 className="text-[28px] font-bold text-[#1B1C1E] mb-2">Send us a message</h3>
                        <p className="text-gray-400 text-[14px]">Your email address will not be published. All fields are required</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-[14px] font-medium text-gray-700">Full Name</label>
                            <input
                                required
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your full name"
                                className="w-full px-4 py-3 bg-gray-50/50 rounded-lg border border-gray-100 focus:outline-none focus:border-[#E8751A] focus:bg-white transition-all text-[14px]"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[14px] font-medium text-gray-700">Email Address</label>
                            <input
                                required
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your email address"
                                className="w-full px-4 py-3 bg-gray-50/50 rounded-lg border border-gray-100 focus:outline-none focus:border-[#E8751A] focus:bg-white transition-all text-[14px]"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[14px] font-medium text-gray-700">Phone Number (e.g:+25078888888)</label>
                            <input
                                required
                                type="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Your phone number"
                                className="w-full px-4 py-3 bg-gray-50/50 rounded-lg border border-gray-100 focus:outline-none focus:border-[#E8751A] focus:bg-white transition-all text-[14px]"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[14px] font-medium text-gray-700">Reason for Contact</label>
                            <div className="relative">
                                <select
                                required
                                    name="reason"
                                    value={formData.reason}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-gray-50/50 rounded-lg border border-gray-100 focus:outline-none focus:border-[#E8751A] appearance-none cursor-pointer text-[14px] text-gray-500"
                                >
                                    <option value="">Select a reason</option>
                                
                                    <option value="Partnership">Support The Mission</option>
                                    <option value="Testimony">Give Your Testimony</option>
                                    <option value="Other">Other</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                            </div>

                            {/* CONDITIONAL RENDER FOR "OTHER" REASON */}
                            {formData.reason === "Other" && (
                                <div className="flex flex-col gap-2 mt-4">
                                    <label className="text-[14px] font-medium text-gray-700">Please Specify</label>
                                    <input
                                        required
                                        name="otherReason"
                                        value={formData.otherReason}
                                        onChange={handleChange}
                                        placeholder="Briefly state your reason"
                                        className="w-full px-4 py-3 bg-gray-50/50 rounded-lg border border-gray-100 focus:outline-none focus:border-[#E8751A] focus:bg-white transition-all text-[14px]"
                                    />
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[14px] font-medium text-gray-700">Your Message</label>
                            <textarea
                                required
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                placeholder="Tell us what is on your heart. There is no wrong way to say it."
                                className="w-full px-4 py-3 bg-gray-50/50 rounded-lg border border-gray-100 focus:outline-none focus:border-[#E8751A] focus:bg-white transition-all text-[14px] resize-none"
                            />
                        </div>

                        {/* hCaptcha Widget (Using Web3Forms Shared Key) */}
                        <div className="py-2">
                            <HCaptcha
                                sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                                reCaptchaCompat={false}
                                onVerify={onHCaptchaChange}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === "submitting"}
                            className="w-fit px-10 py-3 bg-[#E8751A] text-white font-bold rounded-full hover:bg-orange-600 transition-all disabled:bg-gray-400"
                        >
                            {status === "submitting" ? "Sending..." : "Send Message"}
                        </button>

                        {status === "success" && (
                            <div className="flex items-center gap-2 text-green-600 animate-in fade-in zoom-in duration-300">
                                <CheckCircle size={18} />
                                <span className="text-sm font-medium">Sent! We'll get back to you shortly. For the appointment with the Apostle kindly Contact the Church Office for confirmation. Thank you!</span>
                            </div>
                        )}
                        {status === "error" && (
                            <div className="flex items-center gap-2 text-red-600 animate-in fade-in zoom-in duration-300">
                                <AlertCircle size={18} />
                                <span className="text-sm font-medium">Something went wrong. Please verify you aren't a robot.</span>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}