'use client';

import React from 'react';
import { Terminal, Lightbulb, Code2, Rocket, ArrowDownRight } from 'lucide-react';

export default function WindingProcessSection() {
  const steps = [
    {
      num: '01',
      title: 'Initial Consultation',
      description: 'We begin by understanding your goals, aligning them with your vision and needs.',
      icon: Terminal,
      isDown: false, // Controls the vertical alternating layout pattern from your first reference image
    },
    {
      num: '02',
      title: 'Planning & Strategy',
      description: 'We craft a custom roadmap, selecting the best technologies for project success.',
      icon: Lightbulb,
      isDown: true,
    },
    {
      num: '03',
      title: 'Development',
      description: 'Our agile process ensures continuous updates, keeping your project on track and efficient.',
      icon: Code2,
      isDown: false,
    },
    {
      num: '04',
      title: 'Delivery',
      description: 'We ensure the seamless completion and timely delivery of your project, meeting all specifications.',
      icon: Rocket,
      isDown: true,
    },
  ];

  return (
    <section className="relative w-full bg-black py-16 md:pt-30 px-0 overflow-hidden font-poppins">
      
      {/* Ambient background blur elements matching your website colors */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-[#ffff39]/5 blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-purple-600/5 blur-[140px] pointer-events-none" />

      {/* Global Framework Width Wrapper */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 z-10 relative">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center mb-24 max-w-2xl mx-auto space-y-4">
          <span className="text-xs font-bold tracking-[0.25em] text-[#ffff39] uppercase font-rajdhani block">
            How We Work
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight font-rajdhani">
            Our Approach
          </h2>
          <p className="text-sm md:text-base text-white font-light leading-relaxed">
            A results-driven process crafted to provide innovative solutions and achieve impactful outcomes throughout your project.
          </p>
        </div>

        {/* ================= SERPENTINE TRACK STEP GRID ================= */}
        <div className="relative w-full">
          
          {/* 
            FLUID BACKGROUND WINDING VECTOR TRACK 
            Replicating the sharp curved connector path from image {36FD6CB8-BB40-4859-8761-B4CC3602B05E}.png using precise SVG tracks.
            Hidden on mobile as steps stack vertically for natural responsiveness.
          */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-48 w-full hidden lg:block pointer-events-none z-0 px-12">
            <svg className="w-full h-full" viewBox="0 0 1000 200" fill="none" preserveAspectRatio="none">
              <path 
                d="M 30 40 L 110 40 A 40 40 0 0 1 150 80 L 150 120 A 40 40 0 0 0 190 160 L 380 160 A 40 40 0 0 0 420 120 L 420 80 A 40 40 0 0 1 460 40 L 640 40 A 40 40 0 0 1 680 80 L 680 120 A 40 40 0 0 0 720 160 L 880 160 A 40 40 0 0 0 920 120 L 920 50" 
                stroke="url(#winding-gradient)" 
                strokeWidth="2" 
                strokeDasharray="6 6"
              />
              <defs>
                <linearGradient id="winding-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(255,255,57,0.4)" />
                  <stop offset="50%" stopColor="rgba(147,51,234,0.3)" />
                  <stop offset="100%" stopColor="rgba(255,255,57,0.4)" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Steps Columns Wrapper */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10 w-full">
            {steps.map((step, idx) => (
              <div 
                key={idx}
                className={`w-full transition-transform duration-500 flex flex-col ${
                  step.isDown ? 'lg:translate-y-16' : 'lg:-translate-y-6'
                }`}
              >
                {/* Individual Card Panel Container */}
                <div className="bg-neutral-950/70 border border-[#ffff39]/20 rounded-2xl p-6 relative flex flex-col justify-between shadow-[0_20px_40px_rgba(0,0,0,0.8)] backdrop-blur-md group hover:border-[#ffff39]/30 transition-all duration-300 min-h-[250px]">
                  
                  {/* Top Row: Functional Step Indicator Badge */}
                  <div className="w-full flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-white/5 flex items-center justify-center text-[#ffff39] shadow-inner group-hover:bg-[#ffff39] group-hover:text-black transition-all duration-300">
                      <step.icon className="w-4 h-4" strokeWidth={2} />
                    </div>
                    <span className="text-3xl font-black font-rajdhani text-white/10 group-hover:text-[#ffff39]/20 transition-colors duration-300">
                      {step.num}
                    </span>
                  </div>

                  {/* Core Content Body */}
                  <div className="space-y-2 flex-grow text-left">
                    <h3 className="text-base font-black text-white uppercase tracking-wider font-rajdhani flex items-center gap-1.5">
                      <span>{step.title}</span>
                      <ArrowDownRight className="w-3.5 h-3.5 text-[#ffff39] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </h3>
                    <p className="text-xs sm:text-sm text-white font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Subtle lower horizontal glowing strip accent */}
                  <div className="absolute bottom-0 inset-x-6 h-px bg-gradient-to-r from-transparent via-[#ffff39]/0 group-hover:via-[#ffff39]/30 to-transparent transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}