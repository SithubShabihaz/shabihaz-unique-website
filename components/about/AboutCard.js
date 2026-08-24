'use client';

import React from 'react';
import Link from 'next/link'; // Next.js standard pre-fetching routing component
import { ArrowUpRight } from 'lucide-react';

export default function VisionCTASection() {
  return (
    /* Outermost wrapper matching global section grid structures */
    <section className="relative w-full bg-black py-12 md:pt-30 px-0 flex justify-center overflow-hidden font-poppins">
      
      {/* Background Subtle Cyber Glows */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 rounded-full bg-[#ffff39]/5 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      {/* Strict Width Sync Grid - Handles perfect left & right margins across all zoom states */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 z-10">
        
        {/* ================= THE TRANSPARENT BOX CONTAINER ================= */}
        <div className="relative w-full py-16 md:py-20 px-6 sm:px-12 rounded-[36px] bg-white/[0.01] backdrop-blur-md border shadow-[0_25px_60px_rgba(0,0,0,0.8)] flex flex-col items-center text-center space-y-6 overflow-hidden group border-[#ffff39]/20 transition-colors duration-300">
          
          {/* Micro structural grid line effect inside the transparent card */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
          
          {/* Headline Typography */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-rajdhani max-w-3xl leading-[1.15]">
            Let’s Bring Your Vision <br />
            To <span className="text-[#ffff39]">Life</span>
          </h2>

          {/* Subtitle Descriptive Text */}
          <p className="text-sm md:text-base text-white font-light leading-relaxed max-w-2xl opacity-90">
            Ready to collaborate? Let’s create something extraordinary together with our expertise and passion for success.
          </p>

          {/* ================= THE CALL TO ACTION BUTTON WITH LINK ================= */}
          {/* FIX: Button element ko Next.js <Link> wrapper se close kiya hai safe client routing ke liye */}
          <div className="pt-4">
            <Link 
              href="/contact" // Aap apne actual routing endpoint (e.g., #contact ya /contact-us) ke sath ise badal sakti hain
              className="relative group/btn inline-flex items-center gap-2 bg-white text-black font-bold text-sm px-8 py-4 rounded-full shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:bg-[#ffff39] hover:shadow-[0_4px_25px_rgba(255,255,57,0.3)] transition-all duration-300 transform active:scale-95 cursor-pointer select-none"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}