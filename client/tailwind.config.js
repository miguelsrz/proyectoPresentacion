/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
const flowbite = require("flowbite-react/tailwind");

export default {
  content: 
  ["./src/**/*.{js,jsx,ts,tsx}","./index.html", flowbite.content()],
  theme: {
    extend: { 
      fontFamily: {
        schabo: ['Schabo', 'serif'],
        dmsans: ['DM Sans', 'sans-serif'],
      },
      backgroundImage: {
        'parallax': 'url("./public/assets/pngGradient.png)'
      },
      colors: {
        purple: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
      },
    
  }
  },
  flowbite: {
    themes: false, // Desactiva los temas
  },
  // eslint-disable-next-line no-undef
  plugins: ["prettier-plugin-tailwindcss", require('tailwindcss-motion'), flowbite.plugin()],
}

