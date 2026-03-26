"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ShieldCheck, ArrowRight, Loader2, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [step, setStep] = useState<"email" | "code">("email");
  const [loading, setLoading] = useState(false);

  // 1. Function to verify staff existence and send code
  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Check if email exists in staff-members collection
      const staffRef = doc(db, "staff-members", email.trim().toLowerCase());
      const staffSnap = await getDoc(staffRef);

      if (!staffSnap.exists()) {
        alert("Unauthorized: This email is not registered as staff.");
        setLoading(false);
        return;
      }

      // If staff exists, proceed to send code
      const res = await fetch("/api/auth/send-code", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) setStep("code");
      else alert("Error sending code. Please try again.");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // 2. Function to verify the code
  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/auth/verify-code", {
      method: "POST",
      body: JSON.stringify({ email, code }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      // Set local session for route guard
      localStorage.setItem("staffSession", "active");
      localStorage.setItem("staffEmail", email);
      window.location.href = "/dashboard";
    } else {
      alert("Invalid Code");
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-white">
      <div className="hidden lg:block relative h-full">
        <Image 
          src="/TSC.jpg" 
          alt="True Salvation Church" 
          fill 
          className="object-cover"
        />
      </div>

      <div className="flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-[420px]">
          <AnimatePresence mode="wait">
            {step === "email" ? (
              <motion.div key="email" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h1 className="text-[32px] font-bold text-[#1B1C1E] mb-2 font-montserrat tracking-tight">Staff Portal</h1>
                <p className="text-gray-400 mb-10 text-[15px]">Sign in to access your dashboard</p>

                <form onSubmit={handleSendCode} className="space-y-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] font-semibold text-gray-700">Staff Email</label>
                    <input 
                      required 
                      type="email" 
                      placeholder="Enter your registered email" 
                      className="w-full px-5 py-4 rounded-xl border border-gray-100 bg-gray-50/50 focus:border-[#E8751A] outline-none transition-all"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <button disabled={loading} className="w-full bg-[#E8751A] text-white font-bold py-4 rounded-full flex items-center justify-center gap-2 hover:bg-orange-600 transition-all shadow-lg shadow-orange-100">
                    {loading ? <Loader2 className="animate-spin" /> : "Sign in"}
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div key="code" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <h1 className="text-[32px] font-bold text-[#1B1C1E] mb-2 font-montserrat">Verification</h1>
                <p className="text-gray-400 mb-10">Enter the 6-digit code sent to {email}</p>

                <form onSubmit={handleVerify} className="space-y-6">
                  <input 
                    required 
                    maxLength={6} 
                    className="w-full text-center text-[32px] font-bold tracking-[15px] py-4 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-[#E8751A]"
                    placeholder="000000"
                    onChange={(e) => setCode(e.target.value)}
                  />
                  <button disabled={loading} className="w-full bg-[#E8751A] text-white font-bold py-4 rounded-full flex items-center justify-center gap-2 shadow-lg shadow-orange-100">
                    {loading ? <Loader2 className="animate-spin" /> : "Verify & Continue"}
                  </button>
                  <button type="button" onClick={() => setStep("email")} className="w-full text-[13px] text-gray-400 font-medium hover:text-[#E8751A]">Back to email</button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}