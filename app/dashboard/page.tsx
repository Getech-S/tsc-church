"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { useRouter } from "next/navigation";
import { 
  LayoutGrid, Search, Bell, ChevronLeft, ChevronRight, 
  ExternalLink, Download, Calendar, Trash2, Loader2, 
  MessageCircle, FileText, ArrowLeft, Mail, MapPin, Phone, X, LogOut, ChevronDown, ShieldAlert, Ticket, Upload
} from "lucide-react";
import Image from "next/image";
import { db, storage } from "@/lib/firebase";
import { collection, query, orderBy, onSnapshot, doc, deleteDoc, getDoc, setDoc, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { motion, AnimatePresence } from "framer-motion";

export const dynamic = "force-dynamic";

export default function StaffDashboard() {
  const router = useRouter();
  
  // --- NAVIGATION STATE ---
  const [activeTab, setActiveTab] = useState<"dashboards" | "events">("dashboards");

  // --- PRAYER REQUESTS STATES ---
  const [filter, setFilter] = useState("Today");
  const [searchQuery, setSearchQuery] = useState("");
  const [requests, setRequests] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [selectedRequest, setSelectedRequest] = useState<any | null>(null);
  const [detailTab, setDetailTab] = useState<"reason" | "uploads">("reason");
  const [selectedSlotDate, setSelectedSlotDate] = useState("");

  // --- ADMIN CALENDAR SETTINGS STATE ---
  const [adminSettings, setAdminSettings] = useState<{allowedDates: string[], blockedDates: string[], unlockAll: boolean}>({
    allowedDates: [],
    blockedDates: [],
    unlockAll: false
  });
  const [manageDate, setManageDate] = useState("");

  // --- EVENTS MANAGER STATES ---
  const [eventsList, setEventsList] = useState<any[]>([]);
  const [isSubmittingEvent, setIsSubmittingEvent] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventFormLink, setEventFormLink] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventFlyer, setEventFlyer] = useState<File | null>(null);

  // --- ROUTE GUARD & FETCH SETTINGS ---
  useEffect(() => {
    const session = localStorage.getItem("staffSession");
    if (!session) {
      router.push("/login");
    }

    const fetchSettings = async () => {
      try {
        const docRef = doc(db, "system_settings", "appointments");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setAdminSettings({ allowedDates: [], blockedDates: [], unlockAll: false, ...docSnap.data() });
        }
      } catch(e) {
        console.error("Error fetching settings", e);
      }
    };
    fetchSettings();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("staffSession");
    localStorage.removeItem("staffEmail");
    router.push("/login");
  };

  const greeting = useMemo(() => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  }, []);

  // --- FETCH PRAYER REQUESTS & EVENTS ---
  useEffect(() => {
    // Fetch Prayer Requests
    const qRequests = query(collection(db, "prayer_requests"), orderBy("createdAt", "desc"));
    const unsubRequests = onSnapshot(qRequests, (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        date: doc.data().createdAt?.toDate() || new Date()
      }));
      setRequests(data);
      setLoading(false);
    });

    // Fetch Events
    const qEvents = query(collection(db, "events"), orderBy("createdAt", "desc"));
    const unsubEvents = onSnapshot(qEvents, (snapshot) => {
      setEventsList(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => { unsubRequests(); unsubEvents(); };
  }, []);

  // --- ADMIN CALENDAR CONTROLS ---
  const toggleDateLock = async () => {
    if (!manageDate) return;
    
    const [y, m, d] = manageDate.split('-');
    const isSunday = new Date(Number(y), Number(m) - 1, Number(d)).getDay() === 0;
    
    let newSettings = { ...adminSettings };
    
    if (isSunday) {
      const isBlocked = adminSettings.blockedDates?.includes(manageDate);
      if (isBlocked) {
        newSettings.blockedDates = adminSettings.blockedDates.filter((date: string) => date !== manageDate);
      } else {
        newSettings.blockedDates = [...(adminSettings.blockedDates || []), manageDate];
      }
    } else {
      const isAllowed = adminSettings.allowedDates?.includes(manageDate);
      if (isAllowed) {
        newSettings.allowedDates = adminSettings.allowedDates.filter((date: string) => date !== manageDate);
      } else {
        newSettings.allowedDates = [...(adminSettings.allowedDates || []), manageDate];
      }
    }
    
    try {
      await setDoc(doc(db, "system_settings", "appointments"), newSettings, { merge: true });
      setAdminSettings(newSettings);
      setManageDate(""); 
    } catch (err) {
      console.error("Error saving settings", err);
      alert("Failed to update calendar settings.");
    }
  };

  const toggleUnlockAll = async () => {
    const newSettings = { ...adminSettings, unlockAll: !adminSettings.unlockAll };
    try {
      await setDoc(doc(db, "system_settings", "appointments"), newSettings, { merge: true });
      setAdminSettings(newSettings);
    } catch (err) {
      console.error("Error saving settings", err);
      alert("Failed to update global settings.");
    }
  };

  const isManageSunday = manageDate ? new Date(Number(manageDate.split('-')[0]), Number(manageDate.split('-')[1]) - 1, Number(manageDate.split('-')[2])).getDay() === 0 : false;

  const getSlotStatus = (dateString: string, count: number) => {
    const [year, month, day] = dateString.split('-');
    const dateObj = new Date(Number(year), Number(month) - 1, Number(day));
    const dayOfWeek = dateObj.getDay(); 
    
    const isExplicitlyAllowed = adminSettings.allowedDates?.includes(dateString);
    const isExplicitlyBlocked = adminSettings.blockedDates?.includes(dateString);
    const isAllUnlocked = adminSettings.unlockAll === true;

    if (isExplicitlyBlocked) return "Locked by Admin";
    if (dayOfWeek !== 0 && !isExplicitlyAllowed && !isAllUnlocked) return "Closed (Weekday)";
    
    const totalSlots = dayOfWeek === 0 ? 30 : 10; 
    if (count >= totalSlots) return "Fully Booked";
    
    return "Open";
  };

  const { activeSlots, archivedSlots } = useMemo(() => {
    const summary: Record<string, number> = {};
    
    requests.forEach(req => {
      if (req.appointmentDate) {
        summary[req.appointmentDate] = (summary[req.appointmentDate] || 0) + 1;
      }
    });

    adminSettings.allowedDates.forEach(d => { if (!summary[d]) summary[d] = 0; });
    adminSettings.blockedDates.forEach(d => { if (!summary[d]) summary[d] = 0; });

    const now = new Date();
    const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

    const active: {date: string, count: number, status: string}[] = [];
    const archived: {date: string, count: number, status: string}[] = [];

    Object.entries(summary).sort((a, b) => a[0].localeCompare(b[0])).forEach(([date, count]) => {
      const status = getSlotStatus(date, count);
      if (date >= todayStr) {
        active.push({date, count, status});
      } else {
        archived.push({date, count, status});
      }
    });

    return { activeSlots: active, archivedSlots: archived };
  }, [requests, adminSettings]);

  const filteredRequests = useMemo(() => {
    const now = new Date();
    const startOfToday = new Date(now.setHours(0, 0, 0, 0));
    const startOfWeek = new Date(); startOfWeek.setDate(now.getDate() - 7);
    const startOfMonth = new Date(); startOfMonth.setMonth(now.getMonth() - 1);

    return requests.filter(req => {
      const matchDate = 
        filter === "Today" ? req.date >= startOfToday :
        filter === "This Week" ? req.date >= startOfWeek :
        filter === "This Month" ? req.date >= startOfMonth : true;

      const matchSearch = 
        req.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        req.whatsapp?.includes(searchQuery) ||
        req.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        req.appointmentDate?.includes(searchQuery);
        
      const matchSlot = selectedSlotDate ? req.appointmentDate === selectedSlotDate : true;

      return matchDate && matchSearch && matchSlot;
    });
  }, [requests, filter, searchQuery, selectedSlotDate]);

  const totalPages = Math.ceil(filteredRequests.length / itemsPerPage);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage;
    const lastPageIndex = firstPageIndex + itemsPerPage;
    return filteredRequests.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, filteredRequests]);

  useEffect(() => { setCurrentPage(1); }, [filter, searchQuery, selectedSlotDate]);

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this prayer request? This action is permanent.")) {
      try {
        await deleteDoc(doc(db, "prayer_requests", id));
      } catch (error) {
        console.error("Delete Error:", error);
        alert("Error deleting request. Please check permissions.");
      }
    }
  };

  const handleExport = () => {
    const headers = ["Name", "WhatsApp", "Email", "Location", "Request", "Attendance", "Doctor Visited", "Submitted Date", "Appointment Date", "Document Links"];
    const csvContent = [
      headers.join(","),
      ...filteredRequests.map(req => {
        const docLinks = req.documents && req.documents.length > 0 
          ? req.documents.join(" | ") 
          : "No Documents";

        return [
          `"${req.name}"`, `"${req.whatsapp}"`, `"${req.email}"`, `"${req.location}"`, 
          `"${req.requestType}"`, `"${req.attendance}"`, `"${req.hasSeenDoctor || "N/A"}"`, 
          `"${req.date.toLocaleDateString()}"`, `"${req.appointmentDate || "N/A"}"`, `"${docLinks}"`
        ].join(",");
      })
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Prayer_Requests_${new Date().toLocaleDateString()}.csv`;
    a.click();
  };

  const downloadFile = (url: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openWhatsApp = (number: string, name: string, attendance?: string, appointmentDate?: string) => {
    const cleanNumber = number.replace(/\D/g, "");
    const isOnline = Boolean(attendance?.includes("Online"));
    const apptDateStr = appointmentDate || "your selected date";

    const message = encodeURIComponent(`
      Hello ${name}, this is True Salvation Church. 
      *ENGLISH*
      We are happy to tell you that your prayer request is approved and you are scheduled to be prayed for on *${apptDateStr}*.
      When you come before the Apostle of the Lord Jesus, please follow these simple guidelines so he can help you:
      1. Speak loudly and clearly so that you do not have to be asked to repeat yourself. Answer him right away if he asks a question.
      2. Say your full name and where you live. Then explain the problem you need prayer for.
      3. Raise your hands, stand upright, and look him directly in the eyes. Do not pray yourself; simply receive in faith.
      ${isOnline ? '4. *ON ZOOM*: Turn on your camera and microphone. Stand where he can see you clearly' : ''}
      If you feel the power causing you to fall or the urge to vomit, do not resist or hold it back, because that is your deliverance.

      *IKINYARWANDA*
      Twishimiye kukumenyesha ko wahawe amahirwe yo gusengerwa kuri *${apptDateStr}*,
      mugihe ugeze imbere y'Intumwa y'Umwami Yesu witondere ibi bikurikira kugirango abashe kugufasha:
      1. Vuga cyane uranguruye kuburyo bidasaba ko bagusubirishamo. Subiza Intumwa vuba igihe cyose hari icyo akubajije.
      2. Vuga amazina yawe naho uherereye unasobanure ikibazo cyatumye uza gusengerwa.
      3. Zamura amaboko yawe hejuru uhagarare neza umurebe mu maso. Wowe ntusenge, ahubwo wakire mu kwizera. 
      ${isOnline ? '4. *KURI ZOOM*: Ufungure Camera yawe ukande kuri unmute, uhagarare aho akubona neza.' : ''}
      Niwumva imbaraga zitumye ugwa cyangwa ushaka kuruka, we kubyibuza kuko ni ko gusubizwa kwawe. 

      Yesu ni Umwami!
      `);
    window.open(`https://wa.me/${cleanNumber}?text=${message}`, "_blank");
  };

  // --- EVENTS MANAGEMENT FUNCTIONS ---
  const handleCreateEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!eventFlyer) {
      alert("Please upload a flyer image for the event.");
      return;
    }
    
    setIsSubmittingEvent(true);
    try {
      // 1. Upload Flyer to Storage
      const storageRef = ref(storage, `event_flyers/${Date.now()}-${eventFlyer.name}`);
      const snapshot = await uploadBytes(storageRef, eventFlyer);
      const flyerUrl = await getDownloadURL(snapshot.ref);

      // 2. Save Event Details to Firestore
      await addDoc(collection(db, "events"), {
        title: eventTitle,
        date: eventDate,
        time: eventTime,
        location: eventLocation,
        description: eventDescription,
        formLink: eventFormLink,
        image: flyerUrl,
        createdAt: serverTimestamp()
      });

      // 3. Reset Form
      setEventTitle(""); setEventDate(""); setEventTime(""); setEventLocation("");
      setEventDescription(""); setEventFormLink(""); setEventFlyer(null);
      
      alert("Event successfully published to the website!");
    } catch (error) {
      console.error("Error creating event:", error);
      alert("Failed to create event. Please try again.");
    } finally {
      setIsSubmittingEvent(false);
    }
  };

  const handleDeleteEvent = async (id: string) => {
    if (confirm("Are you sure you want to permanently delete this event from the website?")) {
      try {
        await deleteDoc(doc(db, "events", id));
      } catch (error) {
        console.error("Delete Event Error:", error);
      }
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F8F9FA] font-montserrat relative overflow-x-hidden">
      
      {/* --- SIDEBAR NAVIGATION --- */}
      <aside className="w-[277px] bg-white border-r border-gray-100 flex flex-col fixed h-full z-20">
        <div className="p-8 mb-6"><Image src="/logo.png" alt="Logo" width={140} height={50} /></div>
        <nav className="flex-1 px-4 space-y-2">
          
          <div 
            onClick={() => setActiveTab("dashboards")}
            className={`flex items-center gap-3 px-6 py-4 rounded-xl font-bold cursor-pointer transition-all ${activeTab === "dashboards" ? "bg-[#FDF8F3] text-[#E8751A]" : "text-gray-500 hover:bg-gray-50"}`}
          >
            <LayoutGrid size={20} /> <span className="text-[15px]">Dashboards</span>
          </div>

          <div 
            onClick={() => setActiveTab("events")}
            className={`flex items-center gap-3 px-6 py-4 rounded-xl font-bold cursor-pointer transition-all ${activeTab === "events" ? "bg-[#FDF8F3] text-[#E8751A]" : "text-gray-500 hover:bg-gray-50"}`}
          >
            <Ticket size={20} /> <span className="text-[15px]">Events Manager</span>
          </div>

        </nav>
      </aside>

      <main className="flex-1 ml-[277px] min-w-0 max-w-[calc(100vw-277px)] overflow-x-hidden">
        <header className="h-[77px] bg-[#FFFFFD] border-b border-gray-100 flex items-center justify-between px-10 sticky top-0 z-10">
          <div className="relative w-full max-w-[400px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search..." className="w-full pl-12 pr-4 py-2.5 bg-[#F8F9FA] rounded-lg border border-gray-100 outline-none focus:border-[#E8751A] text-[14px]" />
          </div>
          <div className="flex items-center gap-6">
            <button onClick={handleLogout} className="flex items-center gap-2 text-red-500 font-bold text-[13px] border border-red-100 px-4 py-2 rounded-xl hover:bg-red-50 transition-all whitespace-nowrap">
              <LogOut size={16} /> Logout
            </button>
            <button className="relative p-2 bg-gray-50 rounded-full text-gray-400"><Bell size={20} /></button>
            <div className="flex items-center gap-3 border-l pl-6 border-gray-100">
              <div className="text-right hidden sm:block"><p className="text-[14px] font-bold text-[#1B1C1E] whitespace-nowrap">Staff Admin</p></div>
              <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative border border-gray-100 shrink-0"><Image src="/TSC.jpg" alt="Profile" fill className="object-cover" /></div>
            </div>
          </div>
        </header>

        <div className="p-6 md:p-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
            <h1 className="text-[28px] font-bold text-[#1B1C1E]">{greeting}, Admin</h1>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-100 text-[14px] text-gray-500 font-medium whitespace-nowrap w-fit">
              <Calendar size={16} /> <span>{new Date().toLocaleDateString()}</span>
            </div>
          </div>

          {/* ========================================= */}
          {/* TAB 1: PRAYER REQUESTS DASHBOARD          */}
          {/* ========================================= */}
          {activeTab === "dashboards" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {/* --- ADMIN CALENDAR MANAGEMENT PANEL --- */}
              <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm p-6 md:p-8 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-[20px] font-bold text-[#1B1C1E] flex items-center gap-2">
                    <ShieldAlert size={20} className="text-[#E8751A]" /> Calendar & Slot Management
                  </h2>
                </div>
                
                {adminSettings.unlockAll && (
                  <div className="mb-6 p-4 bg-orange-50 border border-orange-200 rounded-xl flex items-center gap-3 text-orange-700 text-sm font-bold shadow-sm">
                    WARNING: "Unlock All Dates" is currently ACTIVE. The public can book on any day of the week.
                  </div>
                )}

                <div className="flex flex-col md:flex-row gap-6 items-start md:items-end">
                  <div className="flex flex-col gap-2 w-full md:w-auto">
                    <label className="text-[13px] font-bold text-gray-400 uppercase tracking-wider">Select Date to Manage</label>
                    <input
                      type="date"
                      value={manageDate}
                      onChange={(e) => setManageDate(e.target.value)}
                      className="w-full md:w-[250px] px-4 py-3 bg-gray-50 rounded-xl border border-gray-100 outline-none focus:border-[#E8751A] transition-all font-medium text-[#1B1C1E]"
                    />
                  </div>

                  {manageDate && (
                    <div className="flex gap-3 w-full md:w-auto">
                      {isManageSunday ? (
                        <button 
                          onClick={toggleDateLock}
                          className={`px-6 py-3 font-bold rounded-xl transition-all whitespace-nowrap ${adminSettings.blockedDates?.includes(manageDate) ? "bg-green-500 text-white hover:bg-green-600" : "bg-red-500 text-white hover:bg-red-600"}`}
                        >
                          {adminSettings.blockedDates?.includes(manageDate) ? "✅ Unblock this Sunday" : "🚫 Block this Sunday"}
                        </button>
                      ) : (
                        <button 
                          onClick={toggleDateLock}
                          className={`px-6 py-3 font-bold rounded-xl transition-all whitespace-nowrap ${adminSettings.allowedDates?.includes(manageDate) ? "bg-red-500 text-white hover:bg-red-600" : "bg-[#1B1C1E] text-white hover:bg-black"}`}
                        >
                          {adminSettings.allowedDates?.includes(manageDate) ? "🔒 Lock this Weekday" : "🔓 Unlock this Weekday (10 Slots)"}
                        </button>
                      )}
                    </div>
                  )}

                  <div className="w-full md:w-auto ml-auto">
                    <button 
                      onClick={toggleUnlockAll}
                      className={`px-6 py-3 border font-bold rounded-xl transition-all whitespace-nowrap w-full ${adminSettings.unlockAll ? "border-[#E8751A] text-[#E8751A] bg-orange-50 hover:bg-orange-100" : "border-gray-200 text-gray-600 hover:bg-gray-50"}`}
                    >
                      {adminSettings.unlockAll ? "Revert to Sundays Only" : "Unlock ALL Weekdays"}
                    </button>
                  </div>
                </div>
              </div>

              {/* --- PRAYER REQUESTS TABLE --- */}
              <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm overflow-hidden w-full">
                <div className="p-6 md:p-8 border-b border-gray-50 flex flex-wrap gap-4 items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {["Today", "This Week", "This Month", "All"].map((t) => (
                      <button 
                        key={t} 
                        onClick={() => { setFilter(t); setSelectedSlotDate(""); }} 
                        className={`px-5 py-2 rounded-lg text-[14px] font-bold transition-all ${filter === t && !selectedSlotDate ? "bg-[#E8751A] text-white" : "bg-[#F8F9FA] text-gray-500"}`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                  <button onClick={handleExport} className="flex items-center gap-2 px-5 py-2 border rounded-lg text-[14px] font-bold text-gray-600 hover:bg-gray-50 transition-colors whitespace-nowrap"><Download size={16} /> Export List</button>
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
                    <h2 className="text-[24px] font-bold text-[#1B1C1E]">Prayer Requests</h2>
                    
                    <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                      {activeSlots.length > 0 && (
                        <div className="relative">
                          <select 
                            value={activeSlots.some((s) => s.date === selectedSlotDate) ? selectedSlotDate : ""} 
                            onChange={(e) => {
                              setSelectedSlotDate(e.target.value);
                              if(e.target.value) setFilter("All");
                            }}
                            className="appearance-none bg-[#FDF8F3] border border-[#E8751A]/20 text-[#E8751A] px-4 py-2 pr-8 rounded-lg font-bold text-[14px] outline-none cursor-pointer w-full sm:w-auto"
                          >
                            <option value="">Upcoming Bookings</option>
                            {activeSlots.map(({date, count, status}) => (
                              <option key={date} value={date}>{date} ({count} Booked - {status})</option>
                            ))}
                          </select>
                          <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#E8751A] pointer-events-none" />
                        </div>
                      )}

                      {archivedSlots.length > 0 && (
                        <div className="relative">
                          <select 
                            value={archivedSlots.some((s) => s.date === selectedSlotDate) ? selectedSlotDate : ""} 
                            onChange={(e) => {
                              setSelectedSlotDate(e.target.value);
                              if(e.target.value) setFilter("All");
                            }}
                            className="appearance-none bg-gray-50 border border-gray-200 text-gray-500 px-4 py-2 pr-8 rounded-lg font-bold text-[14px] outline-none cursor-pointer w-full sm:w-auto"
                          >
                            <option value="">Archived Bookings</option>
                            {archivedSlots.map(({date, count, status}) => (
                              <option key={date} value={date}>{date} ({count} Booked - {status})</option>
                            ))}
                          </select>
                          <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        </div>
                      )}

                      {selectedSlotDate && (
                        <button 
                          onClick={() => setSelectedSlotDate("")}
                          className="flex items-center gap-1 text-[12px] font-bold text-red-500 hover:bg-red-50 px-3 py-2 rounded-lg transition-colors border border-red-100"
                        >
                          <X size={14} /> Clear Date
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="w-full overflow-x-auto custom-scrollbar">
                    <table className="w-full text-left min-w-[1050px]">
                      <thead>
                        <tr className="text-[13px] text-gray-400 uppercase tracking-wider border-b border-gray-50 font-medium">
                          <th className="pb-4 px-2"><input type="checkbox" className="accent-[#E8751A]" /></th>
                          <th className="pb-4 whitespace-nowrap">Names & Email</th>
                          <th className="pb-4 whitespace-nowrap">Whatsapp</th>
                          <th className="pb-4 whitespace-nowrap">Location</th>
                          <th className="pb-4 whitespace-nowrap">Request Type</th>
                          <th className="pb-4 text-center whitespace-nowrap">Visited Doctor</th>
                          <th className="pb-4 text-center whitespace-nowrap">Docs</th>
                          <th className="pb-4 whitespace-nowrap">Attendance</th>
                          <th className="pb-4 whitespace-nowrap">Appt. Date</th>
                          <th className="pb-4 text-right pr-4 whitespace-nowrap">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                        {loading ? (
                          <tr><td colSpan={10} className="py-20 text-center"><Loader2 className="animate-spin mx-auto text-[#E8751A]" /></td></tr>
                        ) : currentTableData.length === 0 ? (
                          <tr><td colSpan={10} className="py-20 text-center text-gray-400 italic">No prayer requests found for this filter.</td></tr>
                        ) : currentTableData.map((req) => (
                          <tr key={req.id} className="hover:bg-gray-50/50 transition-colors">
                            <td className="py-6 px-2"><input type="checkbox" className="accent-[#E8751A]" /></td>
                            <td className="py-6 cursor-pointer pr-4" onClick={() => setSelectedRequest(req)}>
                              <p className="text-[14px] font-bold text-[#1B1C1E] whitespace-nowrap">{req.name}</p>
                              <p className="text-[12px] text-gray-400 truncate max-w-[150px]">{req.email}</p>
                            </td>
                            <td className="py-6 text-[14px] font-medium text-gray-600 whitespace-nowrap pr-4">{req.whatsapp}</td>
                            <td className="py-6 text-[14px] font-medium text-gray-600 pr-4"><span className="line-clamp-2 max-w-[150px]">{req.location}</span></td>
                            <td className="py-6 text-[14px] font-medium text-gray-600 whitespace-nowrap pr-4">{req.requestType}</td>
                            <td className="py-6 text-center text-[12px] font-bold text-gray-500 pr-4">{req.hasSeenDoctor || "No"}</td>
                            <td className="py-6 text-center pr-4">{req.documents?.length > 0 ? <FileText size={18} className="mx-auto text-[#E8751A]" /> : <span className="text-gray-300">-</span>}</td>
                            <td className="py-6 pr-4">
                              <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase whitespace-nowrap ${req.attendance?.includes("Online") ? "bg-green-50 text-green-600" : "bg-blue-50 text-blue-600"}`}>{req.attendance}</span>
                            </td>
                            <td className="py-6 text-[14px] font-bold text-[#E8751A] whitespace-nowrap pr-4">{req.appointmentDate || "N/A"}</td>
                            <td className="py-6 text-right pr-4">
                              <div className="flex items-center justify-end gap-3">
                                <button onClick={() => openWhatsApp(req.whatsapp, req.name, req.attendance, req.appointmentDate)} className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100"><MessageCircle size={18} /></button>
                                <button onClick={() => setSelectedRequest(req)} className="text-[#E8751A] hover:text-orange-700 transition-colors"><ExternalLink size={18} /></button>
                                <button onClick={() => handleDelete(req.id)} className="text-red-400 hover:text-red-600 transition-colors"><Trash2 size={18} /></button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="py-6 flex flex-wrap items-center justify-between border-t border-gray-50 mt-4 gap-4">
                    <div className="flex items-center gap-3 text-[14px] text-gray-400">
                      <span>Row per page: <b className="text-[#1B1C1E]">{itemsPerPage}</b></span>
                      <span className="ml-2 sm:ml-4">Showing {currentTableData.length} of {filteredRequests.length}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)} className="p-2 border border-gray-100 rounded-lg text-gray-400 hover:bg-gray-50 disabled:opacity-30"><ChevronLeft size={18} /></button>
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <button key={page} onClick={() => setCurrentPage(page)} className={`w-9 h-9 flex items-center justify-center rounded-lg font-bold border ${currentPage === page ? "bg-[#FDF8F3] text-[#E8751A] border-[#FDF8F3]" : "text-gray-400 border-transparent hover:bg-gray-50"}`}>{page}</button>
                      ))}
                      <button disabled={currentPage === totalPages || totalPages === 0} onClick={() => setCurrentPage(p => p + 1)} className="p-2 border border-gray-100 rounded-lg text-gray-400 hover:bg-gray-50 disabled:opacity-30"><ChevronRight size={18} /></button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================= */}
          {/* TAB 2: EVENTS MANAGER                     */}
          {/* ========================================= */}
          {activeTab === "events" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              
              {/* Event Creation Form */}
              <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm p-6 md:p-10 mb-10">
                <h2 className="text-[24px] font-bold text-[#1B1C1E] mb-8">Publish New Event</h2>
                
                <form onSubmit={handleCreateEvent} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[13px] font-bold text-gray-500 uppercase tracking-wider">Event Title</label>
                      <input required value={eventTitle} onChange={e => setEventTitle(e.target.value)} placeholder="e.g. The Connect Conference" className="w-full px-5 py-4 bg-gray-50 rounded-xl border border-gray-100 outline-none focus:border-[#E8751A] transition-all" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[13px] font-bold text-gray-500 uppercase tracking-wider">Location</label>
                      <input required value={eventLocation} onChange={e => setEventLocation(e.target.value)} placeholder="e.g. Main Auditorium" className="w-full px-5 py-4 bg-gray-50 rounded-xl border border-gray-100 outline-none focus:border-[#E8751A] transition-all" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[13px] font-bold text-gray-500 uppercase tracking-wider">Date</label>
                      <input required value={eventDate} onChange={e => setEventDate(e.target.value)} placeholder="e.g. Sunday, June 14, 2026" className="w-full px-5 py-4 bg-gray-50 rounded-xl border border-gray-100 outline-none focus:border-[#E8751A] transition-all" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[13px] font-bold text-gray-500 uppercase tracking-wider">Time</label>
                      <input required value={eventTime} onChange={e => setEventTime(e.target.value)} placeholder="e.g. 2:00 PM - 6:00 PM CAT" className="w-full px-5 py-4 bg-gray-50 rounded-xl border border-gray-100 outline-none focus:border-[#E8751A] transition-all" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] font-bold text-gray-500 uppercase tracking-wider">Registration Form Link</label>
                    <input required value={eventFormLink} onChange={e => setEventFormLink(e.target.value)} placeholder="Paste your Google Form or Typeform link here" className="w-full px-5 py-4 bg-gray-50 rounded-xl border border-gray-100 outline-none focus:border-[#E8751A] transition-all" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] font-bold text-gray-500 uppercase tracking-wider">Description</label>
                    <textarea required rows={4} value={eventDescription} onChange={e => setEventDescription(e.target.value)} placeholder="Write details about the event..." className="w-full px-5 py-4 bg-gray-50 rounded-xl border border-gray-100 outline-none focus:border-[#E8751A] transition-all resize-none" />
                  </div>

                  <div className="flex flex-col gap-2 pt-2">
                    <label className="text-[13px] font-bold text-gray-500 uppercase tracking-wider">Event Flyer Image</label>
                    <input type="file" hidden ref={fileInputRef} onChange={e => setEventFlyer(e.target.files ? e.target.files[0] : null)} accept="image/*" />
                    <div onClick={() => fileInputRef.current?.click()} className="border-2 border-dashed border-gray-200 rounded-2xl p-10 flex flex-col items-center justify-center bg-gray-50 hover:bg-orange-50/50 cursor-pointer transition-all">
                      <Upload className={`${eventFlyer ? "text-[#E8751A]" : "text-gray-400"} mb-2`} size={28} />
                      <span className={`text-[14px] font-medium ${eventFlyer ? "text-[#E8751A]" : "text-gray-500"}`}>
                        {eventFlyer ? eventFlyer.name : "Click to upload your flyer"}
                      </span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button 
                      type="submit" 
                      disabled={isSubmittingEvent}
                      className="bg-[#E8751A] text-white font-bold py-4 px-10 rounded-xl hover:bg-orange-600 transition-all disabled:opacity-50 flex items-center gap-2"
                    >
                      {isSubmittingEvent ? <Loader2 className="animate-spin" /> : "Publish Event"}
                    </button>
                  </div>
                </form>
              </div>

              {/* Active Events List */}
              <div>
                <h2 className="text-[24px] font-bold text-[#1B1C1E] mb-6">Active Events</h2>
                {eventsList.length === 0 ? (
                  <div className="bg-white rounded-[24px] p-10 text-center border border-gray-100 text-gray-400 italic">
                    No active events. Publish one above!
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {eventsList.map(event => (
                      <div key={event.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
                        <div className="relative h-[200px] w-full bg-gray-100">
                          <Image src={event.image} alt={event.title} fill className="object-cover" />
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                          <h3 className="font-bold text-[#1B1C1E] text-lg mb-1 line-clamp-1">{event.title}</h3>
                          <p className="text-gray-500 text-sm mb-4">{event.date}</p>
                          <button 
                            onClick={() => handleDeleteEvent(event.id)}
                            className="mt-auto flex items-center justify-center gap-2 w-full py-3 bg-red-50 text-red-500 font-bold rounded-xl hover:bg-red-100 transition-colors"
                          >
                            <Trash2 size={16} /> Delete Event
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </motion.div>
          )}

        </div>
      </main>

      {/* MODAL POPUP FOR PRAYER REQUESTS DETAILS */}
      <AnimatePresence>
        {selectedRequest && (
          <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="fixed inset-y-0 right-0 w-full md:w-[850px] bg-white shadow-[-20px_0_50px_rgba(0,0,0,0.05)] z-[60] flex flex-col border-l border-gray-100">
            <div className="p-6 md:p-10 border-b border-gray-50">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2 text-gray-400 text-[13px]"><Calendar size={14} /> Submitted on {selectedRequest.date.toLocaleDateString()}</div>
                <button onClick={() => setSelectedRequest(null)} className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg text-gray-600 font-bold text-[14px] hover:bg-gray-100"><ArrowLeft size={16} /> Back</button>
              </div>
              <h2 className="text-[28px] md:text-[32px] font-bold text-[#1B1C1E] mb-6 font-montserrat">{selectedRequest.name}'s Request</h2>
              <div className="flex flex-wrap gap-4 md:gap-6 items-center">
                 <div className="flex items-center gap-2 text-[#E8751A] text-[14px] font-bold"><Calendar size={16} /> Appt: {selectedRequest.appointmentDate || "N/A"}</div>
                 <div className="flex items-center gap-2 text-gray-500 text-[14px] font-medium"><Mail size={16} /> {selectedRequest.email}</div>
                 <div className="flex items-center gap-2 text-gray-500 text-[14px] font-medium"><Phone size={16} /> {selectedRequest.whatsapp}</div>
                 <div className="flex items-center gap-2 text-gray-500 text-[14px] font-medium"><MapPin size={16} /> {selectedRequest.location}</div>
              </div>
            </div>

            <div className="flex gap-6 md:gap-10 px-6 md:px-10 border-b border-gray-50">
              <button onClick={() => setDetailTab("reason")} className={`py-5 text-[14px] md:text-[15px] font-bold transition-all border-b-2 ${detailTab === "reason" ? "border-[#E8751A] text-[#E8751A]" : "border-transparent text-gray-400"}`}>Reason for Prayer</button>
              <button onClick={() => setDetailTab("uploads")} className={`py-5 text-[14px] md:text-[15px] font-bold transition-all border-b-2 ${detailTab === "uploads" ? "border-[#E8751A] text-[#E8751A]" : "border-transparent text-gray-400"}`}>Uploads ({selectedRequest.documents?.length || 0})</button>
            </div>

            <div className="flex-1 p-6 md:p-10 overflow-y-auto bg-gray-50/30">
              {detailTab === "reason" ? (
                <div className="bg-white p-6 md:p-10 rounded-[28px] border border-gray-100 shadow-sm min-h-[300px]">
                  <h3 className="text-[18px] font-bold text-[#1B1C1E] mb-6">{selectedRequest.requestType}</h3>
                  <p className="text-[#4A5A6B] leading-[1.8] text-[15px] whitespace-pre-wrap font-medium">{selectedRequest.situation || "No detailed message provided."}</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <h3 className="text-[18px] font-bold text-[#1B1C1E]">Supporting Documents</h3>
                  {selectedRequest.documents?.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedRequest.documents.map((url: string, i: number) => (
                        <div key={i} className="p-4 md:p-6 bg-white rounded-2xl border border-gray-100 flex items-center gap-4 hover:border-[#E8751A] transition-all group">
                           <div className="w-12 h-12 md:w-14 md:h-14 bg-red-50 text-red-500 flex items-center justify-center rounded-xl font-black text-xs shrink-0">FILE</div>
                           <div className="flex-1 min-w-0">
                              <p className="font-bold text-[13px] md:text-[14px] text-[#1B1C1E] truncate">Document_{i+1}</p>
                              <p className="text-[11px] md:text-[12px] text-gray-400">Medical Record</p>
                           </div>
                           <div className="flex items-center gap-1 md:gap-2 shrink-0">
                             <a href={url} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#E8751A] p-1">
                               <ExternalLink size={18} />
                             </a>
                             <button onClick={() => downloadFile(url)} className="text-gray-300 hover:text-blue-500 p-1">
                               <Download size={18} />
                             </button>
                           </div>
                        </div>
                      ))}
                    </div>
                  ) : <div className="text-center py-24 bg-white rounded-3xl italic text-gray-400">No documents found.</div>}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}