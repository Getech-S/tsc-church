"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { 
  LayoutGrid, Search, Bell, ChevronLeft, ChevronRight, 
  ExternalLink, Download, Calendar, Trash2, Loader2, 
  MessageCircle, FileText, ArrowLeft, Mail, MapPin, Phone, X, LogOut
} from "lucide-react";
import Image from "next/image";
import { db } from "@/lib/firebase";
import { collection, query, orderBy, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import { motion, AnimatePresence } from "framer-motion";

export const dynamic = "force-dynamic";

export default function StaffDashboard() {
  const router = useRouter();
  const [filter, setFilter] = useState("Today");
  const [searchQuery, setSearchQuery] = useState("");
  const [requests, setRequests] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [selectedRequest, setSelectedRequest] = useState<any | null>(null);
  const [detailTab, setDetailTab] = useState<"reason" | "uploads">("reason");

  // --- ROUTE GUARD: Check if logged in ---
  useEffect(() => {
    const session = localStorage.getItem("staffSession");
    if (!session) {
      router.push("/login");
    }
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

  useEffect(() => {
    const q = query(collection(db, "prayer_requests"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        date: doc.data().createdAt?.toDate() || new Date()
      }));
      setRequests(data);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Calculate booked slots per date for the dashboard overview
  const upcomingSlots = useMemo(() => {
    const summary: Record<string, number> = {};
    requests.forEach(req => {
      if (req.appointmentDate) {
        summary[req.appointmentDate] = (summary[req.appointmentDate] || 0) + 1;
      }
    });
    // Sort dates ascending
    return Object.entries(summary).sort((a, b) => a[0].localeCompare(b[0]));
  }, [requests]);

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

      return matchDate && matchSearch;
    });
  }, [requests, filter, searchQuery]);

  const totalPages = Math.ceil(filteredRequests.length / itemsPerPage);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage;
    const lastPageIndex = firstPageIndex + itemsPerPage;
    return filteredRequests.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, filteredRequests]);

  useEffect(() => { setCurrentPage(1); }, [filter, searchQuery]);

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

  return (
    <div className="flex min-h-screen bg-[#F8F9FA] font-montserrat relative overflow-x-hidden">
      <aside className="w-[277px] bg-white border-r border-gray-100 flex flex-col fixed h-full z-20">
        <div className="p-8 mb-6"><Image src="/logo.png" alt="Logo" width={140} height={50} /></div>
        <nav className="flex-1 px-4 space-y-2">
          <div className="flex items-center gap-3 px-6 py-4 bg-[#FDF8F3] rounded-xl text-[#E8751A] font-bold cursor-pointer">
            <LayoutGrid size={20} /> <span className="text-[15px]">Dashboards</span>
          </div>
        </nav>
      </aside>

      {/* FIX: Added min-w-0 so the flex container doesn't stretch beyond the screen width */}
      <main className="flex-1 ml-[277px] min-w-0">
        <header className="h-[77px] bg-[#FFFFFD] border-b border-gray-100 flex items-center justify-between px-10 sticky top-0 z-10">
          <div className="relative w-full max-w-[400px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search names, email, or date..." className="w-full pl-12 pr-4 py-2.5 bg-[#F8F9FA] rounded-lg border border-gray-100 outline-none focus:border-[#E8751A] text-[14px]" />
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

          <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm overflow-hidden w-full">
            <div className="p-6 md:p-8 border-b border-gray-50 flex flex-wrap gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {["Today", "This Week", "This Month", "All"].map((t) => (
                  <button key={t} onClick={() => setFilter(t)} className={`px-5 py-2 rounded-lg text-[14px] font-bold transition-all ${filter === t ? "bg-[#E8751A] text-white" : "bg-[#F8F9FA] text-gray-500"}`}>{t}</button>
                ))}
              </div>
              <button onClick={handleExport} className="flex items-center gap-2 px-5 py-2 border rounded-lg text-[14px] font-bold text-gray-600 hover:bg-gray-50 transition-colors whitespace-nowrap"><Download size={16} /> Export List</button>
            </div>

            {/* FIX: Removed overflow-x-auto from this parent wrapper so the title stays pinned */}
            <div className="p-6 md:p-8">
              
              <div className="flex flex-wrap items-end justify-between mb-6 gap-4">
                <h2 className="text-[24px] font-bold text-[#1B1C1E]">Prayer Requests</h2>
                
                {upcomingSlots.length > 0 && (
                  <div className="flex gap-3 overflow-x-auto pb-2 w-full sm:w-auto max-w-full custom-scrollbar">
                    {upcomingSlots.map(([date, count]) => (
                      <div key={date} className="shrink-0 bg-[#FDF8F3] border border-[#E8751A]/20 px-4 py-2 rounded-lg flex flex-col items-center min-w-[120px]">
                        <span className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">{date}</span>
                        <span className="text-[16px] font-bold text-[#E8751A]">{count} Booked</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* FIX: Added overflow wrapper specifically for the table only */}
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
                      <tr><td colSpan={10} className="py-20 text-center text-gray-400 italic">No prayer requests found.</td></tr>
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
        </div>
      </main>

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