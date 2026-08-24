'use client';

import React from 'react';
import Image from 'next/image';

export default function AsymmetricTeamSection() {
  const teamMembers = [
    {
      name: 'SHABIHA.Z',
      role: 'CO-FOUNDER',
      company: 'SHABIHAZ TECH COMPANY',
      image: `${process.env.NEXT_PUBLIC_MEDIA_URL}/About-Page-Images/photo_2026-06-21_15-32-13.webp`,
      isSpotlight: false,
    },
    {
      name: 'Wasim',
      role: 'CO-FOUNDER',
      company: 'SHABIHAZ TECH COMPANY',
      image: `${process.env.NEXT_PUBLIC_MEDIA_URL}/About-Page-Images/photo_2026-06-21_15-32-04.webp`,
      isSpotlight: true, // Center card gets the inverted highlighted look
    },
    {
      name: 'Aayan',
      role: 'WEB DEVELOPER',
      company: 'SHABIHAZ TECH COMPANY',
      image: `${process.env.NEXT_PUBLIC_MEDIA_URL}/About-Page-Images/photo_2026-06-21_15-32-19.webp`,
      isSpotlight: false,
    }
  ];

  return (
    /* FIX 1: Outer section ki custom padding ko 'px-0 py-20 md:py-28' karke absolute global rules par set kiya hai.
       Is se left/right padding child framework se manage hogi aur elements layout margin se bahar nahi jayenge.
    */
    <section className="relative w-full bg-black py-15 md:pt-43 px-0 flex flex-col items-center overflow-hidden font-poppins">
      
      {/* Structural Neon Ambient Overlays */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-[#ffff39]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      {/* FIX 2: Strict Width Container 'px-4 sm:px-6 md:px-8'
          Yeh layout standard website ke baki components (jaise cards framework ya headers) ke sath alignment ko lock rakhega.
      */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 z-10 flex flex-col items-center space-y-20">
        
        {/* ================= TOP CENTERED HEADINGS ================= */}
        <div className="text-center space-y-4 max-w-2xl mx-auto flex flex-col items-center">
          <span className="text-xs font-bold tracking-[0.25em] text-[#ffff39] uppercase font-rajdhani block">
            MEET OUR TEAM
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight font-rajdhani">
            The Minds Behind <span className="text-[#ffff39]">Shabihaz</span>
          </h2>
          <p className="text-sm text-white font-light leading-relaxed max-w-xl opacity-90">
            A dedicated team of experts committed to driving your business success.
          </p>
        </div>

        {/* ================= THE ASYMMETRIC GEOMETRIC CARDS GRID ================= */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {teamMembers.map((member, index) => {
            return (
              <div 
                key={index}
                className="flex flex-col items-center w-full group"
              >
                {/* Custom Tailwind asymmetric shapes mapping framework to perfectly clone your visual setup */}
                <div 
                  className={`relative w-full aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] p-5 flex flex-col justify-between items-center transition-all duration-300 hover:scale-[1.02] ${
                    member.isSpotlight 
                      ? 'bg-neutral-900 text-white rounded-[40px_40px_40px_100px] border-2 border-[#ffff39] shadow-[0_20px_50px_rgba(255,255,57,0.15)]' 
                      : 'bg-[#0d0d0d] text-white rounded-[40px_40px_100px_40px] border border-white/[0.06] hover:border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.6)]'
                  }`}
                >
                  {/* Inner Image Mask/Backdrop Wrapper */}
                  <div 
                    className={`absolute top-5 left-5 right-5 bottom-24 rounded-[28px_28px_40px_28px] overflow-hidden ${
                      member.isSpotlight ? 'bg-neutral-800' : 'bg-[#ffff39]'
                    }`}
                  >
                    <Image 
                      src={member.image}
                      alt={member.name}
                      fill
                      unoptimized={true}
                      className={`object-cover object-top transition-transform duration-500 group-hover:scale-105 ${
                        member.isSpotlight ? 'opacity-90' : 'brightness-95 contrast-[1.02]'
                      }`}
                      priority
                    />
                  </div>

                  {/* Text Meta Content tailored inside the curved asymmetrical wave zone */}
                  <div className="w-full mt-auto pt-6 text-center space-y-1 z-10">
                    <h3 
                      className="text-base font-black tracking-wide font-rajdhani uppercase text-white group-hover:text-[#ffff39] transition-colors"
                    >
                      {member.name}
                    </h3>
                    <p 
                      className={`text-xs font-bold tracking-tight uppercase leading-tight ${
                        member.isSpotlight ? 'text-[#ffff39]' : 'text-white'
                      }`}
                    >
                      {member.role}
                    </p>
                    <p className="text-[10px] tracking-widest uppercase text-white">
                      {member.company}
                    </p>
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
