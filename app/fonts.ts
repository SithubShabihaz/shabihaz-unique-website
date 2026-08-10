// app/fonts.ts
import { Poppins, Rajdhani } from 'next/font/google';

// Poppins font ko configure karna
export const poppins = Poppins({
  subsets: ['latin'],      // Sirf Latin characters chahiye (size chota rahega)
  weight: ['400', '500', '600', '700'], // Normal, Medium, Semi-bold aur Bold
  variable: '--font-poppins', // CSS variable create karta hai
  display: 'swap',          // Pehle fallback font dikhega, load hote hi badal jayega
});

// Rajdhani font ko configure karna
export const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-rajdhani',
  display: 'swap',
});