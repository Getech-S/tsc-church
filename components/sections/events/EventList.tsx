"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Calendar, Clock, MapPin, X, ExternalLink, Loader2 } from "lucide-react";
import { db } from "@/lib/firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

export function EventList() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);

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

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [selectedEvent]);

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
        /* EVENTS GRID */
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <motion.div
              key={event.id}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedEvent(event)}
              className="bg-[#FFFFFD] rounded-[24px] border border-gray-100 shadow-sm hover:shadow-xl transition-all cursor-pointer overflow-hidden group flex flex-col"
            >
              {/* Flyer Image Container */}
              <div className="relative w-full h-[350px] overflow-hidden bg-gray-100 shrink-0">
                <Image 
                  src={event.image} 
                  alt={event.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B1C1E]/80 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                {/* Date Badge over image */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
                  <p className="text-[#E8751A] font-bold text-sm">{event.date}</p>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-[#1B1C1E] mb-2 line-clamp-2">{event.title}</h3>
                <p className="text-gray-500 text-sm flex items-start gap-2 mb-4 line-clamp-2">
                  <MapPin size={16} className="text-[#E8751A] shrink-0 mt-0.5" />
                  <span>{event.location}</span>
                </p>
                <div className="text-[#E8751A] text-sm font-bold flex items-center gap-1 group-hover:underline mt-auto">
                  View Details & Register <ExternalLink size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* EVENT MODAL POPUP */}
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-[#1B1C1E]/80 backdrop-blur-sm">
            {/* Click outside to close */}
            <div className="absolute inset-0" onClick={() => setSelectedEvent(null)} />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-[900px] bg-[#FFFFFD] rounded-[32px] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
              onClick={(e) => e.stopPropagation()} 
            >
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-[#E8751A] transition-colors backdrop-blur-md"
              >
                <X size={20} />
              </button>

              {/* Left Side: Flyer Image */}
              <div className="relative w-full md:w-1/2 h-[250px] sm:h-[300px] md:h-auto bg-gray-100 shrink-0">
                <Image 
                  src={selectedEvent.image} 
                  alt={selectedEvent.title} 
                  fill 
                  className="object-cover"
                />
              </div>

              {/* Right Side: Event Details */}
              <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col overflow-y-auto custom-scrollbar text-left">
                
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1B1C1E] mb-6 tracking-tight leading-tight">
                  {selectedEvent.title}
                </h2>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <Calendar className="text-[#E8751A] shrink-0 mt-0.5" size={20} />
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Date</p>
                      <p className="text-[#1B1C1E] font-medium text-sm">{selectedEvent.date}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <Clock className="text-[#E8751A] shrink-0 mt-0.5" size={20} />
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Time</p>
                      <p className="text-[#1B1C1E] font-medium text-sm">{selectedEvent.time}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <MapPin className="text-[#E8751A] shrink-0 mt-0.5" size={20} />
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Location</p>
                      <p className="text-[#1B1C1E] font-medium text-sm">{selectedEvent.location}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-10">
                  <h3 className="text-lg font-bold text-[#1B1C1E] mb-3">About this Event</h3>
                  <p className="text-gray-500 leading-relaxed text-sm whitespace-pre-wrap">
                    {selectedEvent.description}
                  </p>
                </div>

                {/* Push button to bottom */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <a 
                    href={selectedEvent.formLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#E8751A] text-white font-black py-4 rounded-xl hover:bg-orange-600 transition-all active:scale-95 shadow-lg shadow-orange-100 uppercase tracking-widest text-[14px]"
                  >
                    Register Now <ExternalLink size={18} />
                  </a>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}