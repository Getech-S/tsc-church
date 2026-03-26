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
        req.email?.toLowerCase().includes(searchQuery.toLowerCase());

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

  const openWhatsApp = (number: string, name: string, attendance?: string) => {
    const cleanNumber = number.replace(/\D/g, "");
    const isOnline = Boolean(attendance?.includes("Online"));
    const message = encodeURIComponent(`Hello ${name}, this is True Salvation Church. 
      [ENGLISH]
We confirm that you are on the prayer list for today. Please follow these guidelines:
1. IDENTIFICATION: State your Full Name and Location.
2. THE REQUEST: Briefly explain your situation.
3. POSTURE: Stand upright and raise your hands.
4. RECEPTION: Keep your eyes OPEN and look at the Apostle. Do not pray; just receive.
${isOnline ? '5. SETUP: Camera ON, no "blur", find a calm place (avoid sitting on a bed).' : ''}
If you feel like falling or vomiting, do not resist—this is your deliverance. Answer the Apostle immediately when he asks you something.

[KINYARWANDA]
Twemeje ko uri ku rutonde rw'abasengerwa uyu munsi. Kurikiza aya mabwiriza:
1. KWIVUGA: Vuga Amazina yawe yombi n'aho uherereye.
2. ICYIFUZO: Sobanura mu ncamake ikibazo cyawe.
3. GUHAGARARA: Zamura amaboko yawe hejuru uhagarare neza.
4. KWAKIRA: KANURA urebe Intumwa (Apostle) mu maso. Wowe ntugasenge, ahubwo akira mu kwizera.
${isOnline ? '5. KURI ZOOM: Kamera IFUNGURE, ba ahantu hatuje (atari ku buriri).' : ''}
Niwumva imbaraga zitumye ugwa cyangwa ushaka kuruka, we kubyirinda kuko ni ko gusubizwa kwawe. Subiza Intumwa vuba igihe cyose hari icyo akubajije.

 Yesu ni Umwami!
      
      `);
    window.open(`https://wa.me/${cleanNumber}?text=${message}`, "_blank");
  };

  const handleExport = () => {
    const headers = ["Name", "WhatsApp", "Email", "Location", "Request", "Attendance", "Doctor Visited", "Date", "Document Links"];
    const csvContent = [
      headers.join(","),
      ...filteredRequests.map(req => {
        const docLinks = req.documents && req.documents.length > 0 
          ? req.documents.join(" | ") 
          : "No Documents";

        return [
          `"${req.name}"`, `"${req.whatsapp}"`, `"${req.email}"`, `"${req.location}"`, 
          `"${req.requestType}"`, `"${req.attendance}"`, `"${req.hasSeenDoctor || "N/A"}"`, 
          `"${req.date.toLocaleDateString()}"`, `"${docLinks}"`
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

      <main className="flex-1 ml-[277px]">
        <header className="h-[77px] bg-[#FFFFFD] border-b border-gray-100 flex items-center justify-between px-10 sticky top-0 z-10">
          <div className="relative w-[400px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search..." className="w-full pl-12 pr-4 py-2.5 bg-[#F8F9FA] rounded-lg border border-gray-100 outline-none focus:border-[#E8751A] text-[14px]" />
          </div>
          <div className="flex items-center gap-6">
            <button onClick={handleLogout} className="flex items-center gap-2 text-red-500 font-bold text-[13px] border border-red-100 px-4 py-2 rounded-xl hover:bg-red-50 transition-all">
              <LogOut size={16} /> Logout
            </button>
            <button className="relative p-2 bg-gray-50 rounded-full text-gray-400"><Bell size={20} /></button>
            <div className="flex items-center gap-3 border-l pl-6 border-gray-100">
              <div className="text-right"><p className="text-[14px] font-bold text-[#1B1C1E]">Staff Admin</p></div>
              <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative border border-gray-100"><Image src="/TSC.jpg" alt="Profile" fill className="object-cover" /></div>
            </div>
          </div>
        </header>

        <div className="p-10">
          <div className="flex items-center justify-between mb-10">
            <h1 className="text-[28px] font-bold text-[#1B1C1E]">{greeting}, Admin</h1>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-100 text-[14px] text-gray-500 font-medium">
              <Calendar size={16} /> <span>{new Date().toLocaleDateString()}</span>
            </div>
          </div>

          <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-gray-50 flex items-center justify-between">
              <div className="flex gap-2">
                {["Today", "This Week", "This Month", "All"].map((t) => (
                  <button key={t} onClick={() => setFilter(t)} className={`px-5 py-2 rounded-lg text-[14px] font-bold transition-all ${filter === t ? "bg-[#E8751A] text-white" : "bg-[#F8F9FA] text-gray-500"}`}>{t}</button>
                ))}
              </div>
              <button onClick={handleExport} className="flex items-center gap-2 px-5 py-2 border rounded-lg text-[14px] font-bold text-gray-600 hover:bg-gray-50 transition-colors"><Download size={16} /> Export List</button>
            </div>

            <div className="px-8 pt-8 overflow-x-auto">
              <h2 className="text-[24px] font-bold text-[#1B1C1E] mb-8">Prayer Requests</h2>
              <table className="w-full text-left min-w-[1100px]">
                <thead>
                  <tr className="text-[13px] text-gray-400 uppercase tracking-wider border-b border-gray-50 font-medium">
                    <th className="pb-4 px-2"><input type="checkbox" className="accent-[#E8751A]" /></th>
                    <th className="pb-4">Names & Email</th>
                    <th className="pb-4">Whatsapp</th>
                    <th className="pb-4">Location</th>
                    <th className="pb-4">Request Type</th>
                    <th className="pb-4 text-center">Visited Doctor</th>
                    <th className="pb-4 text-center">Docs</th>
                    <th className="pb-4">Attendance</th>
                    <th className="pb-4 text-right px-4">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {loading ? (
                    <tr><td colSpan={9} className="py-20 text-center"><Loader2 className="animate-spin mx-auto text-[#E8751A]" /></td></tr>
                  ) : currentTableData.map((req) => (
                    <tr key={req.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-6 px-2"><input type="checkbox" className="accent-[#E8751A]" /></td>
                      <td className="py-6 cursor-pointer" onClick={() => setSelectedRequest(req)}>
                        <p className="text-[14px] font-bold text-[#1B1C1E]">{req.name}</p>
                        <p className="text-[12px] text-gray-400">{req.email}</p>
                      </td>
                      <td className="py-6 text-[14px] font-medium text-gray-600">{req.whatsapp}</td>
                      <td className="py-6 text-[14px] font-medium text-gray-600">{req.location}</td>
                      <td className="py-6 text-[14px] font-medium text-gray-600">{req.requestType}</td>
                      <td className="py-6 text-center text-[12px] font-bold text-gray-500">{req.hasSeenDoctor || "No"}</td>
                      <td className="py-6 text-center">{req.documents?.length > 0 ? <FileText size={18} className="mx-auto text-[#E8751A]" /> : <span className="text-gray-300">-</span>}</td>
                      <td className="py-6">
                        <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase ${req.attendance?.includes("Online") ? "bg-green-50 text-green-600" : "bg-blue-50 text-blue-600"}`}>{req.attendance}</span>
                      </td>
                      <td className="py-6 text-right px-4">
                        <div className="flex items-center justify-end gap-3">
                          <button onClick={() => openWhatsApp(req.whatsapp, req.name, req.attendance)} className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100"><MessageCircle size={18} /></button>
                          <button onClick={() => setSelectedRequest(req)} className="text-[#E8751A] hover:text-orange-700 transition-colors"><ExternalLink size={18} /></button>
                          <button onClick={() => handleDelete(req.id)} className="text-red-400 hover:text-red-600 transition-colors"><Trash2 size={18} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="py-8 flex items-center justify-between border-t border-gray-50 mt-4">
                <div className="flex items-center gap-3 text-[14px] text-gray-400">
                  <span>Row per page: <b className="text-[#1B1C1E]">{itemsPerPage}</b></span>
                  <span className="ml-4">Showing {currentTableData.length} of {filteredRequests.length}</span>
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
          <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="fixed inset-y-0 right-0 w-[850px] bg-white shadow-[-20px_0_50px_rgba(0,0,0,0.05)] z-[60] flex flex-col border-l border-gray-100">
            <div className="p-10 border-b border-gray-50">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2 text-gray-400 text-[13px]"><Calendar size={14} /> Submitted on {selectedRequest.date.toLocaleDateString()}</div>
                <button onClick={() => setSelectedRequest(null)} className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg text-gray-600 font-bold text-[14px] hover:bg-gray-100"><ArrowLeft size={16} /> Back Home</button>
              </div>
              <h2 className="text-[32px] font-bold text-[#1B1C1E] mb-6 font-montserrat">{selectedRequest.name}'s Request</h2>
              <div className="flex flex-wrap gap-6 items-center">
                 <div className="flex items-center gap-2 text-gray-500 text-[14px] font-medium"><Mail size={16} /> {selectedRequest.email}</div>
                 <div className="flex items-center gap-2 text-gray-500 text-[14px] font-medium"><Phone size={16} /> {selectedRequest.whatsapp}</div>
                 <div className="flex items-center gap-2 text-gray-500 text-[14px] font-medium"><MapPin size={16} /> {selectedRequest.location}</div>
              </div>
            </div>

            <div className="flex gap-10 px-10 border-b border-gray-50">
              <button onClick={() => setDetailTab("reason")} className={`py-5 text-[15px] font-bold transition-all border-b-2 ${detailTab === "reason" ? "border-[#E8751A] text-[#E8751A]" : "border-transparent text-gray-400"}`}>Reason for Prayer</button>
              <button onClick={() => setDetailTab("uploads")} className={`py-5 text-[15px] font-bold transition-all border-b-2 ${detailTab === "uploads" ? "border-[#E8751A] text-[#E8751A]" : "border-transparent text-gray-400"}`}>Uploads ({selectedRequest.documents?.length || 0})</button>
            </div>

            <div className="flex-1 p-10 overflow-y-auto bg-gray-50/30">
              {detailTab === "reason" ? (
                <div className="bg-white p-10 rounded-[28px] border border-gray-100 shadow-sm min-h-[300px]">
                  <h3 className="text-[18px] font-bold text-[#1B1C1E] mb-6">{selectedRequest.requestType}</h3>
                  <p className="text-[#4A5A6B] leading-[1.8] text-[15px] whitespace-pre-wrap font-medium">{selectedRequest.situation || "No detailed message provided."}</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <h3 className="text-[18px] font-bold text-[#1B1C1E]">Supporting Documents</h3>
                  {selectedRequest.documents?.length > 0 ? (
                    <div className="grid grid-cols-2 gap-4">
                      {selectedRequest.documents.map((url: string, i: number) => (
                        <div key={i} className="p-6 bg-white rounded-2xl border border-gray-100 flex items-center gap-4 hover:border-[#E8751A] transition-all group">
                           <div className="w-14 h-14 bg-red-50 text-red-500 flex items-center justify-center rounded-xl font-black text-xs">FILE</div>
                           <div className="flex-1">
                              <p className="font-bold text-[14px] text-[#1B1C1E]">Document_{i+1}</p>
                              <p className="text-[12px] text-gray-400">Medical Record</p>
                           </div>
                           <div className="flex items-center gap-2">
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