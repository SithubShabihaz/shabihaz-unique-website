import Image from "next/image";
import HeroSection from '@/components/social-media-management/HeroSection';

import dynamic from 'next/dynamic';
const SocialProjects = dynamic(() => import('@/components/social-media-management/SocialProjects'));
const AutoCarousel = dynamic(() => import('@/components/social-media-management/AutoCarousel'));
const GraphSection = dynamic(() => import('@/components/social-media-management/GraphSection'));
const SocialBottom = dynamic(() => import('@/components/social-media-management/SocialBottom'));
const SocialReel = dynamic(() => import('@/components/social-media-management/SocialReel'));
const Footer = dynamic(() => import('@/components/Footer'));

export default function About() {
  return (
    <main>
      <HeroSection />
      <SocialProjects />
      <AutoCarousel />
      <SocialReel />
      <GraphSection />
      <SocialBottom />
      <Footer />
      {/* Aapke baaki components yahan aayenge */}
    </main>
  );
}
