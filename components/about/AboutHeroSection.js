'use client';

import React from 'react';
import Image from 'next/image';
import { 
  Terminal, 
  Headset, 
  CodeXml,
  Rocket,
  GitMerge,
  Workflow
} from 'lucide-react';

export default function TechMockupLayout() {
  return (
    /* Outermost wrapper - Sync edges with global margins */
    <section className="relative w-full bg-black py-15 md:py-28 px-0 flex flex-col items-center overflow-hidden font-poppins">
      
      {/* Background Ambient Aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#ffff39]/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      {/* Strict Global Width Container - Perfect parallel matching for zoom states */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center z-10 space-y-16">
        
        {/* ================= TOP CENTERED HEADER CONTENT ================= */}
        <div className="text-center space-y-4 max-w-3xl mx-auto flex flex-col items-center">
          <span className="text-xs font-bold tracking-[0.25em] mt-12 text-[#ffff39] uppercase font-rajdhani block">
            BEHIND THE SCREENS
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.1] font-rajdhani">
            Redefining How <span className="text-[#ffff39]">Brands</span> Operate
          </h1>
          <p className="text-sm md:text-base text-white font-light leading-relaxed max-w-2xl">
            Every great application starts with a deep understanding of the problem. We merge creative user experiences with ruthless technical efficiency to build platforms designed to outpace the competition.
          </p>
        </div>

        {/* ================= BOTTOM CONTENT: MASSIVE MOCKUP & SIDE CARDS GRID ================= */}
        {/* Total columns are 12. 3 (Left Cards) + 6 (Enormous Image) + 3 (Right Cards) = 12 columns */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* ================= LEFT SIDE: 2 FEATURE CARDS (3 Columns) ================= */}
          <div className="lg:col-span-3 grid grid-cols-1 gap-6 order-2 lg:order-1">
            {/* Feature 1: Fast Delivery */}
            <div className="group flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-[#ffff39]/20 hover:bg-white/[0.04] transition-all duration-300">
              <div className="p-3 h-11 w-11 rounded-xl bg-[#ffff39]/10 border border-[#ffff39]/20 text-[#ffff39] flex items-center justify-center shrink-0">
                <Rocket className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-[#ffff39] uppercase tracking-wider group-hover:text-[#ffff39] transition-colors">
                  Fast Delivery
                </h3>
                <p className="text-xs text-white leading-relaxed">
                  Deploying ultra-speed web systems and automated loops seamlessly.
                </p>
              </div>
            </div>

            {/* Feature 2: Automated Workflows */}
            <div className="group flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-[#ffff39]/20 hover:bg-white/[0.04] transition-all duration-300">
              <div className="p-3 h-11 w-11 rounded-xl bg-[#ffff39]/10 border border-[#ffff39]/20 text-[#ffff39] flex items-center justify-center shrink-0">
                <Workflow className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-[#ffff39] uppercase tracking-wider group-hover:text-[#ffff39] transition-colors">
                  Smart Workflows
                </h3>
                <p className="text-xs text-white leading-relaxed">
                  Integrating multi-platform nodes using n8n for zero-error automation.
                </p>
              </div>
            </div>
          </div>

          {/* ================= CENTER: MASSIVE EXPANDED MOCKUP (6 Columns) ================= */}
          {/* Scaled from col-span-4 to col-span-6 to allow the image to take absolute maximum panel canvas */}
          <div className="lg:col-span-6 flex justify-center items-center relative py-4 lg:py-0 order-1 lg:order-2">
            <div className="relative w-full h-auto flex items-center justify-center transition-transform duration-300 hover:scale-[1.01]">
              <Image 
                src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/About-Page-Images/AboutPageMobileMockup.webp`}
                alt="About Page Mobile Mockup"
                width={1200} // Increased base resolution scale for clear rendering at big sizes
                height={850}
                unoptimized={true}
                className="w-full h-auto object-contain drop-shadow-[0_40px_70px_rgba(0,0,0,0.95)]"
                priority
              />
            </div>
          </div>

          {/* ================= RIGHT SIDE: 2 FEATURE CARDS (3 Columns) ================= */}
          <div className="lg:col-span-3 grid grid-cols-1 gap-6 order-3">
            {/* Feature 3: 24/7 Support */}
            <div className="group flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-[#ffff39]/20 hover:bg-white/[0.04] transition-all duration-300">
              <div className="p-3 h-11 w-11 rounded-xl bg-[#ffff39]/10 border border-[#ffff39]/20 text-[#ffff39] flex items-center justify-center shrink-0">
                <Headset className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-[#ffff39] uppercase tracking-wider group-hover:text-[#ffff39] transition-colors">
                  24/7 Support
                </h3>
                <p className="text-xs text-white leading-relaxed">
                  Constant surveillance to secure infrastructure operations around the clock.
                </p>
              </div>
            </div>

            {/* Feature 4: Clean Code */}
            <div className="group flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-[#ffff39]/20 hover:bg-white/[0.04] transition-all duration-300">
              <div className="p-3 h-11 w-11 rounded-xl bg-[#ffff39]/10 border border-[#ffff39]/20 text-[#ffff39] flex items-center justify-center shrink-0">
                <CodeXml className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-[#ffff39] uppercase tracking-wider group-hover:text-[#ffff39] transition-colors">
                  Clean Code
                </h3>
                <p className="text-xs text-white leading-relaxed">
                  Writing highly modular full-stack structures optimized for rapid server performance.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
