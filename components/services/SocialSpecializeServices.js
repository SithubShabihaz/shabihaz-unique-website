'use client';

import React from 'react';
import Link from 'next/link';
import { Rocket, TrendingUp, Crown, ArrowRight } from 'lucide-react';

export default function SpecializedSolutionsGrid() {
  const solutions = [
    {
      title: 'Starter Presence',
      description: 'Establish your brands digital foundation with a professional aesthetic, targeted SEO, and strategic hashtags.',
      icon: Rocket,
      features: ['Number of Platforms: 1', 'Content Volume: 5 High-Quality Posts', 'Management Duration: 7 Days'],
      ctaText: 'Get Started',
      link: '/contact',
      isFeatured: false
    },
    {
      title: 'Business Growth',
      description: 'Designed for growing businesses ready to engage their audience, outshine competitors, and drive real growth. ',
      icon: TrendingUp,
      features: ['Number of Platforms: 3', 'Content Volume: 10 Posts (Includes 2 Reels/Shorts)', 'Management Duration: 14 Days'],
      ctaText: 'Get Started',
      link: '/contact',
      isFeatured: true
    },
    {
      title: 'Elite Management',
      description: 'Dominate multiple platforms with aggressive growth strategies, high-volume campaigns, and premium daily content.',
      icon: Crown,
      features: ['Number of Platforms: 4', 'Content Volume: 30 Posts (Includes 5 Reels/Shorts)', 'Management Duration: 30 Days'],
      ctaText: 'Get Started',
      link: '/contact',
      isFeatured: false
    }
  ];

  return (
    <section className="relative w-full bg-black py-15 md:pt-28 px-0 flex flex-col items-center overflow-hidden font-poppins">
      
      {/* Background Tech Gradients */}
      <div className="absolute top-1/4 left-1/3 -translate-y-1/2 w-96 h-96 rounded-full bg-[#ffff39]/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      {/* Strict Width Grid Wrapper */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 z-10 flex flex-col items-center">
        
        {/* --- Section Header --- */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-[11px] font-mono tracking-widest text-[#ffff39] uppercase font-bold">
            AUDIENCE ENGAGEMENT
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight font-rajdhani mt-4 mb-3">
            Scale Your Online <span className="text-[#ffff39]">Presence</span>
          </h2>
          <p className="text-sm md:text-base text-white font-light leading-relaxed">
            Elevate your digital footprint with our targeted social media strategies. We craft compelling campaigns designed to maximize engagement and accelerate lead generation.
          </p>
        </div>

        {/* --- Three Column Grid Layout --- */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 items-stretch justify-items-center">
          {solutions.map((item, index) => (
            <div
              key={index}
              className={`relative w-full rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 border overflow-hidden group ${
                item.isFeatured
                  ? 'bg-gradient-to-b from-neutral-900/60 to-neutral-950/40 border-[#ffff39]/30 shadow-[0_20px_40px_rgba(255,255,57,0.05)]'
                  : 'bg-white/[0.01] backdrop-blur-md border-white/[0.08] shadow-[0_15px_35px_rgba(0,0,0,0.7)] hover:border-white/20'
              }`}
            >
              {/* Card Main Inner Content Wrapper */}
              <div>
                {/* Icon Setup */}
                <div className="mb-6 w-fit">
                  <div className={`p-3 rounded-xl border ${
                    item.isFeatured 
                      ? 'bg-[#ffff39]/10 border-[#ffff39]/30 text-[#ffff39]' 
                      : 'bg-neutral-900 border-white/5 text-white group-hover:text-[#ffff39] group-hover:border-[#ffff39]/20 transition-colors duration-300'
                  }`}>
                    <item.icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Typography Block */}
                <h3 className="text-xl font-black text-white tracking-wide uppercase font-rajdhani mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-white font-light leading-relaxed min-h-[72px]">
                  {item.description}
                </p>

                {/* Divider Line Rule */}
                <div className="w-full h-px bg-white/[0.06] my-6" />

                {/* Features Bullet List Area */}
                <ul className="space-y-3.5 mb-8">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-left">
                      {/* Bullet Dot */}
                      <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-[#ffff39]" />
                      <span className="text-xs sm:text-sm text-white/90 font-medium tracking-wide">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Trigger Button Segment */}
              <div className="pt-2">
                <Link
                  href={item.link}
                  className={`group/btn w-full flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-wider py-4 rounded-full transition-all duration-300 select-none transform active:scale-[0.98] ${
                    item.isFeatured
                      ? 'bg-white text-black hover:bg-[#ffff39] shadow-[0_4px_20px_rgba(255,255,255,0.1)]'
                      : 'bg-neutral-900 text-white border border-white/10 hover:border-white/20 hover:bg-neutral-800'
                  }`}
                >
                  <span>{item.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                </Link>
              </div>

              {/* Decorative Subtle Background Line */}
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}