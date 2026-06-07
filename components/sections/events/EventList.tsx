"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Calendar, Clock, MapPin, X, ExternalLink, Loader2 } from "lucide-react";
import { db } from "@/lib/firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

export function EventList() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  // --- MODAL STATES ---
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<"en" | "rw" | null>(null);

  // Fetch live events from Firebase
  useEffect(() => {
    const q = query(collection(db, "events"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setEvents(data);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Automatically split events into Upcoming and Past based on systemDate
  const { upcomingEvents, pastEvents } = useMemo(() => {
    const today = new Date().toISOString().split("T")[0];
    const upcoming: any[] = [];
    const past: any[] = [];

    events.forEach(event => {
      // Fallback to upcoming if systemDate doesn't exist yet
      if (!event.systemDate || event.systemDate >= today) {
        upcoming.push(event);
      } else {
        past.push(event);
      }
    });

    return { upcomingEvents: upcoming, pastEvents: past };
  }, [events]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [selectedEvent]);

  // Helper component to render an event card
  const EventCard = ({ event, isPast }: { event: any, isPast?: boolean }) => (
    <motion.div
      whileHover={!isPast ? { y: -8 } : {}}
      onClick={() => {
        setSelectedEvent(event);
        if (isPast) {
          // Skip language picker for historical events and default view to English
          setSelectedLanguage("en");
        } else {
          setSelectedLanguage(null);
        }
      }}
      className={`bg-[#FFFFFD] rounded-[24px] border border-gray-100 shadow-sm cursor-pointer overflow-hidden group flex flex-col ${isPast ? 'opacity-70 grayscale-[20%] hover:opacity-100' : 'hover:shadow-xl transition-all'}`}
    >
      <div className="relative w-full h-[350px] overflow-hidden bg-gray-100 shrink-0">
        <Image 
          src={event.image} 
          alt={event.titleEn || event.title || "Event Flyer"} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B1C1E]/80 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
        
        {isPast && (
          <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg text-white text-[11px] font-black uppercase tracking-widest border border-white/10">
            Past Event
          </div>
        )}

        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
          <p className="text-[#E8751A] font-bold text-sm">{event.date}</p>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-[#1B1C1E] mb-2 line-clamp-2">
          {event.titleEn || event.titleRw || event.title}
        </h3>
        <p className="text-gray-500 text-sm flex items-start gap-2 mb-4 line-clamp-2">
          <MapPin size={16} className="text-[#E8751A] shrink-0 mt-0.5" />
          <span>{event.location}</span>
        </p>
        <div className="text-[#E8751A] text-sm font-bold flex items-center gap-1 group-hover:underline mt-auto">
          View Details {isPast ? "" : "& Register"} <ExternalLink size={14} />
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="py-20 px-6 font-montserrat">
      
      {/* SECTION HEADER */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1B1C1E] mb-4 tracking-tight">
          Upcoming Events
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Discover what is happening at True Salvation Church and find where you belong. Click on any event to learn more and register.
        </p>
      </div>

      {/* LOADING STATE */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <Loader2 className="animate-spin text-[#E8751A]" size={48} />
        </div>
      ) : events.length === 0 ? (
        <div className="text-center py-20 text-gray-400 italic">
          No upcoming events at the moment. Stay tuned!
        </div>
      ) : (
        <div className="max-w-7xl mx-auto space-y-20">
          
          {/* UPCOMING EVENTS GRID */}
          {upcomingEvents.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => <EventCard key={event.id} event={event} />)}
            </div>
          )}

          {/* PAST EVENTS SEPARATOR & GRID */}
          {pastEvents.length > 0 && (
            <div className="pt-12">
              <div className="flex items-center gap-4 mb-10">
                <h3 className="text-2xl font-bold text-gray-400 whitespace-nowrap">Past Events</h3>
                <div className="h-[1px] flex-1 bg-gray-200"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {pastEvents.map((event) => <EventCard key={event.id} event={event} isPast={true} />)}
              </div>
            </div>
          )}

        </div>
      )}

      {/* MODAL OVERLAY */}
      <AnimatePresence mode="wait">
        {selectedEvent && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-[#1B1C1E]/80 backdrop-blur-sm">
            <div className="absolute inset-0" onClick={() => { setSelectedEvent(null); setSelectedLanguage(null); }} />
            
            {!selectedLanguage ? (
              // ==========================================
              // STEP 1: INTERACTIVE LANGUAGE PICKER MODAL
              // Matches the screenshot perfectly
              // ==========================================
              <motion.div 
                key="lang-picker"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-[600px] bg-[#FFFFFD] rounded-[16px] border border-gray-100 p-12 shadow-2xl flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <X size={18} />
                </button>

                <h2 className="text-[24px] font-bold text-[#1B1C1E] mb-10 text-center font-montserrat tracking-tight leading-tight">
                  Choose your language to continue <br/> Hindura ururimi
                </h2>
                
                <div className="grid grid-cols-2 gap-8 w-full">
                  <button 
                    onClick={() => setSelectedLanguage("en")} 
                    className="flex flex-col items-center justify-center p-12 rounded-[8px] border border-gray-500/20 bg-[#FFFFFD] hover:border-[#E8751A] hover:shadow-lg transition-all group"
                  >
                    <div className="mb-4 w-[30px]">
                      <Image src="/eng-flag.png" alt="English" width={120} height={80} className="w-full object-contain" />
                    </div>
                    <span className="font-bold text-[#1B1C1E] text-lg">English</span>
                  </button>

                  <button 
                    onClick={() => setSelectedLanguage("rw")} 
                    className="flex flex-col items-center justify-center p-12 rounded-[8px] border border-gray-500/20 bg-[#FFFFFD] hover:border-[#E8751A] hover:shadow-lg transition-all group"
                  >
                    <div className="mb-4 w-[30px]">
                      <Image src="/rwanda-flag.png" alt="Ikinyarwanda" width={62} height={34} className="w-full object-contain" />
                    </div>
                    <span className="font-bold text-[#1B1C1E] text-lg">kinyarwanda</span>
                  </button>
                </div>
              </motion.div>
            ) : (
              // ==========================================
              // STEP 2: DYNAMIC EVENT DETAILS CONTENT MODAL
              // ==========================================
              <motion.div 
                key="event-details"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-[900px] bg-[#FFFFFD] rounded-[32px] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
                onClick={(e) => e.stopPropagation()} 
              >
                <button 
                  onClick={() => { setSelectedEvent(null); setSelectedLanguage(null); }}
                  className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-[#E8751A] transition-colors backdrop-blur-md"
                >
                  <X size={20} />
                </button>

                {/* Left Side: Flyer Image */}
                <div className="relative w-full md:w-1/2 h-[250px] sm:h-[300px] md:h-auto bg-gray-100 shrink-0">
                  <Image src={selectedEvent.image} alt="Event Flyer" fill className="object-cover" />
                </div>

                {/* Right Side: Event Details */}
                <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col overflow-y-auto custom-scrollbar text-left">
                  
                  {/* Dynamic Title Selection (With bulletproof fallback for old events) */}
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#1B1C1E] mb-6 tracking-tight leading-tight">
                    {selectedLanguage === "rw" 
                      ? (selectedEvent.titleRw || selectedEvent.titleEn || selectedEvent.title) 
                      : (selectedEvent.titleEn || selectedEvent.title)}
                  </h2>

                  {/* Logistics Information */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                      <Calendar className="text-[#E8751A] shrink-0 mt-0.5" size={20} />
                      <div>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">
                          {selectedLanguage === "rw" ? "Itariki" : "Date"}
                        </p>
                        <p className="text-[#1B1C1E] font-medium text-sm">{selectedEvent.date}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                      <Clock className="text-[#E8751A] shrink-0 mt-0.5" size={20} />
                      <div>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">
                          {selectedLanguage === "rw" ? "Isaha" : "Time"}
                        </p>
                        <p className="text-[#1B1C1E] font-medium text-sm">{selectedEvent.time}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                      <MapPin className="text-[#E8751A] shrink-0 mt-0.5" size={20} />
                      <div>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">
                          {selectedLanguage === "rw" ? "Aho Bizabera" : "Location"}
                        </p>
                        <p className="text-[#1B1C1E] font-medium text-sm">{selectedEvent.location}</p>
                      </div>
                    </div>
                  </div>

                  {/* Dynamic Body Content Description */}
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-[#1B1C1E] mb-3">
                      {selectedLanguage === "rw" ? "Ibyerekeye iki gikorwa" : "About this Event"}
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-sm whitespace-pre-wrap font-medium">
                      {selectedLanguage === "rw" 
                        ? (selectedEvent.descriptionRw || selectedEvent.descriptionEn || selectedEvent.description) 
                        : (selectedEvent.descriptionEn || selectedEvent.description)}
                    </p>
                  </div>

                  {/* Dynamic Action Button Redirect */}
                  {(!selectedEvent.systemDate || selectedEvent.systemDate >= new Date().toISOString().split("T")[0]) && (
                    <div className="mt-auto pt-6 border-t border-gray-100">
                      <a 
                        href={selectedLanguage === "rw" 
                          ? (selectedEvent.formLinkRw || selectedEvent.formLinkEn || selectedEvent.formLink) 
                          : (selectedEvent.formLinkEn || selectedEvent.formLinkRw || selectedEvent.formLink)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-[#E8751A] text-white font-black py-4 rounded-xl hover:bg-orange-600 transition-all active:scale-95 shadow-lg shadow-orange-100 uppercase tracking-widest text-[14px]"
                      >
                        {selectedLanguage === "rw" ? "Iyandikishe Hano" : "Register Now"} <ExternalLink size={18} />
                      </a>
                    </div>
                  )}

                </div>
              </motion.div>
            )}
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}