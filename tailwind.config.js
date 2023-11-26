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
    extend: {},
  },
  plugins: [],
};
