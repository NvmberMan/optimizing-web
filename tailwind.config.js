/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inria Sans"', 'sans-serif'],
      },
      colors: {
        primary: "#1a1a2e", // Dark Navy
        secondary: "#e94560", // Accent Red/Pink
        gold: "#ffd700", // Gold
      },
    },
  },
  plugins: [],
}
