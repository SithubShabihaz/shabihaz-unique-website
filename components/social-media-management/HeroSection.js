'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

/**
 * CloudPulseGrid Background Animation Component
 */
function CloudPulseGrid({
  accent = "#e2ff3d",
  background = "#000000",
  gridSpacing = 64,
  pulseCount = 16,
  speed = 1.6,
  className = "",
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width, height, cols, rows;
    let raf;

    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function hexToRgb(hex) {
      const h = hex.replace("#", "");
      const b = parseInt(h.length === 3 ? h.split("").map((c) => c + c).join("") : h, 16);
      return [(b >> 16) & 255, (b >> 8) & 255, b & 255];
    }
    const [ar, ag, ab] = hexToRgb(accent);
    const rgb = `${ar},${ag},${ab}`;

    const DIRS = [
      { x: 1, y: 0 },
      { x: -1, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: -1 },
    ];

    function makePulse() {
      const gx = Math.floor(Math.random() * (cols + 1));
      const gy = Math.floor(Math.random() * (rows + 1));
      const dir = DIRS[Math.floor(Math.random() * DIRS.length)];
      return {
        x: gx * gridSpacing,
        y: gy * gridSpacing,
        dir,
        trail: [],
        flashUntil: 0,
      };
    }

    let pulses = [];
    let flashes = [];

    function resetPulses() {
      pulses = Array.from({ length: pulseCount }).map(makePulse);
      flashes = [];
    }

    function resize() {
      const rect = canvas.getBoundingClientRect();
      width = rect.width || window.innerWidth;
      height = rect.height || window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(width / gridSpacing);
      rows = Math.ceil(height / gridSpacing);
      resetPulses();
    }

    resize();
    window.addEventListener("resize", resize);

    function chooseDir(current) {
      const roll = Math.random();
      if (roll < 0.55) return current;
      const perp = DIRS.filter(
        (d) => d.x !== -current.x || d.y !== -current.y
      ).filter((d) => d.x !== current.x || d.y !== current.y);
      return perp[Math.floor(Math.random() * perp.length)] || current;
    }

    function frame() {
      ctx.clearRect(0, 0, width, height);

      // ================= GRID LINES & CIRCLES OPACITY SET TO 0.1 =================
      ctx.strokeStyle = `rgba(${rgb},0.1)`;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      for (let c = 0; c <= cols; c++) {
        ctx.moveTo(c * gridSpacing, 0);
        ctx.lineTo(c * gridSpacing, height);
      }
      for (let r = 0; r <= rows; r++) {
        ctx.moveTo(0, r * gridSpacing);
        ctx.lineTo(width, r * gridSpacing);
      }
      ctx.stroke();

      // Intersection dots / circles with 0.1 opacity
      ctx.fillStyle = `rgba(${rgb},0.1)`;
      for (let c = 0; c <= cols; c++) {
        for (let r = 0; r <= rows; r++) {
          ctx.beginPath();
          ctx.arc(c * gridSpacing, r * gridSpacing, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // intersection flashes
      flashes = flashes.filter((f) => performance.now() < f.t);
      flashes.forEach((f) => {
        const life = (f.t - performance.now()) / 500;
        ctx.beginPath();
        ctx.fillStyle = `rgba(${rgb},${(0.8 * life).toFixed(2)})`;
        ctx.arc(f.x, f.y, 5 + (1 - life) * 10, 0, Math.PI * 2);
        ctx.fill();
      });

      pulses.forEach((p) => {
        if (!prefersReduced) {
          const prevGX = Math.round(p.x / gridSpacing);
          const prevGY = Math.round(p.y / gridSpacing);

          p.x += p.dir.x * speed;
          p.y += p.dir.y * speed;

          const gx = p.x / gridSpacing;
          const gy = p.y / gridSpacing;
          const nearIntersectionX = Math.abs(gx - Math.round(gx)) < speed / gridSpacing;
          const nearIntersectionY = Math.abs(gy - Math.round(gy)) < speed / gridSpacing;

          if (
            (p.dir.x !== 0 && nearIntersectionX) ||
            (p.dir.y !== 0 && nearIntersectionY)
          ) {
            const snappedX = Math.round(gx) * gridSpacing;
            const snappedY = Math.round(gy) * gridSpacing;
            if (snappedX !== prevGX * gridSpacing || snappedY !== prevGY * gridSpacing) {
              p.x = snappedX;
              p.y = snappedY;
              flashes.push({ x: p.x, y: p.y, t: performance.now() + 450 });
              p.dir = chooseDir(p.dir);
            }
          }

          p.trail.push({ x: p.x, y: p.y });
          if (p.trail.length > 12) p.trail.shift();

          if (p.x < -20 || p.x > width + 20 || p.y < -20 || p.y > height + 20) {
            Object.assign(p, makePulse());
          }
        }

        // draw trail
        for (let i = 0; i < p.trail.length; i++) {
          const t = p.trail[i];
          const alpha = ((i + 1) / p.trail.length) * 0.9;
          ctx.beginPath();
          ctx.fillStyle = `rgba(${rgb},${alpha.toFixed(2)})`;
          ctx.arc(t.x, t.y, 2.5, 0, Math.PI * 2);
          ctx.fill();
        }

        // glowing head
        ctx.beginPath();
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 14);
        grad.addColorStop(0, `rgba(${rgb},1)`);
        grad.addColorStop(1, `rgba(${rgb},0)`);
        ctx.fillStyle = grad;
        ctx.arc(p.x, p.y, 14, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = `rgba(${rgb},1)`;
        ctx.arc(p.x, p.y, 3.5, 0, Math.PI * 2);
        ctx.fill();
      });

      raf = requestAnimationFrame(frame);
    }

    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [accent, gridSpacing, pulseCount, speed]);

  return (
    <div
      className={className}
      style={{ position: "absolute", inset: 0, background, overflow: "hidden" }}
    >
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }} />
    </div>
  );
}

export default function SMMVaultSection() {
  return (
    <section className="relative w-full bg-[#090A0F] py-16 pt-40 flex items-center justify-center overflow-hidden font-poppins">

      {/* ================= BACKGROUND ANIMATION LAYER ================= */}
      <CloudPulseGrid accent="#e2ff3d" background="#090A0F" />

      {/* Main Content Wrapper - Strictly Centered */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center text-center">
        
        {/* Top Glowing Badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-[#ffff39]/40 bg-black/40 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,57,0.15)]">
          <span className="text-xs md:text-sm font-bold tracking-widest text-[#ffff39] uppercase">
            PROVEN RESULTS
          </span>
        </div>

        {/* Main Bold Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[50px] font-black text-white tracking-tight leading-[0.95] mb-6 font-rajdhani">
          Explore Our Social Media<br className="hidden sm:block" /> <span className="text-[#ffff39]">Management Portfolio</span>.
        </h1>

        {/* Subheading Text */}
        <p className="text-base md:text-lg text-white font-light max-w-2xl mx-auto leading-relaxed mb-10">
          Welcome to our Social Media Management Portfolio. Dive into our social media marketing case studies to see exactly why brands trust our professional social media management to scale their digital presence.
        </p>

        {/* Action Buttons Container */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
          {/* Primary Solid Button */}
          <Link 
            href="/portfolio/social-media-management#social-projects"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#ffff39] hover:bg-[#e6e625] text-black font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
          >
            View Case Studies
          </Link>
          
          {/* Secondary Outline Glow Button */}
          <Link 
            href="https://cal.com/shabihaz/discovery-call"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-[#ffff39]/50 text-white font-bold text-sm bg-transparent shadow-[0_0_15px_rgba(255,255,57,0.1)] hover:bg-[#ffff39]/10 hover:border-[#ffff39] hover:shadow-[0_0_25px_rgba(255,255,57,0.25)] transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            Book Discovery Call
          </Link>
        </div>

      </div>

    </section>
  );
}