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
        secondary: ['#A3A6A8'],
        tertiary: ['#474B4F'],
        background: ['#10172A'],
      },
      fontFamily: {
        'Labora': ['Labora', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

