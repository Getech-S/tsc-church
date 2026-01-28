"use client";

import { useState } from "react";
import { Lock } from "lucide-react";
import { COUNTRIES } from "@/lib/constants";

export function GiveFormSection() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        country: "",
        offeringType: "Tithe",
        amount: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const getCurrency = () => {
        if (formData.country === "Rwanda") return "RWF";
        if (formData.country === "Uganda") return "UGX";
        return "USD";
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!formData.amount || !formData.email || !formData.fullName) {
            alert("Please fill in all required fields.");
            return;
        }

        // Placeholder for future logic (API call or Database save)
        console.log("Form Submitted:", formData);
        alert(`Thank you, ${formData.fullName}! Your details have been received.`);
    };

    return (
        <section className="bg-[#FDF2ED] min-h-screen py-12 px-6 md:px-12 flex items-center justify-center">
            <div className="mx-auto max-w-[1280px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                {/* LEFT COLUMN (Text) */}
                <div className="flex flex-col gap-6 max-w-[565px] lg:sticky lg:top-32 order-1 lg:order-1">
                    <h1 className="text-[36px] md:text-[48px] font-bold text-[#1B1C1E] leading-[1.1] tracking-[-2px]">
                        See what God can do <br />
                        through your Generosity
                    </h1>
                    <p className="text-[16px] leading-[24px] text-[#1B1C1E]/70 font-normal">
                        When you give through tithes or offerings to True Salvation Church, you are not just making a donation, you are making a significant impact. Your generosity supports the mission to save and healing souls, from our physical and online ministry.
                    </p>
                </div>

                {/* RIGHT COLUMN (Form) */}
                <div className="bg-white rounded-[16px] shadow-xl overflow-hidden max-w-[635px] w-full order-2 lg:order-2">

                    <div className="bg-[#DD5F4C] p-8 text-center text-white">
                        <h2 className="text-[32px] md:text-[36px] font-bold leading-tight">Give Online</h2>
                        <p className="text-white/90 text-[16px] mt-2 font-medium">Put God first in your finances.</p>
                    </div>

                    <form className="p-6 md:p-10 flex flex-col gap-5" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="flex flex-col gap-2">
                                <label className="text-[14px] font-medium text-gray-700">Full Name</label>
                                <input
                                    type="text" name="fullName" placeholder="Enter full name" required
                                    className="w-full px-4 py-3 rounded-[6px] border border-gray-200 focus:outline-none focus:border-[#DD5F4C] text-[14px]"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[14px] font-medium text-gray-700">Email</label>
                                <input
                                    type="email" name="email" placeholder="Enter email address" required
                                    className="w-full px-4 py-3 rounded-[6px] border border-gray-200 focus:outline-none focus:border-[#DD5F4C] text-[14px]"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[14px] font-medium text-gray-700">Phone Number</label>
                            <input
                                type="tel" name="phone" placeholder="Enter phone number"
                                className="w-full px-4 py-3 rounded-[6px] border border-gray-200 focus:outline-none focus:border-[#DD5F4C] text-[14px]"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[14px] font-medium text-gray-700">Country</label>
                            <select
                                name="country" defaultValue="" required
                                className="w-full px-4 py-3 rounded-[6px] border border-gray-200 focus:outline-none focus:border-[#DD5F4C] text-[14px] bg-white cursor-pointer"
                                onChange={handleChange}
                            >
                                <option value="" disabled>Select your country</option>
                                {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
                            </select>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[14px] font-medium text-gray-700">Choose your Offering</label>
                            <select
                                name="offeringType"
                                className="w-full px-4 py-3 rounded-[6px] border border-gray-200 focus:outline-none focus:border-[#DD5F4C] text-[14px] bg-white cursor-pointer"
                                onChange={handleChange}
                            >
                                <option value="Tithe">Tithe</option>
                                <option value="Offering">General Offering</option>
                                <option value="Partnership">Partnership</option>
                                <option value="Building">Building Fund</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[14px] font-medium text-gray-700">
                                Amount ({getCurrency()})
                            </label>
                            <input
                                type="number" name="amount" placeholder="Enter amount" required
                                className="w-full px-4 py-3 rounded-[6px] border border-gray-200 focus:outline-none focus:border-[#DD5F4C] text-[14px]"
                                onChange={handleChange}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#DD5F4C] text-white font-bold py-4 rounded-[100px] hover:bg-[#c54e3d] transition-colors mt-4 text-[16px] shadow-xl shadow-[#DD5F4C]/20"
                        >
                            Proceed to Give
                        </button>

                        <div className="flex items-center justify-center gap-2 text-gray-400 text-[12px] mt-2">
                            <Lock size={12} />
                            <span>Your privacy is our priority.</span>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}