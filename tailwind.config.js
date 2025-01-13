/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Neue Haas Grotesk Display Pro"', 'sans-serif'], // Add your custom font
      },
    },
  },
  plugins: [],
}