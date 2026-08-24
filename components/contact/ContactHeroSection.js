'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Cpu, CloudCog } from 'lucide-react';
import { FiCloudDrizzle, FiTrendingUp } from 'react-icons/fi';

export default function ContactHeroAdvanced() {
  return (
    <section className="relative w-full bg-black py-16 pt-32 px-0 flex items-center overflow-hidden font-poppins">
      
      {/* ================= BACKGROUND CYBER MATRIX INFRASTRUCTURE ================= */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[#ffff39]/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-600/5 blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* STRICT GLOBAL ALIGNMENT BOUNDS - Perfectly lines up with all other sections left/right margins */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 z-10 grid grid-cols-1 lg:grid-cols-12 gap-28.5 items-center">
        
        {/* ================= LEFT COLUMN: HERO INTRO & METRICS ================= */}
        <div className="lg:col-span-6 text-left space-y-8">
          
          {/* Functional System Status Badge */}
          <div className="inline-flex items-center gap-2 bg-neutral-900 border border-white/[0.06] rounded-full px-4 py-1.5 w-fit shadow-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffff39] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ffff39]"></span>
            </span>
            <span className="text-[10px] font-mono tracking-widest text-white uppercase font-bold">
              START YOUR JOURNEY
            </span>
          </div>

          {/* Master Structural Headline Text */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-normal font-rajdhani leading-13">
              Let's Build Something <br />
              <span className="text-[#ffff39] drop-shadow-[0_0_30px_rgba(255,255,57,0.1)]">Exceptional Together.</span>
            </h1>
            <p className="text-sm md:text-base text-white font-light leading-relaxed max-w-xl opacity-95">
              Whether you need to deploy a complex application architecture or configure a scalable n8n automation pipeline, we are ready to collaborate. Let's partner up to engineer premium digital experiences built upon a highly secure custom development framework designed specifically for your business goals.
            </p>
          </div>

          {/* Core Technical Highlights Matrix */}
          <div className="grid grid-cols-2 gap-6 pt-6 max-w-md border-t border-white/[0.05]">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-[#ffff39]">
                <CloudCog className="w-4 h-4" />
                <span className="font-rajdhani text-sm font-black uppercase tracking-wider text-white">WEB & CLOUD SYSTEMS</span>
              </div>
              <p className="text-xs text-white font-light leading-snug">Delivering scalable full-stack applications, premium WordPress/Shopify builds, and secure cloud architectures.</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-[#ffff39]">
                <FiTrendingUp className="w-4 h-4" />
                <span className="font-rajdhani text-sm font-black uppercase tracking-wider text-white">AI & DIGITAL GROWTH</span>
              </div>
              <p className="text-xs text-white font-light leading-snug">Streamlining operations via n8n automation and scaling revenue through targeted SEO and Meta Ads.</p>
            </div>
          </div>

        </div>

        {/* ================= RIGHT COLUMN: ALIGNED PURE IMAGE ================= */}
        {/* FIX: Aligned to 'justify-start lg:pl-8' to snap directly to the internal layout bounding vectors */}
        <div className="lg:col-span-6 w-full flex justify-center lg:justify-start relative">
          <div className="w-full max-w-xl relative aspect-[4/3]">
            <Image 
              src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/Contact-Page-Images/ContactUsPageMobileMockup.webp`}
              alt="System Integration Layout Blueprint Showcase"
              fill
              sizes="(max-w-7xl) 50vw"
              unoptimized={true}
              className="object-contain brightness-[0.98] contrast-[1.01]"
              priority
            />
          </div>
        </div>

      </div>

    </section>
  );
}
