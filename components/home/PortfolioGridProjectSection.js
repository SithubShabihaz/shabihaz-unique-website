'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Row 1 Assets (Moving Left)
const row1 = [
  { id: 1, alt: "Medical Website", img: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Home%20Page%20Images/Medixo-Website-Banner.webp` },
  { id: 2, alt: "Furniture Website", img: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Home%20Page%20Images/Furniture-Ecommerce-Banner.webp` },
  { id: 3, alt: "Portfolio Website", img: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Home%20Page%20Images/Portfoliowebsite.webp` },
  { id: 4, alt: "Flowers Website", img: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Home%20Page%20Images/FlowersEcommerceMockup.webp` },
  { id: 5, alt: "Educational Website", img: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Home%20Page%20Images/LearnixWebsite.webp` },
  { id: 6, alt: "Fashion Website", img: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Home%20Page%20Images/NoveliaEcommerceWebsite.webp` },
];

// Row 2 Assets (Moving Right)
const row2 = [
  { id: 7, alt: "Travel Website", img: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Home%20Page%20Images/TravelWebsiteMockup.webp` },
  { id: 8, alt: "GYM Website", img: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Home%20Page%20Images/GYMWebsiteDesign.webp` },
  { id: 9, alt: "Healthy Snacks Website", img: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Home%20Page%20Images/HealthySnacksCommerce.webp` },
  { id: 10, alt: "Dental Website", img: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Home%20Page%20Images/DentalWebsite.webp` },
  { id: 11, alt: "Realtor Website", img: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Home%20Page%20Images/RealtorWebsite.webp` },
  { id: 12, alt: "GYM Website", img: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Home%20Page%20Images/GYMWebsiteDesign.webp` },
];

export default function HorizontalShowcase() {
  return (
    /* FIX 1: 'min-h-screen' ko delete kiya aur pure spacing rules 'py-16 md:py-24 px-6 lg:px-8' 
       ko implementation de kar global content line-height wrapper standard par set kiya.
    */
    <div className="relative w-full bg-black flex flex-col items-center justify-center overflow-hidden py-16 md:pt-36 px-6 lg:px-8 font-poppins">
      
      {/* Background Subtle Radial Glow */}
      <div className="absolute inset-0 pointer-events-none" />

      {/* --- Center Title Section --- */}
      <div className="text-center z-20 mt-0 mb-16 max-w-2xl px-6 pointer-events-none">
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4 font-rajdhani">
          Explore Our <span className="text-[#ffff39]">Projects</span>
        </h2>
      </div>

      {/* Main Showcase Container 
          FIX 2: max-w-[1400px] layout scale ko shift karke exactly max-w-7xl mx-auto kiya 
          taake desktop zoom levels badhne ya kam hone par margins header element lines se cross-break na hon.
      */}
      <div className="w-full max-w-7xl mx-auto relative z-10 flex flex-col gap-6">
        
        {/* --- ROW 1: LEFT MOVING MARQUEE (Smaller Cards) --- */}
        <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
          <motion.div 
            className="flex gap-4 shrink-0 pr-4"
            animate={{ x: [0, "-50%"] }}
            transition={{
              ease: "linear",
              duration: 20,
              repeat: Infinity,
            }}
          >
            {[...row1, ...row1].map((card, i) => (
              <div 
                key={`r1-${i}`} 
                className="w-[180px] sm:w-[220px] aspect-[16/8.5] rounded-lg overflow-hidden border border-white/[0.08] bg-neutral-900 shadow-xl hover:border-[#ffff39]/40 hover:scale-[1.03] transition-all duration-300 shrink-0 cursor-pointer"
              >
                <img 
                  src={card.img} 
                  alt={card.alt} 
                  unoptimized={true}
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* --- ROW 2: RIGHT MOVING MARQUEE (Smaller Cards) --- */}
        <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
          <motion.div 
            className="flex gap-4 shrink-0 pr-4"
            animate={{ x: ["-50%", 0] }}
            transition={{
              ease: "linear",
              duration: 20,
              repeat: Infinity,
            }}
          >
            {[...row2, ...row2].map((card, i) => (
              <div 
                key={`r2-${i}`} 
                className="w-[180px] sm:w-[220px] aspect-[16/8.5] rounded-lg overflow-hidden border border-white/[0.08] bg-neutral-900 shadow-xl hover:border-[#ffff39]/40 hover:scale-[1.03] transition-all duration-300 shrink-0 cursor-pointer"
              >
                <img 
                  src={card.img} 
                  alt={card.alt} 
                  unoptimized={true}
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  );
}
