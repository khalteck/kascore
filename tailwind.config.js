/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "660px",
      // md: "768px",
      md: "1024px",
      lg: "1204px",
      xl: "1280px",
    },
    fontFamily: {
      exo: ["Exo 2", "sans-serif"],
      tek: ["Tektur", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        pitch: "url('/images/pitch.jpg')",
      },
    },
  },
  darkMode: "class", // Enable class-based dark mode
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
