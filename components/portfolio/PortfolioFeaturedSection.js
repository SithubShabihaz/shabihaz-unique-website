'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Sparkles, MonitorUp } from 'lucide-react';

export default function FeaturedProjectShowcase() {
  return (
    <section className="relative w-full bg-black py-16 md:pt-28 px-0 flex flex-col items-center overflow-hidden font-poppins">
      
      {/* ================= BACKGROUND ENVIRONMENT BALANCES ================= */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#ffff39]/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-purple-600/5 blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Strict Width Sync Grid Framework */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 z-10 flex flex-col items-center">
        
        {/* ================= 1. SECTION INTRO LABELS ================= */}
        <div className="text-center mb-16 max-w-xl mx-auto space-y-4">
          <span className="text-[11px] font-mono tracking-widest text-[#ffff39] uppercase font-bold">
            Spotlight
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight font-rajdhani">
            Featured Project
          </h2>
          <p className="text-sm text-white font-light leading-relaxed">
            Our most impactful work that showcases our capabilities in engineering end-to-end full-stack digital architectures.
          </p>
        </div>

        {/* ================= 2. THE MASTER SPLIT BUNDLE BOX ================= */}
        {/* Replicating the exact side-by-side card system from image {7DB5A548-BCFB-4756-BA1E-99CA77AB5543}.jpg */}
        <div className="w-full rounded-3xl bg-[#090909] border border-white/20 p-6 sm:p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center shadow-[0_30px_70px_rgba(0,0,0,0.9)] transition-all hover:border-white/10 group">
          
          {/* LEFT COLUMN HANDLER: VISUAL ASSET LAYERS */}
          <div className="lg:col-span-6 w-full relative flex items-center justify-center">
            
            {/* Main Visual Card Mockup Screen Frame */}
            <div className="w-full relative aspect-[4/3] sm:aspect-[16/11] bg-neutral-950 border border-white/[0.05] rounded-2xl overflow-hidden shadow-2xl">
              
              {/* Dynamic Next.js Asset Rendering Layer */}
              <Image 
                src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/Portfolio-Page-Image/PortfolioPageFeaturedMockup.webp`} // <-- Change to your actual dashboard or ecommerce asset screen image path
                alt="Featured Image"
                fill
                sizes="(max-w-7xl) 50vw"
                unoptimized={true}
                className="brightness-[0.96] contrast-[1.02] group-hover:scale-[1.01] transition-transform duration-700"
                priority
              />

              {/* Floating Absolute "Featured" Pill Badge Overlaid on the Left */}
              <div className="absolute top-4 left-4 bg-[#ffff39] text-black font-black text-[10px] tracking-wider uppercase font-mono px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                <Sparkles className="w-3 h-3 fill-current" />
                <span>Featured</span>
              </div>

              {/* Lower Subtle Gloss Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-1/5 bg-gradient-to-t from-black to-transparent pointer-events-none opacity-50" />
            </div>

          </div>

          {/* RIGHT COLUMN HANDLER: CORE CREDENTIAL SPECS */}
          <div className="lg:col-span-6 w-full text-left space-y-6 lg:pl-4">
            
            {/* Small Upper Status Identifier tag */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono tracking-wider font-bold text-[#ffff39] uppercase">
                Featured Project
              </span>
              <h3 className="text-3xl sm:text-3xl font-black text-white tracking-tight font-rajdhani leading-tight">
                Full-Stack React JS E-Commerce Website with Admin Dashboard
              </h3>
            </div>

            {/* Description Paragraph Statement */}
            <p className="text-sm md:text-base text-white font-light leading-relaxed opacity-95">
              A fully custom, high-performance e-commerce platform built with React JS. This application delivers a seamless shopping experience with dynamic product pages, smooth navigation, and a secure checkout process. It includes a dedicated Seller Dashboard (Admin Panel) that empowers store owners to easily add new products, manage inventory, and oversee store operations in real-time. Built for speed, scalability, and an optimized user experience.
            </p>

            {/* CTA Interaction Trigger Button Link Container */}
            <div className="pt-2">
              <Link 
                href="/contact"
                className="group/btn inline-flex items-center gap-2 bg-white text-black font-black text-sm px-8 py-4 rounded-full shadow-[0_4px_25px_rgba(255,255,255,0.15)] hover:bg-[#ffff39] hover:shadow-[0_4px_25px_rgba(255,255,57,0.3)] transition-all duration-300 transform active:scale-95 cursor-pointer"
              >
                <span>Discuss Your Project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
