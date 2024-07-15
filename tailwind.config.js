/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: ['#86C232'],
        secondary: ['#6B6E70'],
        tertiary: ['#474B4F'],
      }
    },
  },
  plugins: [],
}

