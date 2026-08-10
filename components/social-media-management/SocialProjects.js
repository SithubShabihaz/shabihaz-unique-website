'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Globe, Layers, Compass, Maximize2, X } from 'lucide-react';

export default function PortfolioShowcaseGrid() {
  // Modal visibility aur active image track karne ke liye state
  const [activeImage, setActiveImage] = useState(null);
  const [activeTitle, setActiveTitle] = useState('');

  // Real layout mapping synchronized with your precise asset architecture
  const projects = [
    {
      title: "Studio Archis Campaign",
      subTitle: "Premium Architecture Strategy: Bespoke 7-day content calendars and swipe files highlighting high-end architectural masterpieces.",
      clientOrigin: "UK",
      mockupUrl: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Social-Media-Images/Architecture%20portfolio%20view%20design.webp`,
    },
    {
      title: "FiberPrime Campaign",
      subTitle: "Omnichannel E-Commerce Grid: High-converting multi-platform visual layouts built to maximize home service sales.",
      clientOrigin: "Saudi Arab",
      mockupUrl: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Social-Media-Images/FIBERPRIME%20BRAND%20IDENTITY%20%26%20SOCIAL%20CAMPAIGN%20(1).webp`,
    },
    {
      title: "Microbiology Campaign",
      subTitle: "Health Tech Education: Informative carousel sequences crafted to boost audience awareness in health sciences.",
      clientOrigin: "Pakistan",
      mockupUrl: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Social-Media-Images/MICROBIOLOGY%20posts%20in%20portfolio%20view%20for%20site.webp`,
    },
    {
      title: "ScaleCFO Campaign",
      subTitle: "B2B SaaS Growth: Strategic carousels designed to capture corporate executive leads efficiently.",
      clientOrigin: "Pakistan",
      mockupUrl: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Social-Media-Images/SCALECFO%20B2B%20FINANCIAL%20CAMPAIGN.webp`,
    },
    {
      title: "LumiAesthetics Campaign",
      subTitle: "D2C Retail Scaling: Engaging video reels and social proof tactics maximizing consumer sales.",
      clientOrigin: "Saudi Arab",
      mockupUrl: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Social-Media-Images/SKINCARE%20CLINIC.webp`,
    },
    {
      title: "Aethel Wealth Campaign",
      subTitle: "Elite Client Acquisition: Premium visual grids engineered to attract wealthy investors and build trust.",
      clientOrigin: "Pakistan",
      mockupUrl: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Social-Media-Images/wealth%20management%20posts%20in%20portfolio%20view%20for%20site.webp`,
    }
  ];

  return (
    <section id="social-projects" className="relative w-full bg-black py-16 md:pt-29 px-0 flex flex-col items-center overflow-hidden font-poppins">
      
      {/* Background Ambience Layers matching global themes */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#ffff39]/5 blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Strict Width Sync Grid Framework */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 z-10 flex flex-col items-center">
        
        {/* --- Header Segment --- */}
        <div className="text-center mb-16 max-w-2xl mx-auto space-y-4">
          <span className="text-[11px] font-mono tracking-widest text-[#ffff39] uppercase font-bold">
            MULTI-INDUSTRY IMPACT
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight font-rajdhani">
            Explore Winning Social Media Content <span className="text-[#ffff39]">Strategy Examples</span>.
          </h2>
        </div>

        {/* ================= PORTFOLIO SCREEN 3-COLUMN MESH GRID ================= */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch justify-items-center">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="group/card w-full rounded-2xl bg-neutral-900/40 border border-white/20 p-4 flex flex-col justify-between shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative transition-all duration-300 hover:border-white/15"
            >

              {/* 2. THE LIVE SCROLLING DISPLAY VIEWPORT CONTAINER */}
              {/* FIX: Removed aspect-[4/5] and added h-[250px] sm:h-[280px] to reduce the height */}
              <div className="w-full h-[250px] sm:h-[280px] rounded-xl relative overflow-hidden bg-neutral-950 border border-black/40 group-hover/card:shadow-[0_0_30px_rgba(255,255,57,0.03)] transition-all">
                
                {/* Long Form Landing Page Screenshot Layer - Smoothly translates downward on hover */}
                {/* FIX: Increased translation from 60% to 75% since the container is now shorter */}
                <div className="w-full h-full relative transition-transform duration-[4000ms] ease-in-out transform group-hover/card:-translate-y-[75%]">
                  <Image 
                    src={project.mockupUrl}
                    alt={project.title}
                    width={500}
                    unoptimized={true}
                    height={1200}
                    className="w-full h-auto object-top transition-all duration-300 group-hover/card:scale-[1.02] brightness-[0.95]"
                  />
                </div>

                {/* 3. ABSOLUTE INTERACTIVE HOVER OVERLAY (FADES IN UPON POINTER CAPTURE) */}
                <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                  <button 
                    onClick={() => {
                      setActiveImage(project.mockupUrl);
                      setActiveTitle(project.title);
                    }}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-black/80 border border-[#ffff39]/40 text-[#ffff39] hover:bg-[#ffff39] hover:text-black text-xs font-bold uppercase tracking-widest shadow-2xl transition-all duration-300 transform scale-90 group-hover/card:scale-100 font-rajdhani cursor-pointer"
                  >
                    <span>View Full Screen</span>
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Lower Gradient Shadow Overlay Mask for Depth */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black to-transparent pointer-events-none z-10 opacity-70" />
              </div>

              {/* 4. BOTTOM CREDENTIAL METRICS CONTAINER ROW */}
              <div className="w-full mt-4 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] text-left space-y-1 group-hover/card:bg-[#ffff39]/5 group-hover/card:border-[#ffff39]/10 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-black text-white uppercase tracking-wider font-rajdhani group-hover/card:text-[#ffff39] transition-colors">
                    {project.title}
                  </h3>
                  <Compass className="w-3.5 h-3.5 text-white opacity-40 group-hover/card:opacity-100 group-hover/card:animate-spin" style={{ animationDuration: '6s' }} />
                </div>
                <p className="text-xs text-white font-light leading-snug">
                  {project.subTitle}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* ================= FULLSCREEN LIGHTBOX MODAL OVERLAY ================= */}
      {activeImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-6 md:p-10 animate-fadeIn">
          
          {/* Top Header Bar Inside Modal */}
          <div className="w-full max-w-6xl flex items-center justify-between mb-4 px-2">
            <h3 className="text-lg sm:text-xl font-rajdhani font-bold text-[#ffff39] tracking-wider uppercase">
              {activeTitle} — Full Preview
            </h3>
            
            {/* Close Button */}
            <button 
              onClick={() => setActiveImage(null)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white hover:bg-[#ffff39] hover:text-black hover:border-[#ffff39] transition-all duration-200 cursor-pointer font-rajdhani font-bold text-xs uppercase"
            >
              <span>Close</span>
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Scrollable Image Container inside Modal */}
          <div className="w-full max-w-6xl max-h-[80vh] overflow-y-auto rounded-2xl bg-neutral-950 border border-white/10 p-4 sm:p-8 shadow-2xl relative custom-scrollbar">
            <Image 
              src={activeImage}
              alt="Fullscreen Project Preview"
              width={1200}
              height={3000}
              unoptimized={true}
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>

        </div>
      )}

    </section>
  );
}