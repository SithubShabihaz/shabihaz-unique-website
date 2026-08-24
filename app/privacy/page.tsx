import Image from "next/image";
import PrivacyPage from '@/components/privacy/PrivacyPage';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <main>
      <PrivacyPage />
      <Footer />
      {/* Aapke baaki components yahan aayenge */}
    </main>
  );
}
