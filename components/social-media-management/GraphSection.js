'use client';

import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

export default function ProvenResultsSection() {
  
  const contentItems = [
    {
      type: 'testimonial',
      quote: "Absolutely brilliant team. Their custom social strategies consistently attract the exact high-net-worth investors we want.",
      author: "James Harrison",
      role: "Managing Partner, Aethel Wealth",
      badge: "Verified Founder Badge"
    },
    {
      type: 'metric',
      value: "+85%",
      label: "Avg. Profile Interactions"
    },
    {
      type: 'testimonial',
      quote: "Sales skyrocketed after they took over our reels. They truly understand how to convert viewers instantly.",
      author: "Emily Carter",
      role: "Founder, LumiAesthetics",
      badge: "Verified Founder Badge"
    }
  ];

  return (
    <section className="relative w-full bg-black py-16 md:pt-46 font-poppins flex flex-col items-center overflow-hidden">
      
      {/* Background Cinematic Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#ffff39]/5 blur-[150px] pointer-events-none rounded-full" />

      {/* STRICT GLOBAL ALIGNMENT BOUNDS */}
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        
        {/* Top Kicker Pill */}
        <div className="inline-flex items-center justify-center px-5 py-1.5 rounded-full border border-white/20 bg-white/[0.05] backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
          <span className="text-[11px] font-bold tracking-widest text-white uppercase font-mono">
            CLIENT VOICES
          </span>
        </div>

        {/* Main Section Heading */}
        <h2 className="text-3xl sm:text-5xl md:text-5xl lg:text-4xl font-black text-white tracking-tight font-rajdhani mb-16 lg:mb-20">
          Real Feedback From <span className="text-[#ffff39]">Industry Leaders</span>.
        </h2>

        {/* 3-Column Responsive Grid Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-center justify-items-center">
          
          {contentItems.map((item, index) => {
            
            // Center Metric Card with Background Graph Image (Non-cropped)
            if (item.type === 'metric') {
              return (
                <div 
                  key={index}
                  className="w-full relative flex flex-col items-center justify-center p-8 lg:py-16 overflow-hidden rounded-3xl text-center group min-h-[300px]"
                >
                  {/* Background Graph Image Container */}
                  <div className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-60 flex items-center justify-center">
                    <Image 
                      src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/Social-Media-Images/GraphChart.png`}
                      alt="Engagement Growth Graph"
                      fill
                      unoptimized={true}
                      // FIX: Changed from object-cover to object-contain so the image never gets cut
                      className="object-contain object-center p-4"
                    />
                  </div>

                  {/* Foreground Metric Content */}
                  <div className="relative z-10 flex flex-col items-center">
                    <h3 className="text-6xl sm:text-7xl md:text-[85px] font-black text-white font-rajdhani tracking-tighter mb-2 drop-shadow-[0_0_35px_rgba(255,255,255,0.25)]">
                      {item.value}
                    </h3>
                    <p className="text-lg sm:text-xl font-bold text-white font-rajdhani uppercase tracking-wide">
                      {item.label}
                    </p>
                  </div>
                </div>
              );
            }

            // Left & Right Testimonial Cards
            return (
              <div 
                key={index}
                className="w-full h-full flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-neutral-900/40 border border-white/15 hover:border-white/30 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-300 text-left relative"
              >
                {/* Stars */}
                <div className="flex items-center gap-1.5 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#ffff39] text-[#ffff39]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-white/90 font-light leading-relaxed mb-8">
                  "{item.quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-between pt-4 border-t border-white/[0.08] gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-white font-rajdhani uppercase tracking-wide">
                      {item.author}
                    </h4>
                    <p className="text-xs text-white/50 font-light">
                      {item.role}
                    </p>
                  </div>

                  {/* Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[10px] text-[#ffff39] font-mono tracking-wide shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#ffff39]" />
                    <span>Verified Founder Badge</span>
                  </div>
                </div>

              </div>
            );

          })}

        </div>

      </div>

    </section>
  );
}