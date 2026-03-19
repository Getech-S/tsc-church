"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { getYoutubeVideos } from "@/app/actions/getYoutubeVideos"; // Adjust path to your server action file

export function MoreSermons() {
  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    async function fetchVideos() {
      // Fetching the latest 3 videos using your existing logic
      const data = await getYoutubeVideos("", "", "All", "");
      if (data.videos) {
        setVideos(data.videos.slice(0, 3));
      }
    }
    fetchVideos();
  }, []);

  return (
    <section className="bg-[#ffffff] py-20 px-6 md:px-12">
      <div className="max-w-[1240px] mx-auto">
        
        {/* Header Section */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-white text-[28px] font-bold font-montserrat">
            More Live Services
          </h2>
          <Link href="/sermons">
            <button className="border border-[#E8751A] text-[#E8751A] hover:bg-[#E8751A] hover:text-white px-6 py-2 rounded-full text-[14px] font-bold transition-all flex items-center gap-2 group cursor-pointer">
              View All Live Services 
              <span className="transition-transform group-hover:translate-x-1">›</span>
            </button>
          </Link>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <Link key={video.id} href={`/worship-online?v=${video.id}`} className="group">
              <div className="flex flex-col gap-4">
                
                {/* Thumbnail Container: 16px Radius per Figma */}
                <div className="relative aspect-video rounded-[16px] overflow-hidden shadow-lg">
                  <Image 
                    src={video.thumbnail} 
                    alt={video.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />

                  {/* Custom "Watch Sermon" Button - Exact Figma Design */}
                  <div className="absolute bottom-6 left-6 flex items-center gap-3">
                    <div className="w-[50px] h-[50px] bg-[#E8A020] rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                      <svg width="16" height="18" viewBox="0 0 16 18" fill="currentColor">
                        <path d="M14.5 7.13397C15.8333 7.90377 15.8333 9.82828 14.5 10.5981L3.25 17.0933C1.91667 17.8631 0.25 16.9008 0.25 15.3603L0.25 2.37172C0.25 0.83112 1.91667 -0.131131 3.25 0.638669L14.5 7.13397Z" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white text-[12px] font-bold leading-tight border-l border-white/30 pl-3 uppercase tracking-wider">
                        Watch <br /> Sermon
                      </span>
                    </div>
                  </div>
                </div>

                {/* Video Title: Montserrat 18px */}
                <h3 className="text-black text-[18px] font-bold font-montserrat line-clamp-2 leading-snug group-hover:text-[#E8A020] transition-colors">
                  {video.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}