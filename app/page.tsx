import Image from "next/image";
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ServiceCards from '@/components/home/ServiceCards';
import PortfolioGridProjectSection from '@/components/home/PortfolioGridProjectSection';
import OurTechnologies from '@/components/home/OurTechnologies';
import Footer from '@/components/Footer';

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
