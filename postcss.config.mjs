// postcss.config.mjs
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {},  // ✅ Tailwind v4 ke liye
  },
};

export default config;