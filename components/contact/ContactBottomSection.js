'use client';

import React from 'react';
import Link from 'next/link';
import { HelpCircle, ArrowRight, Calendar } from 'lucide-react';

export default function ContactCTAAssessment() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 font-poppins">
      
      {/* ================= CORE BANNER CONTAINER ================= */}
      {/* Captures the premium, deep vibrant purple gradient aura from image {8DCF6F00-0AC0-4D2F-AC4A-BE2AEBD20A77}.jpg */}
      <div className="relative w-full rounded-[2.5rem] bg-black border border-[#ffff39]/25 overflow-hidden px-6 py-16 md:py-20 text-center shadow-[0_30px_60px_rgba(79,70,229,0.15)] group">
        
        {/* Subtle Cybernetic Structural Overlays */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/10 rounded-full blur-2xl pointer-events-none" />

        {/* Content Stack Framework */}
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center space-y-6">

          {/* Master Section Headline Text */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-none font-rajdhani">
            Not sure where to <span className="text-5xl text-[#ffff39]">
                start?
              </span>
          </h2>

          {/* Contextual Paragraph mapped specifically for your automated consultation pipeline */}
          <p className="text-sm md:text-base text-white font-light max-w-2xl mx-auto leading-relaxed opacity-90">
            Book a free discovery call with our team. We'll analyze your current architecture, identify intelligent automation opportunities, and map out a clear development roadmap for your brand.
          </p>

          {/* ================= BUTTON ACTION INTERFACE ================= */}
          {/* Matches the layout, color pop, and geometry structure from image {8DCF6F00-0AC0-4D2F-AC4A-BE2AEBD20A77}.jpg */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            
            {/* Primary Sharp Action Button: Orange Tone */}
            <Link 
              href="/contact#calendly-section" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#ffff39] text-black font-black text-xs uppercase tracking-wider px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform active:scale-[0.98] group/btn1"
            >
              <span>Book Discovery Call</span>
              <Calendar className="w-4 h-4 transition-transform duration-300 group-hover/btn1:translate-x-0.5" />
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
}