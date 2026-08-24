import Image from "next/image";
import AboutHeroSection from '@/components/about/AboutHeroSection';

import dynamic from 'next/dynamic';
const AboutTech = dynamic(() => import('@/components/about/AboutTech'));
const AboutTeamSection = dynamic(() => import('@/components/about/AboutTeamSection'));
const AboutCard = dynamic(() => import('@/components/about/AboutCard'));
const Footer = dynamic(() => import('@/components/Footer'));

export default function About() {
  return (
    <main>
      <AboutHeroSection />
      <AboutTech />
      <AboutTeamSection />
      <AboutCard />
      <Footer />
      {/* Aapke baaki components yahan aayenge */}
    </main>
  );
}
