/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        '200%': '200% 200%',
      },
      animation: {
        'marquee-up': 'marqueeUp 55s linear infinite',
        'marquee-down': 'marqueeDown 55s linear infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'spin-slower': 'spin-slower 25s linear infinite',
        'spin-slowest': 'spin-slowest 30s linear infinite',
        'fade-down': 'fadeDown 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-up-delay': 'fadeUp 0.6s ease-out 0.2s forwards',
        'fade-up-delay-2': 'fadeUp 0.6s ease-out 0.4s forwards',
        'fade-up-delay-3': 'fadeUp 0.6s ease-out 0.6s forwards',
        'fade-up-delay-4': 'fadeUp 0.6s ease-out 0.8s forwards',
        'gradient': 'gradient 3s ease infinite',
        'pulse-slow': 'pulse-slow 2s ease-in-out infinite',
        'float-particle': 'floatParticle 5s linear infinite',
        'scroll-custom': 'scroll 1.5s ease-in-out infinite',
        'bounce-custom': 'bounce 2s ease-in-out infinite',
        'ping-custom': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        marqueeUp: {
          '0%': { transform: 'translate3d(0, 0%, 0)' },
          '100%': { transform: 'translate3d(0, -50%, 0)' },
        },
        marqueeDown: {
          '0%': { transform: 'translate3d(0, -50%, 0)' },
          '100%': { transform: 'translate3d(0, 0%, 0)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'spin-slower': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        'spin-slowest': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        fadeDown: {
          from: { opacity: '0', transform: 'translateY(-30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' },
        },
        floatParticle: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)', opacity: '0' },
          '50%': { transform: 'translateY(-30px) translateX(15px)', opacity: '0.5' },
        },
        scroll: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(8px)', opacity: '0' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        ping: {
          '75%, 100%': { transform: 'scale(2)', opacity: '0' },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.perspective-1200': {
          perspective: '1200px',
          'perspective-origin': 'center top',
        },
        '.transform-divi-3d': {
          transform: 'rotateX(18deg) rotateY(-12deg) rotateZ(4deg)',
          'transform-style': 'preserve-3d',
        },
      });
    },
  ],
};
