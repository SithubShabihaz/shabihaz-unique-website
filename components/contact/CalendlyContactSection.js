'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Calendar, ShieldCheck, Clock } from 'lucide-react';

export default function StandaloneCalendlySection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Cal.com secure initialization logic shifted inside useEffect for Next.js compatibility
    (function (C, A, L) {
      let p = function (a, ar) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal; let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {}; cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if(typeof namespace === "string"){
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    // Setting configurations via window object to prevent React linting reference errors
    window.Cal("init", "discovery-call", {origin:"https://app.cal.com"});
    window.Cal.config = window.Cal.config || {};
    window.Cal.config.forwardQueryParams = true;

    window.Cal.ns["discovery-call"]("inline", {
      elementOrSelector:"#my-cal-inline-discovery-call",
      config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"},
      calLink: "shabihaz/discovery-call",
    });

    window.Cal.ns["discovery-call"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
     
  }, []);

  if (!isMounted) {
    return (
      <div className="w-full bg-black py-20 min-h-[600px] flex items-center justify-center">
        <div className="text-slate-500 font-mono text-xs uppercase tracking-widest animate-pulse">
          Initializing secure automation tunnel...
        </div>
      </div>
    );
  }

  return (
    <section id="calendly-section" className="relative w-full bg-black py-16 md:pt-28 px-0 overflow-hidden font-poppins border-t border-white/[0.03]">

      {/* ================= BACKGROUND TECH RADIANCE ================= */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-[#ffff39]/5 blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-purple-600/5 blur-[160px] pointer-events-none z-0" />

      {/* Main Container Core Box Framework */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 z-10 relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        {/* ================= LEFT SIDEBOARD PANEL: FORCED TO TOP ================= */}
        <div className="lg:col-span-4 text-left flex flex-col justify-start items-start space-y-6 self-start">

          {/* Live Booking Badge */}
          <div className="inline-flex items-center gap-2 bg-neutral-900 border border-white/[0.06] rounded-full px-4 py-1.5 w-fit shadow-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffff39] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ffff39]"></span>
            </span>
            <span className="text-[10px] font-mono tracking-widest text-white uppercase font-bold">
              LIVE BOOKING
            </span>
          </div>

          {/* Headings and Description */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-rajdhani leading-none">
              Let's Map Out <br />
              <span className="text-[#ffff39] drop-shadow-[0_0_30px_rgba(255,255,57,0.1)]">Your Execution Plan.</span>
            </h2>
            <p className="text-xs sm:text-sm text-white font-light leading-relaxed max-w-md">
              Select an available date to connect directly with our team. We'll use this session to evaluate your current digital infrastructure and outline a clear, scalable path forward for your brand.
            </p>
          </div>

          {/* Quick Technical Highlights Trust Pins */}
          <div className="space-y-3 pt-2 w-full border-t border-white/[0.05]">
            <div className="flex items-center gap-3 text-white">
              <Clock className="w-4 h-4 text-[#ffff39]" />
              <span className="text-xs font-mono uppercase tracking-wider">15-MIN DISCOVERY CALL</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <ShieldCheck className="w-4 h-4 text-[#ffff39]" />
              <span className="text-xs font-mono uppercase tracking-wider">TAILORED TECHNICAL INSIGHTS</span>
            </div>
          </div>

        </div>

        {/* ================= RIGHT SIDEBOARD PANEL: STANDALONE CAL.COM INTERFACE ================= */}
        <div className="lg:col-span-8 w-full overflow-hidden self-start">

          {/* Inline Webkit & Cal.com Internal Padding Overrides */}
          <style dangerouslySetInnerHTML={{
            __html: `
            #my-cal-inline-discovery-call {
              overflow: hidden !important;
              scrollbar-width: none !important;
              -ms-overflow-style: none !important;
            }
            #my-cal-inline-discovery-call::-webkit-scrollbar {
              display: none !important;
              width: 0 !important;
              height: 0 !important;
            }
            /* Targeting Cal.com iframe internal wrapper to eliminate excess top/bottom gaps */
            #my-cal-inline-discovery-call iframe {
              margin-top: -10px !important;
              margin-bottom: -10px !important;
            }
          `}} />

          {/* Cal.com Target Container - Responsive Height */}
          <div 
            id="my-cal-inline-discovery-call" 
            className="w-full rounded-2xl h-[650px] sm:h-[540px] lg:h-[480px]" 
            style={{ minWidth: '320px', overflow: 'hidden' }}
          ></div>

        </div>

      </div>
    </section>
  );
}
