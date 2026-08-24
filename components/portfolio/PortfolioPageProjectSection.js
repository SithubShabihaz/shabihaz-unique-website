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
      title: "Education Website",
      subTitle: "Delivering Pro Courses",
      clientOrigin: "UK",
      mockupUrl: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Portfolio-Page-Image/EducationalPortfolio.webp`,
    },
    {
      title: "Furniture E-Commerce Website",
      subTitle: "Furniture E-Commerce Store",
      clientOrigin: "Saudi Arab",
      mockupUrl: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Portfolio-Page-Image/FurniturePortfolio.webp`,
    },
    {
      title: "GYM Website",
      subTitle: "Transform your body with GYM.",
      clientOrigin: "Pakistan",
      mockupUrl: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Portfolio-Page-Image/GYMPortfolio.webp`,
    },
    {
      title: "Realtor Website",
      subTitle: "Find your home.",
      clientOrigin: "Pakistan",
      mockupUrl: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Portfolio-Page-Image/RealtorPortfolio.webp`,
    },
    {
      title: "Flowers Ecommerce Website",
      subTitle: "Order fresh flowers.",
      clientOrigin: "Saudi Arab",
      mockupUrl: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Portfolio-Page-Image/FlowerPortfolio.webp`,
    },
    {
      title: "Snacks Ecommerce Website",
      subTitle: "Shop healthy snacks.",
      clientOrigin: "Pakistan",
      mockupUrl: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Portfolio-Page-Image/SnacksPortfolio.webp`,
    }
  ];

  return (
    <section id="portfolio-projects" className="relative w-full bg-black py-16 md:pt-28 px-0 flex flex-col items-center overflow-hidden font-poppins">
      
      {/* Background Ambience Layers matching global themes */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#ffff39]/5 blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Strict Width Sync Grid Framework */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 z-10 flex flex-col items-center">
        
        {/* --- Header Segment --- */}
        <div className="text-center mb-16 max-w-2xl mx-auto space-y-4">
          <span className="text-[11px] font-mono tracking-widest text-[#ffff39] uppercase font-bold">
            Case Studies
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight font-rajdhani">
            Our Proven Showcase
          </h2>
          <p className="text-sm md:text-base text-white font-light">
            Explore live production platforms and cross-platform automation configurations crafted for enterprise networks.
          </p>
        </div>

        {/* ================= PORTFOLIO SCREEN 3-COLUMN MESH GRID ================= */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch justify-items-center">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="group/card w-full rounded-2xl bg-neutral-900/40 border border-white/[0.06] p-4 flex flex-col justify-between shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative transition-all duration-300 hover:border-white/15"
            >
              
              {/* 1. TOP CLIENT ORIGIN CHIP BADGE */}
              <div className="w-full bg-white/5 border border-white/[0.08] backdrop-blur-md rounded-xl py-2 px-4 mb-4 flex items-center justify-center gap-2">
                <Globe className="w-3.5 h-3.5 text-white group-hover/card:text-[#ffff39] transition-colors" />
                <span className="text-xs font-medium text-white tracking-wide">
                  Client Origin : <span className="text-white font-bold">{project.clientOrigin}</span>
                </span>
              </div>

              {/* 2. THE LIVE SCROLLING DISPLAY VIEWPORT CONTAINER */}
              <div className="w-full aspect-[4/5] rounded-xl relative overflow-hidden bg-neutral-950 border border-black/40 group-hover/card:shadow-[0_0_30px_rgba(255,255,57,0.03)] transition-all">
                
                {/* Long Form Landing Page Screenshot Layer - Smoothly translates downward on hover */}
                <div className="w-full h-full relative transition-transform duration-[4000ms] ease-in-out transform group-hover/card:-translate-y-[60%]">
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
