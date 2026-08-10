'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import InstallApp from '@/components/InstallApp.js';
import { 
  ArrowUpRight, 
  Mail, 
  MapPin, 
  Phone 
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Contact', href: '/contact' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' }
    ]
  };

  const socialMedias = [
    { id: 'Instagram', alt: 'Instagram', href: 'https://www.instagram.com/shabihazdotcom', src: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Home%20Page%20Images/instagram.png` },
    { id: 'Facebook', alt: 'Facebook', href: 'https://www.facebook.com/shabihazdotcom', src: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Home%20Page%20Images/facebook.png` },
    { id: 'Youtube', alt: 'Youtube', href: 'https://www.youtube.com/@shabihazdotcom', src: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Home%20Page%20Images/youtube.png` },
    { id: 'Tiktok', alt: 'Tiktok', href: 'https://www.tiktok.com/@shabihazdotcom', src: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Home%20Page%20Images/tiktok.png` },
  ];

  return (
    // FIX 1: px-0 karke outer limits ko header layout border line ke sath match kiya hai.
    <footer className="relative w-full bg-black border-t border-white/[0.06] pt-15 pb-8 overflow-hidden font-poppins px-0 flex justify-center">
      
      {/* Background Ambient Glows */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full bg-[#ffff39]/5 blur-[100px] pointer-events-none" />

      {/* FIX 2: Dynamic padding framework 'px-4 sm:px-6 md:px-8' ko strictly matching layout standard par convert kiya.
          Yeh formula aapke design ko exact Header and Services blocks ke structural grids ke sath sync rakhega.
      */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Top Segment: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/[0.06]">
          
          {/* Brand Column */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Image
                src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/Home%20Page%20Images/shabihaz%20logo.webp`}
                alt="Shabihaz Logo"
                width={36}
                height={36}
                unoptimized={true}
                className="object-contain"
              />
              <span className="font-poppins text-2xl font-bold tracking-tight text-[#ffff39]">
                SHABIHAZ
              </span>
            </div>
            <p className="text-sm text-white leading-relaxed font-light">
              Delivering full-stack apps, secure cloud architectures, intelligent AI workflows, and digital marketing services.
            </p>
            
            {/* Custom Social Media Images */}
            <div className="flex items-center gap-3 pt-2">
              {socialMedias.map((social) => (
                <a 
                  key={social.id}
                  href={social.href} 
                  className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center hover:border-[#ffff39]/40 hover:bg-white/[0.06] hover:scale-105 transition-all duration-200"
                >
                  <Image 
                    src={social.src}
                    alt={social.alt}
                    width={18}
                    height={18}
                    unoptimized={true}
                    className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-[#ffff39] tracking-widest uppercase font-rajdhani">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white hover:text-[#ffff39] flex items-center gap-1 group transition-colors duration-200">
                    <span className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 text-[#ffff39] text-xs">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Info Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-[#ffff39] tracking-widest uppercase font-rajdhani">
              Get In Touch
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-white">
                <div className="text-[#ffff39] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shabihazofficial@gmail.com" className="hover:text-white transition-colors">shabihazofficial@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white">
                <div className="text-[#ffff39] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <Link href="https://wa.me/923336164736" className="font-light">+92 3336164736</Link>
              </li>
              <li className="flex items-center gap-3 text-sm text-white">
                <div className="text-[#ffff39] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="font-light">Peshawar, Pakistan</span>
              </li>
            </ul>
            <InstallApp />
          </div>

          {/* Start a Project Segment */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-[#ffff39] tracking-widest uppercase font-rajdhani">
              Start a Project
            </h4>
            <p className="text-xs text-white leading-relaxed font-light">
              Are you ready to automate your complex manual workflows or securely scale your business's core infrastructure? Let's talk today.
            </p>
            <div className="pt-2">
              <Link 
                href="https://cal.com/shabihaz/discovery-call"
                target="_blank"
                className="group relative inline-flex items-center justify-between w-full p-4 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.01] backdrop-blur-md border border-white/20 text-sm text-white font-medium shadow-md hover:border-[#ffff39]/30 transition-all duration-300"
              >
                <span>Book Discovery Call</span>
                <div className="p-1.5 rounded-xl bg-[#ffff39] text-black group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
                </div>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Segment: Copyright & Legal Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-white font-light">
          <div>
            &copy; {currentYear} <span className="text-[#ffff39] font-medium">SHABIHAZ</span>. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-[#ffff39] transition-colors duration-200">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}