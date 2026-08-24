'use client';

import React, { useEffect, useState } from 'react';
import { Shield, ChevronRight, Mail, Eye, Key, Landmark } from 'lucide-react';
import { FiHome, FiFolder, FiBarChart, FiUser, FiShield, FiHeadphones } from 'react-icons/fi';

export default function PrivacyPolicyPage() {
  const [activeTab, setActiveTab] = useState('introduction');

  const tocItems = [
    { id: 'introduction', label: '1. Introduction', icon: FiHome },
    { id: 'data-collection', label: '2. Information We Collect', icon: FiFolder },
    { id: 'how-to-use', label: '3. How We Use Your Information', icon: FiBarChart },
    { id: 'information', label: '4. Sharing Your Information', icon: FiUser },
    { id: 'data-security', label: '5. Data Security', icon: FiShield },
    { id: 'contact', label: '6. Contact Us', icon: FiHeadphones },
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
          <div className="inline-flex items-center gap-2 bg-neutral-900 border border-white/[0.06] rounded-full px-4 py-1.5 w-fit shadow-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffff39] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ffff39]"></span>
            </span>
            <span className="text-[10px] font-mono tracking-widest text-[#ffff39] uppercase font-bold">
              SYSTEM LEGAL POLICY
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-normal font-rajdhani leading-none uppercase">
            Privacy <span className="text-[#ffff39] drop-shadow-[0_0_30px_rgba(255,255,57,0.1)]">Policy</span>
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
            <section id="introduction" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black font-rajdhani text-white uppercase tracking-wider">
                1. Introduction
              </h2>
              <div className="w-12 h-[2px] bg-[#ffff39] mb-4" />
              <p>
                Welcome to Shabihaz.com ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or engage with our elite web development, AI automation, and digital marketing services.
              </p>
            </section>

            {/* 2. Information We Collect */}
            <section id="data-collection" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black font-rajdhani text-white uppercase tracking-wider">
                2. Information We Collect
              </h2>
              <div className="w-12 h-[2px] bg-[#ffff39] mb-4" />
              <p>
                We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about our services. This includes:
              </p>
              
              {/* === ROUND BULLET UNORDERED LIST === */}
              <ul style={{ listStyleType: 'circle' }} className="list-inside pl-5 space-y-3 marker:text-[#ffff39] text-white/90">
                <li>
                  <strong className="text-white">Contact Data:</strong> First and last name, email address, phone number, and project requirements collected via our contact forms.
                </li>
                <li>
                  <strong className="text-white">Booking Data:</strong> Information provided when scheduling a strategy or discovery call through our integrated scheduling tools (e.g., Calendly).
                </li>
                <li>
                  <strong className="text-white">Technical Data:</strong> IP addresses, browser types, and usage data collected automatically to ensure our cloud infrastructures and website perform optimally.
                </li>
              </ul>
            </section>

            {/* 3. How We Use Your Information */}
            <section id="how-to-use" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black font-rajdhani text-white uppercase tracking-wider">
                3. How We Use Your Information
              </h2>
              <div className="w-12 h-[2px] bg-[#ffff39] mb-4" />
              <p>
                We use the information we collect for the following business purposes:
              </p>
              <ul style={{ listStyleType: 'circle' }} className="list-inside pl-5 space-y-3 marker:text-[#ffff39] text-white/90">
                <li>
                  To facilitate account creation and project onboarding.
                </li>
                <li>
                  To schedule and manage discovery calls and technical audits.
                </li>
                <li>
                  To deliver targeted digital marketing campaigns (such as Meta Ads) if you opt-in.
                </li>
                <li>
                  To communicate with you regarding your web architecture, n8n pipeline, or server configurations.
                </li>
              </ul>
            </section>

            {/* 4. Sharing Your Information */}
            <section id="information" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black font-rajdhani text-white uppercase tracking-wider">
                4. Sharing Your Information
              </h2>
              <div className="w-12 h-[2px] bg-[#ffff39] mb-4" />
              <p>
                We do not sell your personal data. We may share your data with trusted third-party vendors who perform services for us, such as cloud hosting providers (e.g., AWS, Cloudflare, Google Cloud), workflow automation tools (e.g., n8n), and scheduling platforms (e.g., Calendly).
              </p>
            </section>

            {/* 5. Data Security */}
            <section id="data-security" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black font-rajdhani text-white uppercase tracking-wider">
                5. Data Security
              </h2>
              <div className="w-12 h-[2px] bg-[#ffff39] mb-4" />
              <p>
                We implement industry-standard security measures to protect your personal information. However, please remember that no method of transmission over the internet or electronic storage is 100% secure.
              </p>
            </section>
            {/* 6. Contact Us */}
            <section id="contact" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black font-rajdhani text-white uppercase tracking-wider">
                6. Contact Us
              </h2>
              <div className="w-12 h-[2px] bg-[#ffff39] mb-4" />
              <p>
                If you have questions or comments about this notice, you may email us or contact us at our headquarters in Peshawar, Pakistan.
              </p>
            </section>
          </article>
          
        </div>

      </div>
    </section>
  );
}