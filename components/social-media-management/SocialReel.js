'use client';

import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import Image from 'next/image';

// --- SUB-COMPONENT: Zoom-Resilient Responsive Mockup Card with Image & Play Button ---
const MobileMockupCard = ({ data, onPlay }) => {
  return (
    <div className="w-full flex flex-col items-start group">
      
      {/* Outer Card Wrapper (Shadow Removed) */}
      <div className="w-full relative bg-neutral-900/40 border border-white/15 rounded-3xl p-6 sm:p-8 overflow-hidden flex flex-col items-center justify-start aspect-[4/3] group-hover:border-white/30 transition-all duration-300">
        
        {/* CSS-Built iPhone Mockup */}
        <div className="relative w-[160px] sm:w-[190px] h-[380px] sm:h-[420px] bg-neutral-950 rounded-t-[42px] border-[4px] border-b-0 border-neutral-700 shadow-2xl overflow-hidden flex flex-col items-center translate-y-6 sm:translate-y-8 shrink-0">
          
          {/* iPhone Notch / Dynamic Island */}
          <div className="absolute top-3 w-20 h-5 bg-black rounded-full z-30 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-neutral-900 mr-2" />
            <div className="w-2 h-2 rounded-full bg-neutral-900/80" />
          </div>

          {/* Screen Content / Thumbnail Image & Play Overlay */}
          <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center overflow-hidden">
            
            {/* Background Thumbnail Image */}
            <Image 
              src={data.thumbnailUrl} 
              alt={data.hook}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Dark Gradient Overlay for better contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-20 -translate-y-4">
              <button
                onClick={() => onPlay(data)}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300 cursor-pointer"
                title="Play Video"
              >
                <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-white ml-0.5" />
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Title (Pure White) and Description Below Card */}
      <div className="mt-4 text-left w-full px-1 space-y-1">
        <h3 className="text-sm font-black text-white uppercase tracking-wider font-rajdhani">
          {data.hook}
        </h3>
        <p className="text-xs sm:text-sm text-white/80 font-light leading-snug tracking-wide">
          {data.framework}
        </p>
      </div>

    </div>
  );
};


// --- MAIN COMPONENT ---
export default function ShortsFrameworksSection() {
  
  const [activeVideo, setActiveVideo] = useState(null);

  const frameworksData = [
    {
      id: 1,
      hook: "Cinematic Architecture Reels",
      framework: "Immersive vertical video showcases capturing high-end design aesthetics to secure premium inquiries.",
      videoUrl: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Social-Media-Images/ArchitectureVideo.webm`,
      thumbnailUrl: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Social-Media-Images/ArchitectureThumb.webp`
    },
    {
      id: 2,
      hook: "Medical Science Reels",
      framework: "Engaging short-form video hooks simplifying complex biological concepts to maximize viewer retention.",
      videoUrl: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Social-Media-Images/MicrobiologyVideo.webm`,
      thumbnailUrl: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Social-Media-Images/MicrobiologyThumb.webp`
    },
    {
      id: 3,
      hook: "Financial Authority Shorts",
      framework: "High-production vertical videos establishing market expertise and driving elite investor lead generation.",
      videoUrl: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Social-Media-Images/WealthVideo.webm`,
      thumbnailUrl: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Social-Media-Images/WealthThumb.webp`
    }
  ];

  return (
    <section className="relative w-full bg-[#090A0F] pt-16 md:pt-29 font-poppins flex flex-col items-center overflow-hidden">
      
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Top Glowing Kicker Badge */}
        <div className="inline-flex items-center justify-center px-5 py-1.5 rounded-full border border-[#c2cf4f] bg-transparent mb-6 shadow-[0_0_20px_rgba(194,207,79,0.15)] relative">
          <div className="absolute inset-0 rounded-full bg-[#c2cf4f]/5 blur-sm" />
          <span className="relative text-[11px] font-bold tracking-widest text-white uppercase">
            HIGH-RETENTION MEDIA
          </span>
        </div>

        {/* Main Section Heading */}
        <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight text-center mb-12 lg:mb-16">
          Watch Proven Video Strategies From Our <br /> <span className="text-[#ffff39]">SMM Portfolio Examples</span>.
        </h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {frameworksData.map((item) => (
            <MobileMockupCard 
              key={item.id} 
              data={item} 
              onPlay={(vidData) => setActiveVideo(vidData)} 
            />
          ))}
        </div>

      </div>

      {/* ================= FULLSCREEN VIDEO PLAYER MODAL ================= */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center p-4 animate-fadeIn">
          
          {/* Close Button Header */}
          <div className="absolute top-6 right-6 z-50">
            <button 
              onClick={() => setActiveVideo(null)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white hover:bg-[#ffff39] hover:text-black hover:border-[#ffff39] transition-all duration-200 cursor-pointer font-rajdhani font-bold text-sm uppercase shadow-2xl"
            >
              <span>Close</span>
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* More Compact & Neat Phone Frame Player */}
          <div className="relative w-[210px] sm:w-[230px] h-[420px] sm:h-[460px] bg-neutral-950 rounded-[35px] border-[4px] border-neutral-700 shadow-[0_0_80px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col items-center justify-center shrink-0">
            
            {/* Dynamic Island in Fullscreen */}
            <div className="absolute top-2.5 w-16 h-3.5 bg-black rounded-full z-30 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mr-1" />
              <div className="w-1 h-1 rounded-full bg-neutral-900/80" />
            </div>

            {/* Actual HTML5 Video Element */}
            <video 
              src={activeVideo.videoUrl} 
              controls 
              autoPlay 
              className="w-full h-full object-cover"
            />

            {/* Home Indicator */}
            <div className="absolute bottom-2 w-24 h-1 bg-white/40 rounded-full z-30" />
          </div>

          {/* Video Title Details at Bottom */}
          <div className="mt-4 text-center text-white shrink-0 max-w-md px-4">
            <h3 className="text-base font-black font-rajdhani uppercase tracking-wider text-[#ffff39]">
              {activeVideo.hook}
            </h3>
            <p className="text-xs text-white/70 mt-1">
              {activeVideo.framework}
            </p>
          </div>

        </div>
      )}

    </section>
  );
}
