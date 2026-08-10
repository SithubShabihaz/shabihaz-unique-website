'use client';

import React from 'react';
import { MessageSquare, Quote, Star } from 'lucide-react';

export default function AsymmetricTestimonialSection() {
  const reviews = [
    {
      name: "Jessica Taylor",
      role: "CEO, Luxe Fashion",
      feedback: "Shabihaz transformed our online presence with a stunning e-commerce platform. Our sales have increased by 150% since launch.",
      color: "border-[#ffff39] text-black bg-[#ffff39]",
      borderRadius: "rounded-[40px_16px_40px_16px]" // Distinct asymmetric card paths
    },
    {
      name: "David Kim",
      role: "Head of Product, TechCorp",
      feedback: "Working with Shabihaz has been a game-changer for our business. Their expertise in custom web development and AI automation truly brought our vision to life, and the results have been amazing.",
      color: "border-[#ffff39] text-black bg-[#ffff39]",
      borderRadius: "rounded-[16px_40px_16px_40px]"
    },
    {
      name: "Maria Garcia",
      role: "Founder, Bloom Agency",
      feedback: "Professional, innovative, and incredibly responsive. They delivered our project ahead of schedule and exceeded expectations.",
      color: "border-[#ffff39] text-black bg-[#ffff39]",
      borderRadius: "rounded-[40px_16px_40px_16px]"
    }
  ];

  return (
    <section className="relative w-full bg-black py-16 md:pt-30 px-0 flex flex-col items-center overflow-hidden font-poppins">
      
      {/* ================= CYBER GRAPHICS BACKDROP ================= */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-[#ffff39]/5 blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* STRICT GLOBAL ALIGNMENT BOUNDS: Locks Header and Grid elements to absolute parallel line metrics */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 mb-30 md:px-8 z-10 flex flex-col items-center text-center">
        
        {/* ================= 1. HEADER INTEGRATION ================= */}
        <div className="w-full text-center mx-auto space-y-4 mb-20 max-w-3xl mr-auto">
          <div className="inline-flex items-center gap-2 bg-neutral-900 border border-white/[0.06] rounded-full px-4 py-1.5 w-fit shadow-md">
            <MessageSquare className="w-3.5 h-3.5 text-[#ffff39]" />
            <span className="text-[10px] font-mono tracking-widest text-white uppercase font-bold">
              Client Logs
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight text-center font-rajdhani leading-[0.95]">
            What Our <span className="text-[#ffff39]">Customers</span> Are Saying
          </h2>
        </div>

        {/* ================= 2. ASYMMETRIC GRID CONFIGURATION ================= */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch justify-items-center">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className={`w-full bg-neutral-950 border border-white/[0.06] p-6 sm:p-8 flex flex-col justify-between shadow-[0_25px_50px_rgba(0,0,0,0.85)] relative transition-all duration-300 hover:border-white/15 pt-10 group ${review.borderRadius}`}
            >
              
              {/* FLOATING TOP-LEFT CUSTOM QUOTE BADGE - Matches image_ed7218.png geometry exactly */}
              <div className={`absolute -top-4 -left-2 w-11 h-11 bg-[#ffff39] rounded-full border border-white/5 flex items-center justify-center font-bold text-4xl text-center shadow-lg group-hover:scale-110 transition-transform duration-300 ${review.color}`}>
                <Quote className="w-3.5 h-3.5 text-black group-hover/card:text-[#ffff39] transition-colors" />
              </div>

              {/* Top Row Profile Metadata Content */}
              <div className="w-full text-center space-y-2 relative z-10">
                <div className="space-y-0.5">
                  <h3 className="text-base font-black text-white uppercase tracking-wider font-rajdhani group-hover:text-[#ffff39] transition-colors">
                    {review.name}
                  </h3>
                  <p className="text-[11px] font-mono tracking-wide text-white uppercase font-medium">
                    {review.role}
                  </p>
                </div>

                {/* Golden Yellow Star Rating Row Block */}
                <div className="flex items-center justify-center gap-0.5 text-[#ffff39]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
              </div>

              {/* Main Client Statement Body Block */}
              <div className="mt-6 flex-grow text-center px-1 relative z-10">
                <p className="text-xs sm:text-sm text-white font-light leading-relaxed antialiased">
                  {review.feedback}
                </p>
              </div>

              {/* Lower Subtle Shadow Contrast Indicator */}
              <div className="absolute bottom-4 right-6 text-2xl font-black text-white/[0.02] select-none pointer-events-none group-hover:text-[#ffff39]/5 transition-colors font-rajdhani">
                ”
              </div>

              {/* Micro interactive border gloss layout effect */}
              <div className="absolute bottom-0 inset-x-12 h-px bg-gradient-to-r from-transparent via-transparent group-hover:via-[#ffff39]/20 to-transparent transition-all duration-500" />

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}