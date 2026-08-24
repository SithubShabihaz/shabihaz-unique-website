import React from 'react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="w-full bg-black py-16 md:pt-1">
      {/* Main Wrapper: 
        Exact same margins & padding as your header:
        - max-w-[1280px] mx-auto (Centers the section in the same grid)
        - px-4 sm:px-6 lg:px-8 (Same horizontal gutter spaces on all screen sizes)
      */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bordered Container */}
        <div className="w-full bg-black border border-white/20 rounded-3xl p-8 md:p-12 lg:p-16 shadow-lg flex flex-col items-center justify-center">
            
          {/* Content Column (Perfectly Centered) */}
          <div className="max-w-3xl text-center space-y-6 flex flex-col items-center justify-center">
            
            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-serif text-white leading-tight">
              Ready to build your own high-performance{' '}
              <span className="text-[#ffff39]">
                web experience?
              </span>
            </h2>

            {/* Description */}
            <p className="text-sm md:text-base text-white/90 font-light max-w-2xl leading-relaxed mx-auto">
              Book a complimentary 30-minute technical consultation. No hard selling—just an honest conversation about your custom code, WordPress, or Shopify project and whether we're the right engineering partner for you.
            </p>

            {/* CTA Link Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto">
              <Link 
                href="https://cal.com/shabihaz/discovery-call" // 🔥 Yahan apna booking/Calendly link laga dein
                className="w-full sm:w-auto bg-[#ffff39] text-[#2c3d25] font-bold px-8 py-3.5 rounded-full text-sm transition-all duration-300 shadow-md hover:scale-105 text-center block"
              >
                Book a Discovery Call
              </Link>

              <Link 
                href="/contact" // 🔥 Yahan apna booking/Calendly link laga dein
                className="w-full sm:w-auto bg-black border hover:bg-[#ffff39] border-white/30 text-white hover:text-black font-bold px-8 py-3.5 rounded-full text-sm transition-all duration-300 shadow-md hover:scale-105 text-center block"
              >
                Contact Our Team
              </Link>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}