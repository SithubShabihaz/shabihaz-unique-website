'use client';

import React, { useState } from 'react';
import { HelpCircle, Plus, Minus } from 'lucide-react';

export default function AdvancedFAQSectionTopHeader() {
  // Advanced tracking arrays matching your exact full-stack & AI automation core mechanics
  const faqData = [
    {
      question: "What is your typical project timeline?",
      answer: "Our project timeline depends on the complexity and scope. Custom web development and AI automation solutions typically take a few weeks to months, with a focus on delivering high-quality results within the agreed timeframe."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "We specialize in Full Stack Development, Cloud Architecture, AI Automation, and Digital Marketing. To build these scalable solutions, we utilize React, Next.js, PHP, Laravel, Python, and Node.js. We engineer secure databases using MongoDB and MySQL, and deploy robust infrastructures across AWS, Cloudflare, and Google Cloud."
    },
    {
      question: "How do you handle project communication and delivery?",
      answer: "We maintain transparent communication through regular updates and project management tools. Before the final handover, our dedicated QA and DevOps engineers rigorously test and audit your project to ensure flawless performance, secure deployment, and complete alignment with your goals."
    },
    {
      question: "Do you offer tailored cloud infrastructure deployment?",
      answer: "Yes. We design and manage highly secure cloud setups on AWS and Cloudflare. Our services include setting up secure service proxies, managing multi-tenant database clusters, and deploying production-ready configurations focused on data security and high availability."
    },
    {
      question: "Can you work with existing codebases?",
      answer: "Yes, we can work with and improve existing codebases. Our team specializes in optimizing and integrating legacy systems with modern technologies, ensuring better performance, scalability, and alignment with your business objectives."
    }
  ];

  // Active accordion index tracking hook state matrix (Defaulted to index 0 open)
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="relative w-full bg-black py-15 md:pt-47 px-0 flex flex-col items-center overflow-hidden font-poppins">
      
      {/* Background Subtle Tech Auras */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#ffff39]/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-purple-600/5 blur-[130px] pointer-events-none" />
      {/* Structural network grid background texture sync */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Strict Width Sync Grid Framework */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 z-10 flex flex-col items-center text-center">
        
        {/* ================= 1. TOP CENTERED TITLE & PARAGRAPH BLOCK ================= */}
        <div className="space-y-6 max-w-3xl mx-auto flex flex-col items-center mb-16 md:mb-20">
          {/* Support Chip Badge */}
          <div className="inline-flex items-center gap-2 bg-neutral-900 border border-white/[0.06] rounded-full px-4 py-1.5 w-fit shadow-md">
            <HelpCircle className="w-3.5 h-3.5 text-[#ffff39]" />
            <span className="text-[10px] font-mono tracking-widest text-white uppercase font-bold">
              Support Matrix
            </span>
          </div>

          {/* Heading and Paragraph Description */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-rajdhani leading-[0.95]">
              Frequently Asked <span className="text-[#ffff39]">Questions</span>
            </h2>
            <p className="text-sm md:text-base text-white font-light max-w-xl mx-auto leading-relaxed opacity-95">
              Have specific architectural concerns or pipeline deployment questions? Explore our engineering logs or sync with our operators directly.
            </p>
          </div>
        </div>

        {/* ================= 2. BOTTOM ALIGNED ACCORDIONS BLOCK ================= */}
        {/* Centered layout bounding box optimized for premium reading width grids */}
        <div className="w-full max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div
                key={index}
                className={`w-full rounded-2xl border transition-all duration-300 overflow-hidden text-left ${
                  isOpen 
                    ? 'bg-neutral-900/40 border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.6)]' 
                    : 'bg-white/[0.01] border-white/[0.05] hover:border-white/15'
                }`}
              >
                {/* Accordion Toggle Header Trigger Row */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left gap-4 select-none focus:outline-none group/btn"
                >
                  <h4 className={`text-sm sm:text-base font-black tracking-wide font-poppins transition-colors duration-300 ${
                    isOpen ? 'text-[#ffff39]' : 'text-white group-hover/btn:text-[#ffff39]'
                  }`}>
                    {faq.question}
                  </h4>
                  
                  {/* Status Indicator Icon Control */}
                  <div className={`shrink-0 w-6 h-6 rounded-md border flex items-center justify-center transition-all duration-300 ${
                    isOpen 
                      ? 'bg-[#ffff39] border-[#ffff39] text-black rotate-180' 
                      : 'border-white/10 text-white group-hover/btn:border-white/20'
                  }`}>
                    {isOpen ? <Minus className="w-3.5 h-3.5" strokeWidth={3} /> : <Plus className="w-3.5 h-3.5" strokeWidth={3} />}
                  </div>
                </button>

                {/* Accordion Inner Slide Transition Frame Wrapper */}
                <div className={`transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-60 border-t border-white/[0.04]' : 'max-h-0'
                }`}>
                  <div className="p-6 text-xs sm:text-sm text-white font-light leading-relaxed tracking-wide antialiased bg-black/[0.1]">
                    {faq.answer}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}