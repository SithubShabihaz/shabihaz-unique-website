'use client';

import React from 'react';
import Link from 'next/link';
import { Check, CodeXml, Cpu, CloudCog, ArrowRight, TabletSmartphone } from 'lucide-react';
import { TbBrandWordpress, TbBrandShopee, TbBrandGoogle } from "react-icons/tb";
// import { FiMob } from "react-icons/fi";
// import { BsFileBarGraph } from 'react-icons/bs';

export default function SpecializedSolutionsGrid() {
  const solutions = [
    {
      title: 'Custom Web Development',
      description: 'Engineering custom web applications with seamless frontends and scalable backends using React, Next.js, PHP, Laravel, and MongoDB.',
      icon: CodeXml,
      features: ['Custom Full-Stack Solutions', 'Secure Backend Architecture', 'High-Speed Performance'],
      ctaText: 'Get Started',
      link: '/contact',
      isFeatured: false
    },
    {
      title: 'AI Automation',
      description: 'Streamline your business processes with intelligent AI solutions that automate workflows, enhance efficiency, and drive smarter decision-making.',
      icon: Cpu,
      features: ['Workflow Automation', 'AI-Powered Insights', 'Custom AI Solutions', 'API Integration'],
      ctaText: 'Get Started',
      link: '/contact',
      isFeatured: true // Highlights the center card just like the third card in your reference image layout
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Robust, scalable cloud solutions built with AWS and Cloudflare to ensure high availability, security, and optimal performance for your business.',
      icon: CloudCog,
      features: ['Scalable Architecture', 'High Availability', 'Data Security and Compliance'],
      ctaText: 'Get Started',
      link: '/contact',
      isFeatured: false
    },
    {
      title: 'WordPress Design',
      description: 'We design premium, fully responsive WordPress websites using Elementor, delivering seamless user experiences to maximize your conversions.',
      icon: TbBrandWordpress,
      features: ['Custom Elementor Layouts', 'Responsive UI/UX Design', 'SEO Optimized'],
      ctaText: 'Get Started',
      link: '/contact',
      isFeatured: false
    },
    {
      title: 'Shopify Store Development',
      description: 'We engineer high-converting Shopify stores with custom themes and secure checkouts to effectively drive your business growth.',
      icon: TbBrandShopee,
      features: ['Custom Theme Design', 'Seamless Checkout Flow', 'Scalable E-commerce Architecture'],
      ctaText: 'Get Started',
      link: '/contact',
      isFeatured: false
    },
    {
      title: 'Digital Marketing',
      description: 'We scale your digital presence using targeted Meta Ads, strategic social media marketing, and advanced SEO optimization.',
      icon: TabletSmartphone,
      features: ['Targeted Meta Advertising', 'Strategic Social Media', 'Data-Driven SEO Growth'],
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
            Premium Offerings
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight font-rajdhani mt-4 mb-3">
            Our Specialized <span className="text-[#ffff39]">Solutions</span> 
          </h2>
          <p className="text-sm md:text-base text-white font-light leading-relaxed">
            Designed to meet the unique needs of your business, our premium services combine innovation, scalability, and precision to deliver exceptional results.
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

                {/* Features Checkmark Bullet List Area */}
                <ul className="space-y-3.5 mb-8">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-left">
                      <div className="shrink-0 mt-0.5 w-4 h-4 rounded-full bg-[#ffff39]/10 border border-[#ffff39]/30 flex items-center justify-center text-[#ffff39]">
                        <Check className="w-2.5 h-2.5" strokeWidth={3} />
                      </div>
                      <span className="text-xs sm:text-sm text- font-medium tracking-wide">
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