'use client';

import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen mt-10 bg-[#090A0F] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      
      {/* Background Tech Glow Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ffff39]/[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="text-center z-10 max-w-xl mx-auto">

        {/* Hero Big Title */}
        <h1 className="font-poppins text-7xl md:text-9xl font-bold tracking-tighter text-white select-none">
          4<span className="text-[#ffff39] animate-pulse">0</span>4
        </h1>

        {/* Subheading / Message */}
        <h2 className="font-poppins text-xl md:text-2xl font-semibold text-white mt-4 tracking-tight">
          Oopss, nothing here..
        </h2>
        
        <p className="font-rajdhani font-light text-white text-base md:text-lg mt-3 max-w-md mx-auto leading-relaxed">
          The page you are looking for does not exist. Let's route you back to the homepage to explore modern web solutions.
        </p>

        {/* Dynamic Action Buttons Grid */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          
          {/* Main Back to Home CTA (Premium Magnetic Bracket style) */}
          <Link
            href="/"
            className="w-full sm:w-auto font-rajdhani px-8 py-3 rounded-full bg-[#ffff39] text-sm font-semibold text-black transition-all duration-300 hover:bg-[#ffff39]/90 hover:scale-[1.02] active:scale-[0.98] text-center"
          >
            [ Return To Home ]
          </Link>

        </div>

      </div>

    </main>
  );
}