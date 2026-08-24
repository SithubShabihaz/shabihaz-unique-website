'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Activity } from 'lucide-react';

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
        ctx.arc(f.x, f.y, 4 + (1 - life) * 6, 0, Math.PI * 2);
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
          if (p.trail.length > 10) p.trail.shift();

          if (p.x < -20 || p.x > width + 20 || p.y < -20 || p.y > height + 20) {
            Object.assign(p, makePulse());
          }
        }

        // draw trail (Smaller points)
        for (let i = 0; i < p.trail.length; i++) {
          const t = p.trail[i];
          const alpha = ((i + 1) / p.trail.length) * 0.8;
          ctx.beginPath();
          ctx.fillStyle = `rgba(${rgb},${alpha.toFixed(2)})`;
          ctx.arc(t.x, t.y, 1.4, 0, Math.PI * 2);
          ctx.fill();
        }

        // glowing head (Reduced size)
        ctx.beginPath();
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 8);
        grad.addColorStop(0, `rgba(${rgb},1)`);
        grad.addColorStop(1, `rgba(${rgb},0)`);
        ctx.fillStyle = grad;
        ctx.arc(p.x, p.y, 8, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = `rgba(${rgb},1)`;
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
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

export default function ServiceHeroSplitLayout() {
  return (
    /* Outermost frame - Pitch black setup matching your global signature system */
    <section className="relative w-full bg-black pt-32 pb-20 px-0 flex flex-col items-center overflow-hidden font-poppins">
      
      {/* ================= FULL SCREEN BACKGROUND ANIMATION ================= */}
      <CloudPulseGrid accent="#e2ff3d" background="#000000" />

      {/* Strict Width Sync Grid Framework - Handles perfect margins across all screen states */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 z-10 flex flex-col items-center text-center">
        
        {/* ================= CENTERED CONTENT COLUMN ================= */}
        <div className="w-full space-y-6 flex flex-col items-center">
          
          {/* Top Mini Badge Pill */}
          <div className="inline-flex items-center gap-2 bg-neutral-900 border border-white/[0.06] rounded-full px-4 py-1.5 w-fit shadow-md">
            <Activity className="w-3.5 h-3.5 text-[#ffff39]" />
            <span className="text-[10px] font-mono tracking-widest text-white uppercase font-bold">
              Our Services
            </span>
          </div>

          {/* Centered Headline Core */}
          <div className="space-y-4 max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight font-rajdhani leading-[1.1]">
              Scale Your Potential Through <span className="text-[#ffff39]">Innovative</span> Digital Solutions
            </h1>
            <p className="text-sm md:text-base text-white font-light leading-relaxed opacity-95">
              Beyond just code, we develop custom web applications and integrate smart AI automation solutions that actively streamline operations. Partner with us to build powerful digital experiences engineered to drive growth and set you apart.
            </p>
          </div>

          {/* Interactive Trigger CTA Button */}
          <div className="pt-2">
            <Link 
              href="/services#service-cards" 
              className="group/btn inline-flex items-center gap-2 bg-white text-black font-black text-sm px-8 py-4 rounded-full shadow-[0_4px_25px_rgba(255,255,255,0.15)] hover:bg-[#ffff39] hover:shadow-[0_4px_25px_rgba(255,255,57,0.3)] transition-all duration-300 transform active:scale-95 cursor-pointer"
            >
              <span>View Core Capabilities</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}