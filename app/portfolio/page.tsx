import Image from "next/image";
import PortfolioHeroSection from '@/components/portfolio/PortfolioHeroSection';

import dynamic from 'next/dynamic';
const PortfolioPageProjectSection = dynamic(() => import('@/components/portfolio/PortfolioPageProjectSection'));
const PortfolioFeaturedSection = dynamic(() => import('@/components/portfolio/PortfolioFeaturedSection'));
const PortfolioTestimonialSection = dynamic(() => import('@/components/portfolio/PortfolioTestimonialSection'));
const PortfolioPageBottomSection = dynamic(() => import('@/components/portfolio/PortfolioPageBottomSection'));
const Footer = dynamic(() => import('@/components/Footer'));

export default function About() {
  return (
    <main>
      <PortfolioHeroSection />
      <PortfolioPageProjectSection />
      <PortfolioFeaturedSection />
      <PortfolioTestimonialSection />
      <PortfolioPageBottomSection />
      <Footer />
      {/* Aapke baaki components yahan aayenge */}
    </main>
  );
}
