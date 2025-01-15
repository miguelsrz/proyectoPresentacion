/** @type {import('tailwindcss').Config} */
export default {
  content: 
  ["./src/**/*.{js,jsx,ts,tsx}","./index.html"],
  theme: {
    extend: { 
      fontFamily: {
        schabo: ['Schabo', 'serif'],
        dmsans: ['DM Sans', 'sans-serif'],
      },
      backgroundImage: {
        'parallax': 'url("./public/assets/pngGradient.png)'
      }
    
  }
  },
  // eslint-disable-next-line no-undef
  plugins: ["prettier-plugin-tailwindcss", require('tailwindcss-motion')],
}

