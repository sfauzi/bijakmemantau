/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-donker': '#131378',
        'ungu': '#30309f',
        'abu': '#383632'
      },
    },
    fontFamily: {
      Manrope: "Manrope, sans-serif",
      Mansalva: "Mansalva, sans-serif",
      Rubik: "Rubik, sans-serif",
    },

  },
  plugins: [],
}