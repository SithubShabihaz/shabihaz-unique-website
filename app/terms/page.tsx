import Image from "next/image";
import TermsCondition from '@/components/terms/TermsCondition'
import Footer from '@/components/Footer';

export default function About() {
  return (
    <main>
      <TermsCondition />
      <Footer />
      {/* Aapke baaki components yahan aayenge */}
    </main>
  );
}
