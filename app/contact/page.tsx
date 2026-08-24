import Image from "next/image";
import ContactHeroSection from '@/components/contact/ContactHeroSection';

import dynamic from 'next/dynamic';
const ContactForm = dynamic(() => import('@/components/contact/ContactForm'));
const CalendlyContactSection = dynamic(() => import('@/components/contact/CalendlyContactSection'));
const ContactBottomSection = dynamic(() => import('@/components/contact/ContactBottomSection'));
const Footer = dynamic(() => import('@/components/Footer'));

export default function Contact() {
  return (
    <main>
      <ContactHeroSection />
      <ContactForm />
      <CalendlyContactSection />
      <ContactBottomSection />
      <Footer />
      {/* Aapke baaki components yahan aayenge */}
    </main>
  );
}
