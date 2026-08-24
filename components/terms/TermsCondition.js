'use client';

import React, { useEffect, useState } from 'react';
import { Shield, ChevronRight, Mail, Eye, Key, Landmark } from 'lucide-react';
import { FiThumbsUp, FiShield, FiMap, FiCheckCircle, FiArrowLeft, FiBook } from 'react-icons/fi';

export default function PrivacyPolicyPage() {
  const [activeTab, setActiveTab] = useState('introduction');

  const tocItems = [
    { id: 'agreement', label: '1. Agreement to Terms', icon: FiThumbsUp },
    { id: 'ownership', label: '2. Intellectual Property & Code Ownership', icon: FiShield },
    { id: 'services', label: '3. Scope of Services', icon: FiMap },
    { id: 'responsible', label: '4. Client Responsibilities', icon: FiCheckCircle },
    { id: 'limitation', label: '5. Limitation of Liability', icon: FiArrowLeft },
    { id: 'governing-law', label: '6. Governing Law', icon: FiBook },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      for (const item of tocItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const target = document.getElementById(id);
    if (target) {
      const topOffset = 120;
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - topOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative w-full bg-black py-24 md:py-32 px-0 flex items-center overflow-hidden font-poppins text-white">
      
      {/* ================= BACKGROUND CYBER MATRIX INFRASTRUCTURE ================= */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[#ffff39]/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-600/5 blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* STRICT GLOBAL ALIGNMENT BOUNDS */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 z-10">
        
        {/* TITLE METRIC GRID */}
        <div className="border-b border-white/[0.05] pb-10 mb-16 space-y-4">
          
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-normal font-rajdhani leading-none uppercase">
            Terms & <span className="text-[#ffff39] drop-shadow-[0_0_30px_rgba(255,255,57,0.1)]">Condition</span>
          </h1>
        </div>

        {/* DUAL COLUMN SYSTEM LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: TABLE OF CONTENTS */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6 hidden lg:block bg-neutral-950/40 border border-white/[0.04] p-6 rounded-2xl backdrop-blur-sm">
            <div>
              <h2 className="font-rajdhani text-lg font-black tracking-normal text-white">Table of Contents</h2>
              <div className="h-[2px] w-12 bg-[#ffff39] mt-2" />
            </div>
            
            <nav className="space-y-1">
              {tocItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleScrollTo(item.id)}
                    className={`flex items-center gap-3 w-full text-left px-3 py-2.5 rounded-lg border text-sm font-medium transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#ffff39]/5 border-[#ffff39]/30 text-[#ffff39] font-semibold' 
                        : 'bg-transparent border-transparent text-white hover:text-[#ffff39] hover:bg-white/[0.02]'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-[#ffff39]' : 'text-white'}`} />
                    <h2 className="font-rajdhani tracking-wide text-xs font-bold">{item.label}</h2>
                    {isActive && <ChevronRight className="w-3.5 h-3.5 ml-auto text-[#ffff39] animate-pulse" />}
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* RIGHT: COMPLIANCE CONTENT */}
          <article className="lg:col-span-8 space-y-16 text-sm md:text-base leading-relaxed text-white/90 font-light">
            
            {/* 1. Overview */}
            <section id="agreement" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black font-rajdhani text-white uppercase tracking-wider">
                1. Agreement to Terms
              </h2>
              <div className="w-12 h-[2px] bg-[#ffff39] mb-4" />
              <p>
                By accessing Shabihaz.com and engaging our services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website or services.
              </p>
            </section>

            {/* 2. Intellectual Property & Code Ownership */}
            <section id="ownership" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black font-rajdhani text-white uppercase tracking-wider">
                2. Intellectual Property & Code Ownership
              </h2>
              <div className="w-12 h-[2px] bg-[#ffff39] mb-4" />
              <p>
                Unless otherwise agreed upon in a formal project contract:
              </p>
              
              {/* === ROUND BULLET UNORDERED LIST === */}
              <ul style={{ listStyleType: 'circle' }} className="list-inside pl-5 space-y-3 marker:text-[#ffff39] text-white/90">
                <li>
                    All preliminary designs, wireframes, and proposed architectures remain the property of Shabihaz.
                </li>
                <li>
                    Upon final payment and project delivery, the client assumes ownership of the final deployed custom code, WordPress/Shopify build, and specific AI automation workflows created for them.
                </li>
                <li>
                    We reserve the right to showcase the completed project in our portfolio, unless a Non-Disclosure Agreement (NDA) is signed.
                </li>
              </ul>
            </section>

            {/* 3. Scope of Services */}
            <section id="services" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black font-rajdhani text-white uppercase tracking-wider">
                3. Scope of Services
              </h2>
              <div className="w-12 h-[2px] bg-[#ffff39] mb-4" />
              <p>
                We provide full-stack web development, database architecture (MongoDB/MySQL), AI automation configurations, cloud deployments, and digital marketing. The specific scope, timeline, and pricing for your project will be outlined in a separate technical blueprint or contract following our discovery call.
              </p>
            </section>

            {/* 4. Client Responsibilities */}
            <section id="responsible" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black font-rajdhani text-white uppercase tracking-wider">
                4. Client Responsibilities
              </h2>
              <div className="w-12 h-[2px] bg-[#ffff39] mb-4" />
              <p>
                Clients must provide timely access to necessary assets, third-party accounts (e.g., Google Cloud Console, Meta Business Manager), and feedback. Delays on the client's end may result in adjustments to the project timeline.
              </p>
            </section>

            {/* 5. Limitation of Liability */}
            <section id="limitation" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black font-rajdhani text-white uppercase tracking-wider">
                5. Limitation of Liability
              </h2>
              <div className="w-12 h-[2px] bg-[#ffff39] mb-4" />
              <p>
                Shabihaz will not be held liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our developed applications, third-party API failures, cloud server downtimes (e.g., AWS, Cloudflare), or changes in search engine algorithms affecting SEO.
              </p>
            </section>
            {/* 6. Governing Law */}
            <section id="governing-law" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black font-rajdhani text-white uppercase tracking-wider">
                6. Governing Law
              </h2>
              <div className="w-12 h-[2px] bg-[#ffff39] mb-4" />
              <p>
                These terms shall be governed by and defined following the laws of Pakistan. Shabihaz and yourself irrevocably consent that the courts of Pakistan shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
              </p>
            </section>
          </article>
          
        </div>

      </div>
    </section>
  );
}   