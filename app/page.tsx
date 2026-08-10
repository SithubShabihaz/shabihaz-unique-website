import Image from "next/image";
import HeroSection from '@/components/home/HeroSection';

import dynamic from 'next/dynamic';
const AboutSection = dynamic(() => import('@/components/home/AboutSection'));
const ServiceCards = dynamic(() => import('@/components/home/ServiceCards'));
const PortfolioGridProjectSection = dynamic(() => import('@/components/home/PortfolioGridProjectSection'));
const OurTechnologies = dynamic(() => import('@/components/home/OurTechnologies'));
const Footer = dynamic(() => import('@/components/Footer'));

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServiceCards />
      <PortfolioGridProjectSection />
      <OurTechnologies />
      <Footer />
      {/* Aapke baaki components yahan aayenge */}
    </main>
  );
}
