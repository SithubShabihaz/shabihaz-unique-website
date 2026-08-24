'use client';

import React from 'react';

export default function BreakButton() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 px-0 font-sans">
      
      {/* Container for Button and Badge */}
      <div className="relative group cursor-pointer hover:scale-105 transition-transform duration-300">
        <a href="https://cal.com/shabihaz/discovery-call" className="block outline-none">
        {/* Main Button Body (Resized to 180x45) */}
        <button className="relative w-[200px] h-[40px] bg-[#030303] rounded-[1rem] border-[1px] border-[#fff931]/30 shadow-[0_2.5px_10px_rgba(0,0,0,0.8),inset_0_0_7.5px_rgba(237,255,0,0.1)] overflow-hidden focus:outline-none active:scale-95 transition-transform">

          {/* Deep Black Inner Shadow for 3D Bevel (Scaled shadows) */}
          <div className="absolute inset-0 rounded-[1.25rem] shadow-[inset_0_2px_4px_rgba(255,255,255,0.5),inset_0_-2.5px_7.5px_rgba(0,0,0,1)] pointer-events-none z-10" />

          {/* Intense Yellow Edge Light (Bleeding into the glass - Scaled) */}
          <div className="absolute top-0 -left-3 w-12 h-full bg-[#fff931] blur-xl pointer-events-none" />
          <div className="absolute top-0 -right-3 w-12 h-full bg-[#fff931] blur-xl pointer-events-none" />
          <div className="absolute -bottom-2 left-5 right-5 h-3 bg-[#fff931]/20 blur-md pointer-events-none" />

          {/* 3D Cracked Glass Faces & Light Rays Texture (Custom SVG) */}
          {/* SVG aspect ratio remains same, so it will automatically scale perfectly */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none mix-blend-screen z-0" viewBox="0 0 360 90" preserveAspectRatio="none">
             <defs>
               <linearGradient id="shardLeft" x1="0%" y1="50%" x2="100%" y2="50%">
                 <stop offset="0%" stopColor="#edff00" stopOpacity="0.45" />
                 <stop offset="100%" stopColor="#edff00" stopOpacity="0" />
               </linearGradient>
               <linearGradient id="shardRight" x1="100%" y1="50%" x2="0%" y2="50%">
                 <stop offset="0%" stopColor="#edff00" stopOpacity="0.5" />
                 <stop offset="100%" stopColor="#edff00" stopOpacity="0" />
               </linearGradient>
               <linearGradient id="glassGlare" x1="0%" y1="0%" x2="100%" y2="100%">
                 <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
                 <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
               </linearGradient>
             </defs>

             {/* LEFT SIDE FRACTURES */}
             <polygon points="-5,45 40,15 65,45 35,75" fill="url(#shardLeft)" />
             <polygon points="0,15 40,15 0,45" fill="url(#glassGlare)" opacity="0.3" />
             <polygon points="15,90 40,75 20,45" fill="url(#shardLeft)" opacity="0.8" />
             <polygon points="40,15 70,0 50,45" fill="url(#shardLeft)" opacity="0.4" />

             <path d="M -10 45 L 40 15 L 75 0" stroke="#edff00" strokeWidth="3" fill="none" filter="blur(2px)" />
             <path d="M -10 45 L 40 15 L 75 0" stroke="#ffffff" strokeWidth="1" fill="none" />
             <path d="M -10 45 L 35 75 L 65 95" stroke="#edff00" strokeWidth="3" fill="none" filter="blur(2px)" />
             <path d="M -10 45 L 35 75 L 65 95" stroke="#ffffff" strokeWidth="1" fill="none" />
             <path d="M 40 15 L 65 45 L 35 75" stroke="#edff00" strokeWidth="1.5" fill="none" opacity="0.9" />
             <path d="M 20 45 L 65 45" stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.8" />
             <path d="M 65 45 L 120 20" stroke="#edff00" strokeWidth="0.8" fill="none" opacity="0.4" />
             <path d="M 65 45 L 90 70" stroke="#ffffff" strokeWidth="0.5" fill="none" opacity="0.5" />

             {/* RIGHT SIDE FRACTURES */}
             <polygon points="365,45 320,15 295,45 325,75" fill="url(#shardRight)" />
             <polygon points="360,90 325,75 340,45" fill="url(#glassGlare)" opacity="0.2" />
             <polygon points="320,15 290,0 310,45" fill="url(#shardRight)" opacity="0.4" />

             <path d="M 370 45 L 320 15 L 285 0" stroke="#edff00" strokeWidth="3" fill="none" filter="blur(2px)" />
             <path d="M 370 45 L 320 15 L 285 0" stroke="#ffffff" strokeWidth="1" fill="none" />
             <path d="M 370 45 L 325 75 L 295 95" stroke="#edff00" strokeWidth="3" fill="none" filter="blur(2px)" />
             <path d="M 370 45 L 325 75 L 295 95" stroke="#ffffff" strokeWidth="1" fill="none" />
             <path d="M 320 15 L 295 45 L 325 75" stroke="#edff00" strokeWidth="1.5" fill="none" opacity="0.9" />
             <path d="M 340 45 L 295 45" stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.8" />
             <path d="M 295 45 L 240 20" stroke="#edff00" strokeWidth="0.8" fill="none" opacity="0.4" />
             <path d="M 295 45 L 270 70" stroke="#ffffff" strokeWidth="0.5" fill="none" opacity="0.5" />

             <path d="M 140 0 L 160 30 L 150 50" stroke="#edff00" strokeWidth="0.5" fill="none" opacity="0.2" />
             <path d="M 220 90 L 200 60 L 210 40" stroke="#edff00" strokeWidth="0.5" fill="none" opacity="0.2" />
          </svg>

          {/* Smooth Glassy Overlay Reflection (Scaled radii) */}
          <div className="absolute top-[1px] left-[1.5px] right-[1.5px] h-[45%] rounded-t-[1.15rem] rounded-b-[10px] bg-gradient-to-b from-white/40 via-white/5 to-transparent pointer-events-none z-10" />
          
          {/* Intense Top Edge Highlight */}
          <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-70 pointer-events-none z-10" />

          {/* Text Content (Resized from 42px to 21px) */}
          <span className="relative z-20 text-white text-[14px] tracking-[0.12em] font-medium drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)]">
            Book A Discovery Call
          </span>
        </button>
        </a>

      </div>
    </div>
  );
}