"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getYoutubeVideos } from "@/app/actions/getYoutubeVideos";

export function MoreSermons() {
  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    async function fetchVideos() {
      const data = await getYoutubeVideos("", "", "All", "");
      if (data.videos) {
        setVideos(data.videos.slice(0, 3));
      }
    }
    fetchVideos();
  }, []);

  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-12">

        {/* HEADER */}
        <div className="flex items-center justify-between">
          <h2 className="text-gray-900 text-[22px] sm:text-[28px] md:text-[32px] font-bold leading-tight">
            More Sermons
          </h2>

          {/* Desktop button — right of header */}
          <Link
            href="/sermons"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-[#E8751A] px-5 py-2 text-[14px] font-semibold text-[#E8751A] transition-all duration-300 hover:bg-[#E8751A] hover:text-white shrink-0"
          >
            View All Sermons
          </Link>
        </div>

        {/* VIDEO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/worship-online?v=${video.id}`} className="group flex flex-col gap-4">

                {/* THUMBNAIL */}
                <div className="relative aspect-video rounded-[16px] overflow-hidden shadow-lg">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Play Button */}
                  <div className="absolute bottom-6 left-6 flex items-center gap-3">
                    <div className="w-[50px] h-[50px] bg-[#E8A020] rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <svg width="16" height="18" viewBox="0 0 16 18" fill="white">
                        <path d="M14.5 7.13397C15.8333 7.90377 15.8333 9.82828 14.5 10.5981L3.25 17.0933C1.91667 17.8631 0.25 16.9008 0.25 15.3603L0.25 2.37172C0.25 0.83112 1.91667 -0.131131 3.25 0.638669L14.5 7.13397Z" />
                      </svg>
                    </div>
                    <span className="text-white text-[13px] font-bold leading-tight border-l border-white/30 pl-3 uppercase tracking-wider">
                      Watch <br /> Sermon
                    </span>
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="text-black text-[15px] sm:text-[16px] md:text-[18px] font-bold line-clamp-2 leading-snug group-hover:text-[#E8A020] transition-colors duration-300">
                  {video.title}
                </h3>

              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile button — full width, solid bg */}
        <Link
          href="/sermons"
          className="md:hidden w-full flex items-center justify-center rounded-full bg-[#E8751A] hover:bg-[#E8A020] px-6 py-3 text-[14px] font-bold text-white transition-colors duration-300"
        >
          View All Sermons
        </Link>

      </div>
    </section>
  );
}