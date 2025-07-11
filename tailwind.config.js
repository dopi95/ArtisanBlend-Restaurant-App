/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "gold" : "#FFD700",
        "darkgold" : "#B8860B",
        "card" : "#F5F5DC"
      }
    },
  },
  plugins: [],
}
