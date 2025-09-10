/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-donker': '#252591',
        'ungu': '#30309f',
        'dire-wolf': '#292727'
      },
    },
    fontFamily: {
      Manrope: "Manrope, sans-serif"
    },

  },
  plugins: [],
}