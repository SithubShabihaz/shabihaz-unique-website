'use client';

import { motion } from 'framer-motion';
import { Cpu, Database, Brush, CloudCog, TabletSmartphone, CodeXml } from 'lucide-react';
import { TbBrandWordpress, TbBrandShopee, TbBrandGoogle } from "react-icons/tb";

const features = [
  { 
    id: 1, 
    name: 'WEB DEVELOPMENT', 
    description: 'Building fast, interactive, and scalable web applications using modern frameworks like React and Next.js.', 
    icon: CodeXml 
  },
  { 
    id: 2, 
    name: 'AI AUTOMATION', 
    description: 'Orchestrating intelligent n8n agent pipelines to eliminate manual tasks and accelerate your daily operations.', 
    icon: Cpu 
  },
  { 
    id: 3, 
    name: 'DATABASE ARCHITECTURE', 
    description: 'Structuring secure, high-performance databases using MongoDB and MySQL to ensure rapid, reliable data retrieval.', 
    icon: Database 
  },
  { 
    id: 4, 
    name: 'UI/UX DESIGN', 
    description: 'Designing intuitive, pixel-perfect interfaces that engage visitors and turn complex journeys into seamless experiences.', 
    icon: Brush 
  },
  { 
    id: 5, 
    name: 'CLOUD ARCHITECTURE', 
    description: 'Deploying scalable cloud applications on AWS and Cloudflare, ensuring security, high availability, and optimal performance.', 
    icon: CloudCog 
  },
  { 
    id: 6, 
    name: 'GOOGLE CLOUD CONSOLE', 
    description: 'Managing Google Cloud Console environments by setting up service accounts, enabling APIs, and optimizing cloud-based operations seamlessly.', 
    icon: TbBrandGoogle 
  },
  { 
    id: 7, 
    name: 'DIGITAL MARKETING', 
    description: 'Driving targeted growth and maximizing conversions through expert Meta ads, SEO, and social management.', 
    icon: TabletSmartphone 
  },
  { 
    id: 8, 
    name: 'WORDPRESS DEVELOPMENT', 
    description: 'Developing pixel-perfect, highly responsive WordPress websites utilizing Elementor to empower your digital brand identity.', 
    icon: TbBrandWordpress 
  },
  { 
    id: 9, 
    name: 'SHOPIFY DEVELOPMENT', 
    description: 'Building high-converting Shopify storefronts with optimized checkout flows to rapidly scale your e-commerce revenue.', 
    icon: TbBrandShopee 
  },
];

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50, 
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 80, 
      damping: 15 
    } 
  },
};

export default function ServicesSection() {
  return (
    <section id="service-cards" className="relative w-full bg-black py-16 md:pt-30 overflow-hidden flex justify-center">
      
      {/* Background radial glowing gradient */}
      <div className="absolute inset-0 pointer-events-none" />

      {/* STRICT GLOBAL ALIGNMENT BOUNDS: Pixel-to-pixel match with Header, About Us, and other global grids */}
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* --- Top Header Section --- */}
        <div className="text-center mb-16 max-w-3xl mx-auto pointer-events-none">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 font-rajdhani">
            Elite Tech <span className="text-[#ffff39]">Ecosystem</span>
          </h2>
          <p className="text-sm md:text-base text-white font-light leading-relaxed">
            We combine scalable full-stack applications, advanced n8n agent automations, and secure cloud infrastructures with targeted digital marketing to completely maximize your business growth.
          </p>
        </div>

        {/* Grid wrapper for cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.7), 0 0 25px rgba(234,179,8,0.1)" 
              }}
              className="relative w-full flex flex-col p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.01] backdrop-blur-md border border-white/[0.08] shadow-[0_15px_35px_rgba(0,0,0,0.6)] transition-colors duration-300 hover:bg-white/[0.06] hover:border-white/[0.15]"
            >
              {/* Card Inner Content */}
              <div className="flex items-start gap-x-5">
                {/* Icon Section */}
                <div className="shrink-0 pt-1">
                  <div className="p-2 rounded-xl bg-[#ffff39]/10 border border-[#ffff39]/20 shadow-[0_0_15px_rgba(234,179,8,0.1)]">
                    <motion.div>
                      <feature.icon 
                        className="w-8 h-8 text-[#ffff39] drop-shadow-[0_0_8px_rgba(234,179,8,0.4)]" 
                        strokeWidth={1.5}
                      />
                    </motion.div>
                  </div>
                </div>
                
                {/* Text Section */}
                <div className="flex-1">
                  <h3 className="text-lg font-black text-[#ffff39] uppercase tracking-wider leading-snug drop-shadow-sm font-rajdhani">
                    {feature.name}
                  </h3>
                  <p className="mt-3 text-sm text-white font-light leading-relaxed tracking-wide antialiased">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Bottom Subtle Inner Glow for 3D look */}
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}