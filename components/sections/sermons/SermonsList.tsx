"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { getYoutubeVideos } from "@/app/actions/getYoutubeVideos";
import { Loader2, Play, Search, ChevronDown, BookOpen, Layers, Check } from "lucide-react";
import Image from "next/image";

const TEACHINGS_PLAYLIST_ID = "PL_VQRKpbLPMdwp4nrOdElfrLWqz_iQ3tn"; 

type VideoItem = { id: string; title: string; thumbnail: string; duration?: string };

const SERMON_SERIES = [
    { id: "PL_VQRKpbLPMfMT8P4_gWZgdOGgURvvLLU", title: "Breaking the Yokes | Gusandaza Ibicaniro no Guca Imigozi" },
    { id: "PL_VQRKpbLPMfxxnhM7ZfiYzeioDNeMe8S", title: "Understanding the Spiritual Realm | Menya Isi y'Umwuka" },
    { id: "PL_VQRKpbLPMdvY8CscyoYGlgjFGZcTSQO", title: "Gospel of Jesus Christ | Ubutumwa bwiza bw'Ubwami" },
    { id: "PL_VQRKpbLPMdiylDbPiERJJ4W9q_U_FVF", title: "Marriage | Urushako" },
    { id: "PL_VQRKpbLPMcA8alKI2lZOb3UXIig9y6Q", title: "Curses | Imivumo" },
    { id: "PL_VQRKpbLPMcoENfkArcbIERYzGa7AvwH", title: "Dreams | Inzozi" },
    { id: "PL_VQRKpbLPMdsNu7RYtbNjfcru3bOGNsL", title: "Breakthrough" },
    { id: "PL_VQRKpbLPMepejKnzCC0mkByxYoJdoSW", title: "Prosperity | Guterimbere" },
    { id: "PL_VQRKpbLPMfHVX-gy6oup5ZFPFksbkHy", title: "God's Formula for Abundance" },
    { id: "PL_VQRKpbLPMdqRpb2bXB43RIruwXvqq9Y", title: "Demonology" },
    { id: "PL_VQRKpbLPMck7vQ5MxnFDu2xea6YEyWR", title: "Angels' Ministry" },
];

