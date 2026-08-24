'use client';

import React, { useState } from 'react';
import {
  User, Mail, Phone, Settings, HelpCircle, MessageSquare,
  MapPin, Send, MessageCircle, AlertCircle
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactFormWithValidation() {
  // Master entry tracking states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    subject: '',
    message: ''
  });

  const socialMedias = [
    { id: 'Instagram', alt: 'Instagram', href: 'https://www.instagram.com/shabihazdotcom', src: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Home%20Page%20Images/instagram.png` },
    { id: 'Facebook', alt: 'Facebook', href: 'https://www.facebook.com/shabihazdotcom', src: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Home%20Page%20Images/facebook.png` },
    { id: 'Youtube', alt: 'Youtube', href: 'https://www.youtube.com/@shabihazdotcom', src: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Home%20Page%20Images/youtube.png` },
    { id: 'Tiktok', alt: 'Tiktok', href: 'https://www.tiktok.com/@shabihazdotcom', src: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Home%20Page%20Images/tiktok.png` },
  ];

  // Isolated field error log matrix state
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Identity or full name is required.';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters long.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Secure email endpoint endpoint is required.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please provide a valid structural email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'A concise message subject line is required.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Project log or message details are required.';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Please provide more details (minimum 15 characters required).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitSuccess(false);

    if (validateForm()) {
      setIsSubmitting(true);

      try {
        // Yahan apna Google Apps Script ka asli Web App URL paste karein
        const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyGB-OJ4aqBFJIoZhOsE_ZBevn5sCy8HtdKE26B-l47F8rmammQUOsU6PnpDgFiXLT1sg/exec';

        const response = await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          // Important: Google Apps Script mein CORS error se bachne ke liye text/plain lagana zaroori hai
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        // Check karein ke Google Apps Script ne 'success' return kiya hai ya nahi
        if (result.status === 'success' || result.result === 'success') {
          setSubmitSuccess(true);
          // Form clear karein
          setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            subject: '',
            message: ''
          });
        } else {
          console.error('Spreadsheet transmission failed:', result);
          alert('Transmission error. Please check your script URL or try again.');
        }
      } catch (error) {
        console.error('Network endpoint down:', error);
        alert('Server network error. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section className="relative w-full bg-black py-16 md:pt-28 px-0 flex items-center overflow-hidden font-poppins">

      {/* Background Cyber Blurs Layer */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#ffff39]/5 blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* FIXED: Changed items-start to items-stretch for equal heights */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">

        {/* ================= LEFT COLUMN: INFRASTRUCTURE CORE SPECS ================= */}
        {/* FIXED: Added h-full flex flex-col justify-center to vertically align with form height */}
        <div className="lg:col-span-5 h-full flex flex-col justify-center space-y-8 text-left py-4">

          <div className="space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#ffff39]">
              LET'S COLLABORATE
            </span>
            <h2 className="text-4xl mt-12 sm:text-5xl mt-5 font-black text-white tracking-normal font-rajdhani leading-13">
              Ready to Architect Your <span className="text-5xl text-[#ffff39]">Digital Future?</span>
            </h2>
            <p className="text-sm mt-12 text-white font-light leading-relaxed opacity-90">
              Reach out to discuss your custom web architecture, intelligent n8n workflows, or targeted marketing campaigns. We are here to engineer scalable solutions that directly accelerate your business.
            </p>
          </div>

          <div className="space-y-5">
            <div className="flex items-center mt-12 gap-4 group">
              <div className="w-11 h-11 rounded-xl bg-black border border-white/20 flex items-center justify-center text-white group-hover:text-[#ffff39] group-hover:border-[#ffff39]/30 transition-all shadow-md">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-sm font-bold  text-[#ffff39] font-rajdhani uppercase tracking-wider">Headquarters</h4>
                <p className="text-xs text-white font-light">Pakistan Peshawar</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-11 h-11 rounded-xl bg-black border border-white/20 flex items-center justify-center text-white group-hover:text-[#ffff39] group-hover:border-[#ffff39]/30 transition-all shadow-md">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-sm font-bold text-[#ffff39] font-rajdhani uppercase tracking-wider">WhatsApp</h4>
                <Link href="https://wa.me/923336164736" className="text-xs text-white font-light">+92 3336164736</Link>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-11 h-11 rounded-xl bg-black border border-white/20 flex items-center justify-center text-white group-hover:text-[#ffff39] group-hover:border-[#ffff39]/30 transition-all shadow-md">
                <Mail className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-sm font-bold text-[#ffff39] font-rajdhani uppercase tracking-wider">Email</h4>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shabihazofficial@gmail.com" className="text-xs text-white font-light">shabihazofficial@gmail.com</a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold mt-10 mb-4 text-[#ffff39] font-rajdhani uppercase tracking-wider">Follow Us</h4>
            <div className="flex items-center gap-3">
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
                    className="object-contain hover:opacity-100 transition-opacity"
                  />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* ================= RIGHT COLUMN: SECURED CLIENT ENTRY FORM CONSOLE ================= */}
        {/* FIXED: Added h-full and flex layout to outer and inner div */}
        <div className="lg:col-span-7 w-full h-full flex">

          <div className="w-full h-full bg-[#090909] border border-[#ffff39]/30 rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.95)] relative group hover:border-white/10 transition-all duration-300 text-left flex flex-col justify-center">

            <h3 className="text-xl sm:text-2xl font-black text-white font-rajdhani tracking-normal mb-8">
              Send Us a <span className="text-2xl text-[#ffff39]"> Message </span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>

              {/* Row 1: Full Name & Email Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono tracking-wider uppercase font-bold text-white flex items-center gap-1.5 pl-1">
                    <User className="w-3 h-3 text-[#ffff39]" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className={`w-full bg-black border rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/40 focus:outline-none transition-all ${errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/[0.20] focus:border-[#ffff39]/40'
                      }`}
                  />
                  {errors.name && (
                    <p className="text-[11px] text-red-400 flex items-center gap-1 mt-1 pl-1 font-light">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono tracking-wider uppercase font-bold text-white flex items-center gap-1.5 pl-1">
                    <Mail className="w-3 h-3 text-[#ffff39]" />
                    <span>Email Address *</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className={`w-full bg-black border rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/40 focus:outline-none transition-all ${errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/[0.20] focus:border-[#ffff39]/40'
                      }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-red-400 flex items-center gap-1 mt-1 pl-1 font-light">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

              </div>

              {/* Row 2: Phone Number & Service Selection Options Dropdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono tracking-wider uppercase font-bold text-white flex items-center gap-1.5 pl-1">
                    <Phone className="w-3 h-3 text-[#ffff39]" />
                    <span>Phone Number</span>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 98765 43210"
                    className="w-full bg-black border border-white/[0.20] rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#ffff39]/40 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono tracking-wider uppercase font-bold text-white flex items-center gap-1.5 pl-1">
                    <Settings className="w-3 h-3 text-[#ffff39]" />
                    <span>Service Interested In</span>
                  </label>
                  <div className="relative w-full">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full bg-black border border-white/[0.20] rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#ffff39]/40 cursor-pointer appearance-none"
                    >
                      <option className='text-white/40' value="">Select a service</option>
                      <option value="web-dev">Web Development</option>
                      <option value="ai-automation">AI Automation</option>
                      <option value="marketing">Digital Marketing</option>
                      <option value="database-architect">Database Architecting</option>
                      <option value="cloud-architect">Cloud Architecting</option>
                      <option value="wordpress-dev">Wordpress Development</option>
                      <option value="shopify-dev">Shopify Development</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/40 text-xs">▼</div>
                  </div>
                </div>

              </div>

              {/* Row 3: Subject Heading Info Package */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono tracking-wider uppercase font-bold text-white flex items-center gap-1.5 pl-1">
                  <HelpCircle className="w-3 h-3 text-[#ffff39]" />
                  <span>Subject *</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What is this regarding?"
                  className={`w-full bg-black border rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/40 focus:outline-none transition-all ${errors.subject ? 'border-red-500/50 focus:border-red-500' : 'border-white/[0.20] focus:border-[#ffff39]/40'
                    }`}
                />
                {errors.subject && (
                  <p className="text-[11px] text-red-400 flex items-center gap-1 mt-1 pl-1 font-light">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.subject}</span>
                  </p>
                )}
              </div>

              {/* Row 4: Message Logs Details Textarea Core Area */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono tracking-wider uppercase font-bold text-white flex items-center gap-1.5 pl-1">
                  <MessageSquare className="w-3 h-3 text-[#ffff39]" />
                  <span>Message *</span>
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project or inquiry..."
                  className={`w-full bg-black border rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/40 focus:outline-none transition-all resize-none ${errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-white/[0.20] focus:border-[#ffff39]/40'
                    }`}
                />
                {errors.message && (
                  <p className="text-[11px] text-red-400 flex items-center gap-1 mt-1 pl-1 font-light">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Success Signal Bar Alert Output Banner */}
              {submitSuccess && (
                <div className="w-full bg-[#ffff39]/10 border border-[#ffff39]/20 rounded-xl p-4 text-left">
                  <p className="text-xs text-[#ffff39] font-medium leading-relaxed font-mono">
                    ✓ Form Submitted Successfully!
                  </p>
                </div>
              )}

              {/* Submit Trigger Transmission Control Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group/btn inline-flex items-center justify-center gap-2 bg-white text-black font-black text-xs uppercase tracking-widest py-4 rounded-full shadow-lg hover:bg-[#ffff39] transition-all duration-300 transform active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer font-poppins"
                >
                  <span>{isSubmitting ? 'Transmitting Data...' : 'Send Message'}</span>
                  <Send className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </div>

            </form>

            {/* Subtle glow edge border alignment trace accent indicator */}
            <div className="absolute bottom-0 inset-x-16 h-px bg-gradient-to-r from-transparent via-[#ffff39]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
          </div>

        </div>

      </div>
    </section>
  );
}