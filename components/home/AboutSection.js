'use client';

import React from 'react';
import Image from 'next/image';
import { Cpu, Layers } from 'lucide-react';

const AboutUsSection = () => {
  return (
    // Section wrapper with uniform global vertical spacing
    <section className="bg-black overflow-hidden w-full">
      
      {/* STRICT GLOBAL ALIGNMENT BOUNDS: Pixel-to-pixel match with Header and other sections */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-28 items-center">
        
        {/* Left Column: Text Content (Span 6 for balanced 2-column split) */}
        <div className="lg:col-span-6 space-y-8 text-left">
          
          {/* Header Text */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold tracking-[0.25em] text-[#ffff39] uppercase font-rajdhani block">
              ABOUT US
            </h3>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tight font-rajdhani">
              Your Partners in <span className="text-[#ffff39] font-medium">Digital</span> Excellence
            </h2>
            <p className="text-white/90 text-sm md:text-base font-light leading-relaxed">
              At Shabihaz, we believe technology should simplify complexity. We bridge the gap between creative design and robust engineering, building custom digital experiences that help modern brands operate flawlessly and stand out in a competitive market.
            </p>
          </div>

          {/* Feature Cards Grid (Optional space kept ready for integration) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            {/* Future feature cards can go here */}
          </div>

        </div>

        {/* Right Column: Mobile Mockup (Span 6) */}
        <div className="lg:col-span-6 w-full flex items-center justify-center relative">
          <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center transition-transform duration-300 hover:scale-105">
            <Image 
              src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/Home%20Page%20Images/HomePageAboutSectionMobileMockup.webp`}
              alt="AboutUs 3D Smartphone Mockup"
              width={500}
              height={500}
              unoptimized={true}
              className="w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.8)]"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUsSection;
