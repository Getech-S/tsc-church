"use client";

import { useState, useRef } from "react";
import { ChevronDown, Upload, CheckCircle, AlertCircle, X, HeartPulse, ShieldCheck, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { db, storage } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// NEW IMPORTS for Global Countries and Phone Codes
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { countries } from 'countries-list'

type Language = "en" | "rw" | null;

// Convert countries-list object to a sorted array for the dropdown
const countryList = Object.entries(countries)
  .map(([code, country]) => ({
    code,
    name: country.name,
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

// --- 1. AGREEMENT MODAL COMPONENT ---
const AgreementModal = ({ isOpen, onClose, lang }: { isOpen: boolean, onClose: () => void, lang: Language }) => {
  if (!isOpen) return null;

  const content = {
    en: {
      title: "Terms of Ministry & Data Consent",
      sections: [
        { h: "1. Spiritual Nature of Service", p: "By submitting this request, you understand that True Salvation Church provides spiritual support and prayer. We are not a medical facility. Prayer is offered as a complement to, not a substitute for, professional medical advice, diagnosis, or treatment." },
        { h: "2. Use of Information", p: "You grant True Salvation Church the right to use the provided information and medical data for ministerial review. This allows Apostle Charles and the prayer committee to understand your situation and pray effectively." },
        { h: "3. Confidentiality & Privacy", p: "Your documents are strictly confidential. We commit to keeping your medical records secure. They will not be shared with third parties." }
      ],
      close: "I Understand & Accept"
    },
    rw: {
      title: "Amategeko y'Umurimo n'Ikoreshwa ry'Imyirondoro",
      sections: [
        { h: "1. Imiterere y'Umurimo", p: "Umaze gusaba gusengerwa, usobanukiwe ko Itorero True Salvation Church ritanga ubufasha bwo mu buryo bw'umwuka n'isengesho. Ntabwo turi ivuriro. Isengesho rishobora guherekeza uburyo bwa muganga ariko ntirisimbura inama cyangwa imiti ya muganga." },
        { h: "2. Ikoreshwa ry'Amakuru", p: "Uhesheje uburenganzira True Salvation Church bwo gukoresha imyirondoro n'impapuro za muganga ntanze kugira ngo Apostle Charles n'itsinda rishinzwe amasengesho basobanukirwe ikibazo cyawe bityo bagusengere neza." },
        { h: "3. Ibanga n'Ubwirinzi", p: "Inyandiko zawe zibikirwa ibanga rikomeye. Ntabwo tuzigera duha abandi impapuro zawe cyangwa ngo tuzikoreshe mu buryo butemewe." }
      ],
      close: "Ndasobanukiwe kandi ndabyemeye"
    }
  };

  const t = lang === "rw" ? content.rw : content.en;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#1B1C1E]/80 backdrop-blur-md">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="bg-white w-full max-w-[550px] rounded-[32px] p-8 md:p-12 shadow-2xl relative overflow-hidden"
      >
        <div className="flex items-center gap-3 mb-8 text-[#E8751A]">
          <ShieldCheck size={32} />
          <h2 className="text-[24px] font-bold text-[#1B1C1E] font-montserrat tracking-tight">{t.title}</h2>
        </div>

        <div className="space-y-8 max-h-[400px] overflow-y-auto pr-4 custom-scrollbar text-left">
          {t.sections.map((s, i) => (
            <div key={i}>
              <h3 className="font-bold text-[#1B1C1E] text-[16px] mb-2 uppercase tracking-wide">{s.h}</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed">{s.p}</p>
            </div>
          ))}
        </div>

        <button 
          onClick={onClose}
          className="w-full mt-10 bg-[#E8751A] text-white font-bold py-4 rounded-2xl hover:bg-orange-600 transition-all shadow-lg shadow-orange-100"
        >
          {t.close}
        </button>
      </motion.div>
    </div>
  );
};

// --- 2. MAIN PRAYER REQUEST FORM COMPONENT ---
export function PrayerRequestForm() {
  const [language, setLanguage] = useState<Language>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  
  // Form State
  const [prayerCategory, setPrayerCategory] = useState("");
  const [hasSeenDoctor, setHasSeenDoctor] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState<string | undefined>();
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("RW"); 
  const [joiningMethod, setJoiningMethod] = useState("");
  const [situation, setSituation] = useState("");

  const translations = {
    en: {
      title: "Request Prayer",
      subtitle: "Fill in the form below and attend our service.",
      nameLabel: "Your Name",
      namePlaceholder: "Enter your full name",
      whatsappLabel: "WhatsApp Number",
      whatsappPlaceholder: "Enter number",
      emailLabel: "Email Address (optional)",
      emailPlaceholder: "Enter your email",
      cityLabel: "City",
      cityPlaceholder: "Enter your city",
      countryLabel: "Country",
      joiningLabel: "How will you be joining us?",
      joiningPlaceholder: "Choose how you will join us",
      joiningOptions: ["In Person (at Church)", "Online (Zoom Service)"],
      prayerForLabel: "What would you like prayer for?",
      prayerForPlaceholder: "Select a category",
      prayerForOptions: ["Sickness", "Family", "Finances", "Marriage", "Career/Business", "Other"],
      doctorVisitLabel: "Have you seen a doctor or visited a hospital for this condition?",
      doctorVisitOptions: ["Yes", "No"],
      doctorAdvice: "We truly care about your well-being. We kindly encourage you to first visit a doctor or hospital to understand your condition better. God often works through the wisdom of medical professionals. Please come back and request prayer once you have medical guidance, especially if what was tried did not work. We are standing with you in love.",
      uploadLabel: "Upload your medical documents",
      uploadRequired: "(Required for healing requests)",
      uploadSub: "Drag And Drop Files Or Click To Upload",
      uploadLimit: "Maximum 5 documents",
      uploadPrivacy: "Your Documents Are Strictly Confidential.",
      situationLabel: "Share more about your situation",
      situationPlaceholder: "Write freely. There is no wrong way to say it.",
      termsPrefix: "I agree to the",
      termsLink: "Terms of Ministry & Data Consent",
      termsError: "Please agree to the terms to continue.",
      button: "Send my Request",
      successTitle: "Sent Successfully!",
      successMessage: "Your prayer request has been received. Our team will get back to you shortly via whatsapp. Yesu ni Umwami.",
      backBtn: "Done"
    },
    rw: {
      title: "Saba Gusengerwa",
      subtitle: "Uzuza iyi fomu hano hanyuma uze mu materaniro yacu.",
      nameLabel: "Izina Ryawe",
      namePlaceholder: "Andika amazina yawe yombi",
      whatsappLabel: "Nimero ya WhatsApp",
      whatsappPlaceholder: "Andika nimero",
      emailLabel: "Imeyili (si itegeko)",
      emailPlaceholder: "Andika imeyili yawe",
      cityLabel: "Umujyi",
      cityPlaceholder: "Andika umujyi utuyemo",
      countryLabel: "Igihugu",
      joiningLabel: "Uzifatanya natwe ute?",
      joiningPlaceholder: "Hitamo uko uzifatanya natwe",
      joiningOptions: ["Nje mu rusengero", "Kuri murandasi (Live)"],
      prayerForLabel: "Wifuza ko tugusengera ku ki?",
      prayerForPlaceholder: "Hitamo icyiciro",
      prayerForOptions: ["Uburwayi", "Umuryango", "Ubutunzi/Imari", "Urushako", "Akazi/Ubushabitsi", "Ikindi"],
      doctorVisitLabel: "Waba warasuye muganga cyangwa waragiye kwa muganga kubera iki kibazo?",
      doctorVisitOptions: ["Yego", "Oya"],
      doctorAdvice: "Twitaye cyane ku buzima bwawe. Turakwinginga ngo ubanze usure muganga kugira ngo usobanukirwe neza uko ubuzima bwawe buhagaze. Imana ikunze gukoresha ubuhanga bwa muganga. Turagusaba kuzagaruka gusaba isengesho ryo gukira umaze kubonana na muganga, cyane cyane niba ibyo bagerageje bitarakunze.",
      uploadLabel: "Shyiraho impapuro za muganga",
      uploadRequired: "(Irategeko niba ushaka isengesho ryo gukira)",
      uploadSub: "Kanda hano ushyireho impapuro",
      uploadLimit: "Nturenze impapuro 5",
      uploadPrivacy: "Inyandiko zawe zibikirwa ibanga rikomeye.",
      situationLabel: "Sobanura byimbitse ibibazo ufite",
      situationPlaceholder: "Andika wisanzuye. Nta buryo bubi bwo kubivuga buhari.",
      termsPrefix: "Nemeye",
      termsLink: "Amategeko y'Umurimo n'Ikoreshwa ry'Imyirondoro",
      termsError: "Nyamuneka emera amategeko kugira ngo ukomeze.",
      button: "Kohereza",
      successTitle: "Byoherejwe neza!",
      successMessage: "Ubusabe bwawe bwakiriwe. Itsinda ryacu riraza kukuvugisha vuba kuri whatsapp. Yesu ni Umwami.",
      backBtn: "Byarangiye"
    }
  };

  const t = language ? translations[language] : translations.en;
  const isSickness = prayerCategory === "Sickness" || prayerCategory === "Uburwayi";
  const doctorYes = hasSeenDoctor === "Yes" || hasSeenDoctor === "Yego";
  const doctorNo = hasSeenDoctor === "No" || hasSeenDoctor === "Oya";

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      if (selectedFiles.length + filesArray.length > 5) {
        alert(t.uploadLimit);
        return;
      }
      setSelectedFiles(prev => [...prev, ...filesArray]);
    }
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToTerms) return;
    setStatus("submitting");

    try {
      let fileURLs: string[] = [];
      
      // 1. Upload files to Storage if they exist
      if (selectedFiles.length > 0) {
        const uploadPromises = selectedFiles.map(async (file) => {
          const storageRef = ref(storage, `medical_docs/${Date.now()}-${file.name}`);
          const snapshot = await uploadBytes(storageRef, file);
          return await getDownloadURL(snapshot.ref);
        });
        fileURLs = await Promise.all(uploadPromises);
      }

      // 2. Save document to Firestore
      await addDoc(collection(db, "prayer_requests"), {
        name,
        whatsapp: whatsapp || "N/A",
        email: email || "Not Provided",
        location: `${city}, ${countries[country as keyof typeof countries]?.name || country}`,
        attendance: joiningMethod,
        requestType: prayerCategory,
        hasSeenDoctor,
        situation,
        documents: fileURLs, // Saved URLs from storage
        status: "New",
        createdAt: serverTimestamp(),
      });

      setStatus("success");
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error("Error sending request:", error);
      setStatus("idle");
      alert("Something went wrong. Please check your internet connection and try again.");
    }
  };

  // --- 3. SUCCESS MESSAGE SCREEN ---
  if (status === "success") {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-[#FDF8F3] px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#FFFFFD] w-full max-w-[550px] rounded-[32px] p-12 shadow-2xl text-center border border-green-100"
        >
          <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle size={48} className="text-green-500" />
          </div>
          <h2 className="text-[32px] font-bold text-[#1B1C1E] mb-4 font-montserrat tracking-tight">
            {t.successTitle}
          </h2>
          <p className="text-gray-500 mb-10 leading-relaxed text-lg">
            {t.successMessage}
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="w-full bg-[#E8751A] text-white font-bold py-5 rounded-2xl hover:bg-orange-600 transition-all shadow-xl shadow-orange-100 uppercase tracking-widest text-[14px]"
          >
            {t.backBtn}
          </button>
        </motion.div>
      </div>
    );
  }

  if (!language) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-[#FDF8F3] px-6">
        <div className="bg-[#FFFFFD] w-full max-w-[600px] rounded-[32px] border border-gray-100 p-12 shadow-xl text-center">
          <h2 className="text-[26px] font-bold text-[#1B1C1E] mb-10 font-montserrat tracking-tight">
            Choose your language to continue <br/> Hitamo ururimi ukoresha
          </h2>
          <div className="grid grid-cols-2 gap-8">
            <button onClick={() => setLanguage("en")} className="flex flex-col items-center p-12 rounded-[16px] border border-gray-100 bg-[#FFFFFD] hover:border-[#E8751A] hover:shadow-lg transition-all group">
              <div className="mb-4 scale-125"><Image src="/eng-flag.png" alt="English" width={62} height={34} /></div>
              <span className="font-bold text-[#1B1C1E] text-lg">English</span>
            </button>
            <button onClick={() => setLanguage("rw")} className="flex flex-col items-center p-12 rounded-[16px] border border-gray-100 bg-[#FFFFFD] hover:border-[#E8751A] hover:shadow-lg transition-all group">
              <div className="mb-4 scale-125"><Image src="/rwanda-flag.png" alt="Ikinyarwanda" width={62} height={34} /></div>
              <span className="font-bold text-[#1B1C1E] text-lg">Ikinyarwanda</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#FDF8F3] py-20 px-6 relative">
      <AgreementModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} lang={language} />

      <div className="mx-auto max-w-[700px] bg-[#FFFFFD] rounded-[32px] border border-gray-100 p-8 md:p-16 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)]">
        <div className="mb-12 text-left">
          <button onClick={() => {setLanguage(null); setPrayerCategory(""); setHasSeenDoctor("");}} className="text-[12px] text-[#E8751A] mb-6 hover:underline  tracking-widest">← Change Language</button>
          <h2 className="text-[40px]  text-[#1B1C1E] mb-3 font-bold font-montserrat tracking-tight leading-tight">{t.title}</h2>
          <p className="text-gray-400 text-[16px] font-medium">{t.subtitle}</p>
          <div className="h-[1px] bg-gray-100 w-full mt-8" />
        </div>

        <form className="space-y-8 text-left" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[14px]  text-[#1B1C1E]  tracking-wider">{t.nameLabel}</label>
              <input
                required
                placeholder={t.namePlaceholder}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-5 py-4 bg-gray-50/30 rounded-xl border border-gray-100 outline-none focus:border-[#E8751A] focus:bg-white transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[14px]  text-[#1B1C1E]  tracking-wider">{t.whatsappLabel}</label>
              <PhoneInput
                international
                required
                defaultCountry="RW"
                placeholder={t.whatsappPlaceholder}
                value={whatsapp}
                onChange={setWhatsapp}
                className="whatsapp-input-container w-full px-5 py-4 bg-gray-50/30 rounded-xl border border-gray-100 outline-none focus-within:border-[#E8751A] focus-within:bg-white transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[14px]  text-[#1B1C1E]  tracking-wider">{t.emailLabel}</label>
              <input
                type="email"
                placeholder={t.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-4 bg-gray-50/30 rounded-xl border border-gray-100 outline-none focus:border-[#E8751A] focus:bg-white transition-all"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                <label className="text-[14px] text-[#1B1C1E] tracking-wider">{t.cityLabel}</label>
                <input
                    required
                    placeholder={t.cityPlaceholder}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-5 py-4 bg-gray-50/30 rounded-xl border border-gray-100 outline-none focus:border-[#E8751A] focus:bg-white transition-all"
                />
                </div>
                <div className="flex flex-col gap-2">
                <label className="text-[14px] text-[#1B1C1E] tracking-wider">{t.countryLabel}</label>
                <div className="relative">
                    <select
                        required
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full px-5 py-4 bg-gray-50/30 rounded-xl border border-gray-100 outline-none appearance-none cursor-pointer"
                    >
                        {countryList.map((c) => (
                            <option key={c.code} value={c.code}>{c.name}</option>
                        ))}
                    </select>
                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                </div>
                </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="flex flex-col gap-2">
                <label className="text-[14px] text-[#1B1C1E]  tracking-wider">{t.joiningLabel}</label>
                <div className="relative">
                <select
                  required
                  value={joiningMethod}
                  onChange={(e) => setJoiningMethod(e.target.value)}
                  className="w-full px-5 py-4 bg-gray-50/30 rounded-xl border border-gray-100 outline-none appearance-none cursor-pointer"
                >
                    <option value="">{t.joiningPlaceholder}</option>
                    {t.joiningOptions.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
                <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-[14px]  text-[#1B1C1E]  tracking-wider">{t.prayerForLabel}</label>
                <div className="relative">
                <select required value={prayerCategory} onChange={(e) => {setPrayerCategory(e.target.value); setHasSeenDoctor("");}} className="w-full px-5 py-4 bg-gray-50/30 rounded-xl border border-gray-100 outline-none appearance-none cursor-pointer">
                    <option value="">{t.prayerForPlaceholder}</option>
                    {t.prayerForOptions.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
                <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                </div>
            </div>
          </div>

          <AnimatePresence>
            {isSickness && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-[14px]  text-[#1B1C1E] tracking-tight">{t.doctorVisitLabel}</label>
                        <div className="relative">
                            <select required value={hasSeenDoctor} onChange={(e) => setHasSeenDoctor(e.target.value)} className="w-full px-5 py-4 bg-gray-50/30 rounded-xl border border-gray-100 outline-none appearance-none cursor-pointer font-medium">
                                <option value="">Select an option</option>
                                {t.doctorVisitOptions.map(o => <option key={o} value={o}>{o}</option>)}
                            </select>
                            <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                        </div>
                    </div>

                    {doctorNo && (
                        <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 flex gap-4">
                            <HeartPulse className="text-blue-500 shrink-0" size={24} />
                            <p className="text-[14px] leading-relaxed text-blue-800 italic">{t.doctorAdvice}</p>
                        </div>
                    )}

                    {doctorYes && (
                        <div className="flex flex-col gap-3">
                            <label className="text-[14px]  text-[#1B1C1E] flex items-center gap-2">
                                {t.uploadLabel} <span className="text-red-500 text-[11px] uppercase font-black tracking-tighter">{t.uploadRequired}</span>
                            </label>
                            <input type="file" multiple hidden ref={fileInputRef} onChange={handleFileChange} accept=".pdf,.jpg,.jpeg,.png" />
                            <div onClick={() => fileInputRef.current?.click()} className="border-2 border-dashed border-gray-200 rounded-2xl p-10 flex flex-col items-center justify-center bg-gray-50/30 cursor-pointer hover:bg-gray-50 transition-all">
                                <Upload className="text-gray-400 mb-2" size={28} />
                                <span className="text-[14px]  text-gray-500">{t.uploadSub}</span>
                                <span className="text-[12px] text-[#E8751A] font-black mt-2 uppercase">{selectedFiles.length} / 5 FILES</span>
                            </div>
                            {selectedFiles.length > 0 && (
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {selectedFiles.map((f, i) => (
                                        <div key={i} className="flex items-center gap-2 bg-white border border-gray-100 px-4 py-2 rounded-full text-[12px]  text-gray-600 shadow-sm">
                                            <span className="max-w-[120px] truncate">{f.name}</span>
                                            <button type="button" onClick={() => removeFile(i)} className="text-red-500 hover:scale-125 transition-transform"><X size={14} /></button>
                                        </div>
                                    ))}
                                </div>
                            )}
                            <span className="text-[11px] text-gray-400  tracking-widest">{t.uploadPrivacy}</span>
                        </div>
                    )}
                </motion.div>
            )}
          </AnimatePresence>

          <div className="flex flex-col gap-2">
            <label className="text-[14px]  text-[#1B1C1E]  tracking-wider">{t.situationLabel}</label>
            <textarea
              required
              rows={5}
              placeholder={t.situationPlaceholder}
              value={situation}
              onChange={(e) => setSituation(e.target.value)}
              className="w-full px-5 py-4 bg-gray-50/30 rounded-xl border border-gray-100 outline-none focus:border-[#E8751A] focus:bg-white transition-all resize-none"
            />
          </div>

          <div className="flex gap-4 p-6 bg-gray-50/50 rounded-2xl border border-gray-100 items-start">
            <input type="checkbox" id="consent" checked={agreedToTerms} onChange={(e) => setAgreedToTerms(e.target.checked)} className="w-6 h-6 mt-0.5 accent-[#E8751A] cursor-pointer shrink-0" />
            <label htmlFor="consent" className="text-[13px] text-gray-500 leading-relaxed cursor-pointer font-medium">
                {t.termsPrefix} <button type="button" onClick={() => setIsModalOpen(true)} className="text-[#E8751A] font-black underline hover:text-orange-600 transition-colors">{t.termsLink}</button>. 
                I grant True Salvation Church the right to use this data for ministry purposes.
            </label>
          </div>

          {!(isSickness && doctorNo) && (
            <div className="flex flex-col gap-4 pt-4">
                <button 
                type="submit"
                disabled={status === "submitting" || !agreedToTerms || (doctorYes && selectedFiles.length === 0)}
                className="w-full md:w-fit bg-[#E8751A] text-white font-black py-5 px-16 rounded-2xl transition-all  active:scale-95 disabled:bg-gray-200 disabled:text-gray-400 shadow-2xl  tracking-widest text-[14px] flex items-center justify-center"
                >
                {status === "submitting" ? <Loader2 className="animate-spin" /> : t.button}
                </button>
                {!agreedToTerms && <p className="text-[12px] text-red-400 font-bold italic animate-pulse tracking-tight">*{t.termsError}</p>}
            </div>
          )}
        </form>
      </div>
      <style jsx global>{`
        .whatsapp-input-container {
            display: flex;
            align-items: center;
        }
        .PhoneInputInput {
            background: transparent;
            border: none;
            outline: none;
            flex: 1;
            padding-left: 10px;
            font-size: 14px;
        }
        .PhoneInputCountry {
            display: flex;
            align-items: center;
            gap: 8px;
        }
      `}</style>
    </section>
  );
}