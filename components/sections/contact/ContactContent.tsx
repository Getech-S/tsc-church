"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, ChevronDown, CheckCircle, AlertCircle } from "lucide-react";

export function ContactContent() {
    // 1. State for form data
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        reason: "",
        otherReason: "",
        message: ""
    });

    // 2. State for submission status
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    // 3. Handle Input Changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // 4. Handle Form Submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        // 🔴 STEP 3: DELETE the old key below and PASTE your new key from ProtonMail
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
                setFormData({ name: "", email: "", phone: "", reason: "", otherReason: "", message: "" });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <section className="bg-white py-12 px-4 md:py-20 md:px-12">
            <div className="mx-auto max-w-[1280px] flex flex-col gap-12 md:gap-20">

                {/* 1. TOP INFO CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {/* Email */}
                    <div className="bg-[#FFF5F2] p-6 md:p-8 rounded-[8px] flex items-center gap-4 md:gap-6">
                        <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-[#DD5F4C] rounded-[6px] flex items-center justify-center shrink-0 text-white">
                            <Mail size={20} className="md:w-[24px] md:h-[24px]" />
                        </div>
                        <div className="flex flex-col overflow-hidden">
                            <h3 className="text-[16px] md:text-[18px] font-bold text-gray-900">Email us</h3>
                            <p className="text-[14px] md:text-[15px] text-gray-600 break-all">truesalvationchurch@protonmail.com</p>
                        </div>
                    </div>

                    {/* Call */}
                    <div className="bg-[#FFF5F2] p-6 md:p-8 rounded-[8px] flex items-center gap-4 md:gap-6">
                        <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-[#DD5F4C] rounded-[6px] flex items-center justify-center shrink-0 text-white">
                            <Phone size={20} className="md:w-[24px] md:h-[24px]" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-[16px] md:text-[18px] font-bold text-gray-900">Call us</h3>
                            <p className="text-[14px] md:text-[15px] text-gray-600">+(256) 742401012</p>
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

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-6">
                            {/* Hidden Honeypot */}
                            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                            {/* Row 1: Name & Email */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-[14px] font-medium text-gray-700">Full Name</label>
                                    <input
                                        required
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="Enter full name"
                                        className="w-full px-4 py-3 rounded-[6px] border border-gray-200 focus:outline-none focus:border-[#DD5F4C] text-[14px]"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-[14px] font-medium text-gray-700">Email</label>
                                    <input
                                        required
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        type="email"
                                        placeholder="Enter email address"
                                        className="w-full px-4 py-3 rounded-[6px] border border-gray-200 focus:outline-none focus:border-[#DD5F4C] text-[14px]"
                                    />
                                </div>
                            </div>

                            {/* Row 2: Phone & Reason */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start">
                                <div className="flex flex-col gap-2">
                                    <label className="text-[14px] font-medium text-gray-700">Phone Number</label>
                                    <input
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        type="tel"
                                        placeholder="Enter phone number"
                                        className="w-full px-4 py-3 rounded-[6px] border border-gray-200 focus:outline-none focus:border-[#DD5F4C] text-[14px]"
                                    />
                                </div>

                                <div className="flex flex-col gap-2 w-full">
                                    <label className="text-[14px] font-medium text-gray-700">Reason to Contact</label>
                                    <div className="relative">
                                        <select
                                            name="reason"
                                            value={formData.reason}
                                            onChange={handleChange}
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
                                    {formData.reason === "Other" && (
                                        <input
                                            name="otherReason"
                                            value={formData.otherReason}
                                            onChange={handleChange}
                                            type="text"
                                            placeholder="Please specify"
                                            className="w-full px-4 py-3 rounded-[6px] border border-gray-200 focus:outline-none focus:border-[#DD5F4C] text-[14px] mt-2 animate-in fade-in slide-in-from-top-2"
                                        />
                                    )}
                                </div>
                            </div>

                            {/* Row 3: Message */}
                            <div className="flex flex-col gap-2">
                                <label className="text-[14px] font-medium text-gray-700">Your message</label>
                                <textarea
                                    required
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    placeholder="Your message goes here..."
                                    className="w-full px-4 py-3 rounded-[6px] border border-gray-200 focus:outline-none focus:border-[#DD5F4C] text-[14px] resize-none"
                                />
                            </div>

                            <button
                                disabled={status === "submitting"}
                                type="submit"
                                className={`w-full font-bold py-3 md:py-4 rounded-[100px] transition-colors mt-2 md:mt-4 text-[16px] flex items-center justify-center gap-2 ${status === "submitting" ? "bg-gray-400 cursor-not-allowed" : "bg-[#DD5F4C] text-white hover:bg-[#c54e3d]"
                                    }`}
                            >
                                {status === "submitting" ? "Sending..." : "Send"}
                            </button>

                            {/* Feedback Messages */}
                            {status === "success" && (
                                <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-md border border-green-100">
                                    <CheckCircle size={18} />
                                    <span className="text-[14px] font-medium">Message sent successfully!</span>
                                </div>
                            )}
                            {status === "error" && (
                                <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-md border border-red-100">
                                    <AlertCircle size={18} />
                                    <span className="text-[14px] font-medium">Failed to send message. Please try again.</span>
                                </div>
                            )}
                        </form>
                    </div>

                    {/* RIGHT: Map Embed */}
                    <div id="map-location" className="w-full h-[300px] md:h-[400px] lg:h-full min-h-[300px] bg-gray-100 rounded-[16px] overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.757371308333!2d32.57683937496459!3d0.2913504997063167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbce34091a1d9%3A0x6e8a4d40026604c2!2sMuganzirwazza%20Complex!5e0!3m2!1sen!2sug!4v1706606670000!5m2!1sen!2sug"
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