'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; 
import GradientButtonJustForHeader from './GradientButtonJustForHeader.js';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
    
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigationData = [
        { label: 'HOME', href: '/' },
        { label: 'ABOUT', href: '/about' },
        { label: 'SERVICES', href: '/services' },
        { 
            label: 'PORTFOLIO', 
            href: '/portfolio',
            subItems: [
                { label: 'Social Media Management', href: '/portfolio/social-media-management' }
            ]
        },
        { label: 'CONTACT', href: '/contact' },
    ];

    const toggleMobileDropdown = (label, e) => {
        e.preventDefault();
        setMobileDropdownOpen(mobileDropdownOpen === label ? null : label);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full mobile-first-container ${scrolled
            ? 'bg-black/80 backdrop-blur-md border-b border-white/[0.06] py-3'
            : 'bg-black border-b border-transparent py-5'
            }`}>
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-12">

                    {/* Logo Brand Segment */}
                    <div className="flex-shrink-0 flex items-center">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/Home%20Page%20Images/shabihaz%20logo.webp`}
                            alt="Shabihaz Logo"
                            width={40}
                            height={40}
                            unoptimized={true}
                            className="transition-transform duration-700 ease-in-out hover:rotate-[360deg] cursor-pointer"
                        />
                        <Link href="/" className="flex items-center gap-1 group focus:outline-none">
                            <span className="font-poppins text-3xl ml-5 font-bold tracking-tight text-[#ffff39] transition-colors duration-200">
                                SHABIHAZ
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Central Links Menu */}
                    <nav className="hidden md:flex items-center gap-2 lg:gap-4">
                        {navigationData.map((item) => {
                            const isActive = pathname === item.href;
                            
                            return (
                                <div key={item.label} className="relative group shrink-0">
                                    <Link
                                        href={item.href}
                                        className={`px-2 py-2 text-[14px] font-medium rounded-md transition-all duration-200 focus:outline-none flex flex-row items-center flex-nowrap whitespace-nowrap ${
                                            isActive ? 'text-[#ffff39]' : 'text-gray-300 hover:text-[#ffff39]'
                                        }`}
                                    >
                                        <span className="font-rajdhani font-light flex flex-row items-center flex-nowrap shrink-0 whitespace-nowrap gap-1">
                                            {item.label}
                                            {item.subItems && (
                                                <svg className={`w-3 h-3 shrink-0 transition-transform duration-300 group-hover:rotate-180 ${isActive ? 'text-[#ffff39]' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            )}
                                        </span>
                                    </Link>

                                    {/* DESKTOP HOVER DROPDOWN MENU */}
                                    {item.subItems && (
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-in-out z-50">
                                            <div className="bg-[#090A0F]/95 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-2 min-w-[220px] shadow-[0_20px_40px_rgba(0,0,0,0.8)] flex flex-col gap-1 relative overflow-hidden">
                                                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#ffff39]/50 to-transparent" />
                                                
                                                {item.subItems.map(subItem => (
                                                    <Link 
                                                        key={subItem.label} 
                                                        href={subItem.href}
                                                        className="text-gray-300 hover:text-[#ffff39] hover:bg-white/[0.03] px-4 py-2.5 rounded-xl text-sm font-light font-rajdhani transition-all duration-200 whitespace-nowrap block"
                                                    >
                                                        {subItem.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </nav>

                    {/* Desktop Right CTA Segment */}
                    <div className="hidden md:flex items-center gap-4">
                        <GradientButtonJustForHeader />
                    </div>

                    {/* Mobile Action Hamburger Toggle Switch */}
                    <div className="flex md:hidden items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.05] focus:outline-none transition-all duration-200"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg className="h-6 w-6 transform rotate-0 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6 transform rotate-0 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>

                </div>
            </div>

            {/* Mobile Drawer Menu Layer overlay */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-black border-b border-white/[0.08] ${isOpen ? 'max-h-[100vh] opacity-100 visibility-visible' : 'max-h-0 opacity-0 visibility-hidden pointer-events-none'
                    }`}
                id="mobile-menu"
            >
                <div className="px-4 pt-2 pb-6 space-y-2 bg-black flex flex-col">
                    {navigationData.map((item) => {
                        const isActive = pathname === item.href;
                        const isDropdownOpen = mobileDropdownOpen === item.label;

                        return (
                            <div key={item.label} className="w-full flex flex-col">
                                <div className="flex items-center justify-between">
                                    <Link
                                        href={item.href}
                                        className={`flex-1 block px-3 py-2.5 rounded-lg text-[14px] font-medium text-base hover:bg-white/[0.02] transition-all ${
                                            isActive ? 'text-[#ffff39]' : 'text-gray-400 hover:text-[#ffff39]'
                                        }`}
                                        onClick={() => !item.subItems && setIsOpen(false)}
                                    >
                                        <span className="font-rajdhani font-light">{item.label}</span>
                                    </Link>
                                    
                                    {/* MOBILE DROPDOWN TOGGLE BUTTON */}
                                    {item.subItems && (
                                        <button 
                                            onClick={(e) => toggleMobileDropdown(item.label, e)}
                                            className="p-3 text-gray-400 hover:text-[#ffff39] transition-colors"
                                        >
                                            <svg className={`w-4 h-4 transform transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-[#ffff39]' : 'rotate-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                    )}
                                </div>

                                {/* MOBILE DROPDOWN CONTENT */}
                                {item.subItems && (
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out pl-6 pr-2 ${
                                        isDropdownOpen ? 'max-h-40 opacity-100 mt-1 mb-2' : 'max-h-0 opacity-0'
                                    }`}>
                                        <div className="flex flex-col gap-1 border-l border-white/[0.1] pl-3 py-1">
                                            {item.subItems.map(subItem => (
                                                <Link 
                                                    key={subItem.label} 
                                                    href={subItem.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className="text-gray-400 hover:text-[#ffff39] py-2 text-sm font-light font-rajdhani transition-colors"
                                                >
                                                    {subItem.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}

                    {/* Mobile Bottom Control Actions Spacer line split */}
                    <div className="h-[1px] bg-white/[0.08] my-4" />

                    <div className="grid grid-cols-1 gap-3 pt-2">
                        <Link
                            href="https://cal.com/shabihaz/discovery-call"
                            className="w-full font-rajdhani flex items-center justify-center px-4 py-2.5 rounded-lg bg-[#ffff39] text-sm font-light text-black transition-all"
                        >
                            Book A Discovery Call
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
