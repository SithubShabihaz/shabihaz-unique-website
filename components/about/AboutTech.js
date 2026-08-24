'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Award, Users, Lightbulb, Shield } from 'lucide-react';

export default function CorePrinciplesTimeline() {
  const [activeStep, setActiveStep] = useState(-1);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && activeStep === -1) {
            setActiveStep(0);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [activeStep]);

  useEffect(() => {
    if (activeStep >= 0 && activeStep < 3) {
      const timer = setTimeout(() => {
        setActiveStep((prev) => prev + 1);
      }, 1000); 
      return () => clearTimeout(timer);
    }
  }, [activeStep]);

  const principlesData = [
    { title: 'Excellence', desc: 'Delivering flawless architecture and premium designs to ensure every project performs completely beyond expectations.', icon: Award, position: 'top' },
    { title: 'Collaboration', desc: 'Partnering closely with your team to transform complex visions into seamless, highly functional realities.', icon: Users, position: 'bottom' },
    { title: 'Innovation', desc: 'Leveraging modern technologies to engineer forward-thinking digital solutions that keep your business continually ahead.', icon: Lightbulb, position: 'top' },
    { title: 'Integrity', desc: 'Building lasting client trust through absolute transparency, honest communication, and highly ethical development practices.', icon: Shield, position: 'bottom' }
  ];

  return (
    <section className="relative w-full bg-black py-15 px-0 flex justify-center overflow-hidden font-poppins">
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-[#ffff39]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      {/* Strict Width Wrapper matching Header & Footer borders */}
      <div ref={containerRef} className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 z-10 flex flex-col items-center">
        
        {/* Header Segment */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-24">
          <span className="text-xs font-bold tracking-[0.25em] text-[#ffff39] uppercase font-rajdhani block">
            OUR CORE PRINCIPLES
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight font-rajdhani">
            The Foundation of Our <span className="text-[#ffff39]">Success</span>
          </h2>
          <p className="text-sm text-white font-light leading-relaxed">
            At Shabihaz, our core values drive success through innovation, collaboration, and integration.
          </p>
        </div>

        {/* ================= TIMELINE GRID WITH SVG PATH CONNECTOR ================= */}
        <div className="w-full relative mt-8">
          
          {/* 
            FIX: PERFECT RESPONSIVE SVG CONNECTOR 
            Yeh vector paths exact mathematical percentage lines layout blueprint follow karte hain.
            Desktop rendering par ye circles ke exact centers ko lock karega.
          */}
          <div className="absolute inset-0 w-full h-full hidden lg:block pointer-events-none z-0">
            <svg className="w-full h-full" viewBox="0 0 1200 300" preserveAspectRatio="none">
              <defs>
                <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Line 1: Node 1 to Node 2 */}
              <path 
                d="M 150 40 L 450 160" 
                stroke="#ffff39" 
                strokeWidth="3" 
                fill="none"
                filter="url(#neon-glow)"
                className="transition-all duration-1000 ease-in-out"
                style={{
                  strokeDasharray: '400',
                  strokeDashoffset: activeStep > 0 ? '0' : '400'
                }}
              />

              {/* Line 2: Node 2 to Node 3 */}
              <path 
                d="M 450 160 L 750 40" 
                stroke="#ffff39" 
                strokeWidth="3" 
                fill="none"
                filter="url(#neon-glow)"
                className="transition-all duration-1000 ease-in-out"
                style={{
                  strokeDasharray: '400',
                  strokeDashoffset: activeStep > 1 ? '0' : '400'
                }}
              />

              {/* Line 3: Node 3 to Node 4 */}
              <path 
                d="M 750 40 L 1050 160" 
                stroke="#ffff39" 
                strokeWidth="3" 
                fill="none"
                filter="url(#neon-glow)"
                className="transition-all duration-1000 ease-in-out"
                style={{
                  strokeDasharray: '400',
                  strokeDashoffset: activeStep > 2 ? '0' : '400'
                }}
              />
            </svg>
          </div>

          {/* Grid Layout Cards mapping */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-0 relative z-10 w-full">
            {principlesData.map((principle, index) => {
              const IconComponent = principle.icon;
              const isNodeVisible = activeStep >= index;
              
              return (
                <div 
                  key={index}
                  className={`flex flex-col items-center transition-all duration-700 ease-out ${
                    principle.position === 'bottom' ? 'lg:translate-y-28' : 'lg:-translate-y-4'
                  } ${
                    isNodeVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-8 pointer-events-none'
                  }`}
                >
                  
                  {/* The Spherical active node */}
                  <div className="relative group mb-6">
                    <div className="absolute -inset-2 bg-gradient-to-r from-[#ffff39]/30 to-purple-600/0 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className={`relative w-20 h-20 rounded-full bg-black border shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex items-center justify-center text-white transition-all duration-300 transform group-hover:scale-110 z-10 ${
                      isNodeVisible ? 'border-[#ffff39] text-[#ffff39] shadow-[0_0_20px_rgba(255,255,57,0.2)]' : 'border-white/[0.1]'
                    }`}>
                      <IconComponent className="w-8 h-8" />
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2 w-2 bg-[#ffff39] rounded-full opacity-100 shadow-[0_0_8px_#ffff39]" />
                    </div>
                  </div>

                  {/* Information data block text */}
                  <div className="text-center space-y-2.5 max-w-[250px] p-4 rounded-2xl bg-white/[0.01] border border-transparent hover:border-white/[0.04] hover:bg-white/[0.02] transition-all duration-300">
                    <h3 className="text-lg font-bold text-[#ffff39] tracking-wide font-rajdhani uppercase">
                      {principle.title}
                    </h3>
                    <p className="text-xs text-white leading-relaxed font-light">
                      {principle.desc}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}