export function SermonsList() {
    const [allVideos, setAllVideos] = useState<VideoItem[]>([]);
    const [visibleCount, setVisibleCount] = useState(9);
    const [nextPageToken, setNextPageToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    
    const [activeTab, setActiveTab] = useState("All");
    const [selectedPlaylist, setSelectedPlaylist] = useState<string | null>(null);
    const [searchText, setSearchText] = useState("");
    const [isSeriesOpen, setIsSeriesOpen] = useState(false);
    const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

    const dropdownRef = useRef<HTMLDivElement>(null);

    // Filtered list for the dropdown UI based on search text
    const filteredSeries = SERMON_SERIES.filter(series => 
        series.title.toLowerCase().includes(searchText.toLowerCase())
    );

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsSeriesOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const loadVideos = useCallback(async (token: string = "", isMore: boolean = false) => {
        if (isMore && visibleCount < allVideos.length) {
            setVisibleCount(prev => prev + 9);
            return;
        }

        try {
            if (!isMore) {
                setLoading(true);
                setAllVideos([]);
                setVisibleCount(9);
            } else {
                setLoadingMore(true);
            }

            const targetId = selectedPlaylist || (activeTab === "Teachings" ? TEACHINGS_PLAYLIST_ID : "");
            
            // Passes searchText to the API action immediately on every state change
            const data = await getYoutubeVideos(token, searchText, activeTab, targetId);
            
            const fetchedVideos = data.videos as VideoItem[];
            
            if (isMore) {
                setAllVideos(prev => {
                    const existingIds = new Set(prev.map(v => v.id));
                    const uniqueNew = fetchedVideos.filter(v => !existingIds.has(v.id));
                    return [...prev, ...uniqueNew];
                });
                setVisibleCount(prev => prev + 9);
            } else {
                setAllVideos(fetchedVideos);
            }
            
            setNextPageToken(data.nextPageToken);
        } catch (error) {
            console.error("Fetch error:", error);
        } finally {
            setLoading(false);
            setLoadingMore(false);
        }
    }, [activeTab, selectedPlaylist, searchText, allVideos, visibleCount]);

    // This effect triggers the search instantly as searchText, activeTab, or selectedPlaylist changes
    useEffect(() => {
        loadVideos("", false);
    }, [activeTab, selectedPlaylist, searchText]);

    const displayedVideos = allVideos.slice(0, visibleCount);

    return (
        <section className="bg-white py-16 px-4 md:px-6">
            <div className="mx-auto max-w-[1280px]">
                
                {/* NAVIGATION BAR */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12 pb-6 border-b border-gray-100">
                    
                    {/* FILTER GROUP */}
                    <div className="flex items-center gap-1 p-1 bg-gray-50 rounded-2xl w-full lg:w-auto">
                        <button
                            onClick={() => { setActiveTab("All"); setSelectedPlaylist(null); }}
                            className={`flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs sm:text-sm transition-all shrink-0 ${activeTab === "All" && !selectedPlaylist ? "bg-white text-[#E8751A] shadow-sm ring-1 ring-black/5" : "text-gray-500 hover:text-gray-900"}`}
                        >
                            <Layers size={16} className="shrink-0" />
                            <span>All</span>
                        </button>

                        <div className="relative flex-1 min-w-0" ref={dropdownRef}>
                            <button
                                onClick={() => setIsSeriesOpen(!isSeriesOpen)}
                                className={`flex items-center justify-between gap-2 w-full px-3 py-2.5 rounded-xl text-xs sm:text-sm transition-all ${selectedPlaylist ? "bg-[#E8751A] text-white shadow-md shadow-[#DD5F4C]/20" : "text-gray-500 hover:text-gray-900"}`}
                            >
                                <div className="flex items-center gap-1.5 min-w-0 overflow-hidden">
                                    <ChevronDown size={16} className={`shrink-0 transition-transform duration-300 ${isSeriesOpen ? "rotate-180" : ""}`} />
                                    <span className="truncate text-left">
                                        {selectedPlaylist ? SERMON_SERIES.find(p => p.id === selectedPlaylist)?.title : "Sermons"}
                                    </span>
                                </div>
                            </button>

                            {isSeriesOpen && (
                                <div className="absolute left-0 top-[110%] w-[280px] bg-white border border-gray-100 shadow-2xl rounded-2xl py-3 z-999 animate-in fade-in slide-in-from-top-1 duration-200">
                                    <div className="px-4 py-2 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-50 mb-2">Choose a Serie</div>
                                    <div className="max-h-[280px] overflow-y-auto no-scrollbar">
                                        {filteredSeries.length > 0 ? (
                                            filteredSeries.map((series) => (
                                                <button
                                                    key={series.id}
                                                    onClick={() => { setSelectedPlaylist(series.id); setActiveTab(""); setIsSeriesOpen(false); }}
                                                    className="w-full text-left px-4 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-[#E8A020] transition-colors flex items-start justify-between gap-2"
                                                >
                                                    <span className="leading-snug">{series.title}</span>
                                                    {selectedPlaylist === series.id && <Check size={14} className="shrink-0 mt-1 text-[#E8751A]" />}
                                                </button>
                                            ))
                                        ) : (
                                            <div className="px-4 py-3 text-xs text-gray-400 italic text-center">No matching series</div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>

                        <button
                            onClick={() => { setActiveTab("Teachings"); setSelectedPlaylist(null); }}
                            className={`flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs sm:text-sm transition-all shrink-0 ${activeTab === "Teachings" ? "bg-white text-[#DD5F4C] shadow-sm ring-1 ring-black/5" : "text-gray-500 hover:text-gray-900"}`}
                        >
                            <BookOpen size={16} className="shrink-0" />
                            <span>Teachings</span>
                        </button>
                    </div>

                    {/* SEARCH */}
                    <div className="relative w-full lg:w-[320px]">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search messages..."
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#E8751A]/20 focus:bg-white transition-all text-sm outline-none font-medium"
                        />
                    </div>
                </div>

                {/* VIDEO GRID */}
                {loading ? (
                    <div className="flex justify-center py-20"><Loader2 className="animate-spin text-[#E8751A]" size={40} /></div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        {displayedVideos.length > 0 ? (
                            displayedVideos.map((video) => (
                                <div key={video.id} className="group flex flex-col h-full cursor-pointer" onClick={() => setPlayingVideoId(video.id)}>
                                    <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-sm bg-black">
                                        {playingVideoId === video.id ? (
                                            <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${video.id}?autoplay=1`} title={video.title} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen className="absolute inset-0" />
                                        ) : (
                                            <>
                                                <Image src={video.thumbnail} alt={video.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                                                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
                                                <div className="absolute bottom-5 left-5 flex items-center gap-3">
                                                    <div className="w-10 h-10 bg-[#E8A020] rounded-full flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition-transform"><Play fill="black" size={18} /></div>
                                                    <div className="flex flex-col">
                                                        <span className="text-white font-bold text-[11px] uppercase tracking-wider opacity-80">Watch</span>
                                                        <span className="text-white font-bold text-[14px]">Message</span>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                    <h3 className="mt-5 text-[18px] font-bold text-gray-900 leading-snug group-hover:text-[#E8751A] transition-colors line-clamp-2 px-1">{video.title}</h3>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full py-20 text-center text-gray-500">
                                No results found for "{searchText}" in this category.
                            </div>
                        )}
                    </div>
                )}

                {/* LOAD MORE */}
                {(nextPageToken || visibleCount < allVideos.length) && !loading && (
                    <div className="flex justify-center mt-16 mb-10">
                        <button 
                            onClick={() => loadVideos(nextPageToken || "", true)} 
                            disabled={loadingMore} 
                            className="px-10 py-3.5 rounded-full border-2 border-[#E07E6C]/20 text-[#E8751A] font-bold hover:bg-[#FFF5F2] hover:border-[#E8A020] transition-all flex items-center gap-2 disabled:opacity-50"
                        >
                            {loadingMore ? <><Loader2 className="animate-spin" size={20} /> Loading...</> : "Load More"}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}