// app/layout.tsx
import type { Metadata } from "next";
import { poppins, rajdhani } from "./fonts";   // ← Yahan import kiya humne
import "./globals.css";
import Header from "@/components/Header.js";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";

export const metadata: Metadata = {
  title: "Shabihaz | Full Stack Developer & AI Automation Specialist",
  description: "Expert Full Stack Developer and AI Automation Specialist scaling web apps and custom agentic workflows.",

  // CORE OPENGRAPH CONFIGURATION
  openGraph: {
    title: "Shabihaz | Full Stack Developer & AI Automation Specialist",
    description: "Expert Full Stack Developer and AI Automation Specialist scaling web apps and custom agentic workflows.",
    url: "https://shabihaz.com",
    siteName: "Shabihaz Portfolio",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_MEDIA_URL}/Twitter%20%26%20OpenGraph%20Image/Shabihaz%20twitter%20card%20banner.png`, // Yeh image public folder mein honi chahiye
        width: 1200, // Standard size for high resolution cards
        height: 630,
        alt: "Shabihaz Professional Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Optional: Twitter Specific Cards
  twitter: {
    card: "summary_large_image",
    title: "Shabihaz | Full Stack Developer & AI Automation Specialist",
    description: "Expert Full Stack Developer and AI Automation Specialist.",
    images: [`${process.env.NEXT_PUBLIC_MEDIA_URL}/Twitter%20%26%20OpenGraph%20Image/Shabihaz%20twitter%20card%20banner.png`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${rajdhani.variable}`}>
      <body>
        <Header />
        <ServiceWorkerRegister />
        <main className="flex-1">   {/* ← YAHAN ADD KARO (main wrapper) */}
          {children}
        </main>
      </body>
    </html>
  );
}
