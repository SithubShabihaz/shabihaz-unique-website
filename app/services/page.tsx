import Image from "next/image";
import ServiceHeroSection from '@/components/services/ServiceHeroSection';

import dynamic from 'next/dynamic';
const SpecializeServices = dynamic(() => import('@/components/services/SpecializeServices'));
const ServicePageCards = dynamic(() => import('@/components/services/ServicePageCards'));
const HowWeWork = dynamic(() => import('@/components/services/HowWeWork'));
const FaqSection = dynamic(() => import('@/components/services/FaqSection'));
const SocialSpecializeServices = dynamic(() => import('@/components/services/SocialSpecializeServices'));
const Footer = dynamic(() => import('@/components/Footer'));

export default function About() {
  return (
    <main>
      <ServiceHeroSection />
      <SpecializeServices />
      <ServicePageCards />
      <SocialSpecializeServices />
      <HowWeWork />
      <FaqSection />
      <Footer />
      {/* Aapke baaki components yahan aayenge */}
    </main>
  );
}
