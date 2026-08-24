'use client';

import React from 'react';
import { motion } from 'framer-motion';

const integrationTools = [
  { id: 1, name: 'React JS', logo: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Home%20Page%20Images/react.webp` },
  { id: 2, name: 'Next JS', logo: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Home%20Page%20Images/nextjs-13.webp` },
  { id: 3, name: 'Make.com', logo: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Home%20Page%20Images/make-logo-rgb-3.webp` },
  { id: 4, name: 'Wordpress', logo: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Home%20Page%20Images/wordpress-2.webp` },
  { id: 5, name: 'Shopify', logo: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Home%20Page%20Images/shopify.webp` },
  { id: 6, name: 'N8n', logo: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Home%20Page%20Images/n8n-pinkblack.webp` },
  { id: 7, name: 'Python', logo: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Home%20Page%20Images/python-5.webp` }, // Fixed duplicate key id from 6 to 7
];

export default function RotatingToolsCarousel() {
  const totalItems = integrationTools.length;
  const radius = 300; 

  return (
    /* FIX 1: 'min-h-[75vh]' ko complete terminate kiya aur uniform standard 'py-16 md:py-24' 
       aur explicit grid gutters use kiye taake layout gaps exact same rahein.
    */
    <div className="relative w-full bg-black flex flex-col items-center justify-center overflow-hidden py-16 md:pt-29 px-6 lg:px-8 font-poppins">
      
      {/* Ambient background glows */}
      <div className="absolute top-10 left-10 w-44 h-44 rounded-full bg-emerald-500/5 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-52 h-52 rounded-full bg-purple-500/5 blur-[100px] pointer-events-none" />

      {/* FIX 2: Outer wrapper wrapper constraints match baseline parameters. 
         Is se full viewport desktop zoom-out par bhi left/right matching margins line up rahegi.
      */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        
        {/* --- Header Section --- */}
        <div className="text-center z-20 mb-12 pointer-events-none">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-2 font-rajdhani">
            Empowering <span className="text-[#ffff39]">Brands</span> With Smart Technology
          </h2>
          <p className="text-sm md:text-base text-white font-medium">
            We build <span className="text-[#ffff39] underline decoration-[#ffff39]/40 underline-offset-4">full-stack apps</span>, secure <span className="text-[#ffff39] underline decoration-[#ffff39]/40 underline-offset-4">cloud architectures</span>, <span className="text-[#ffff39] underline decoration-[#ffff39]/40 underline-offset-4">AI workflows</span>, and <span className="text-[#ffff39] underline decoration-[#ffff39]/40 underline-offset-4">digital marketing</span> services for your business growth.
          </p>
        </div>

        {/* --- 3D VIEWPORT PERSPECTIVE CONTAINER --- */}
        <div className="relative w-full max-w-[950px] h-[300px] flex items-center justify-center [perspective:1400px] [perspective-origin:center_center]">
          
          <motion.div
            className="relative w-[200px] h-[120px] sm:w-[240px] sm:h-[140px]"
            style={{ transformStyle: 'preserve-3d' }}
            animate={{ rotateY: [0, 360] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
          >
            {integrationTools.map((tool, index) => {
              const angle = (index / totalItems) * 360;

              return (
                <div
                  key={tool.id}
                  className="absolute inset-0 bg-white rounded-2xl border border-neutral-200 p-6 flex flex-col items-center justify-center shadow-[0_15px_35px_rgba(0,0,0,0.6)] group overflow-hidden transition-all duration-300 hover:border-purple-500/40"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                    WebkitTransform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Inner Card Elements */}
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3 select-none">
                    <img 
                      src={tool.logo} 
                      alt={tool.name} 
                      unoptimized={true}
                      className="w-14 h-14 object-contain opacity-100 transition-all duration-300" 
                    />
                    <span className="text-[12px] font-black tracking-wider text-neutral-800 uppercase">
                      {tool.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </div>
  );
}
