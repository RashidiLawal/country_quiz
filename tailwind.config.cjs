/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        myColor: "#2F527B",
      },
      height: {
        98: "38rem",
      },
      width: {
        98: "28rem",
      },
      fontWeight: {
        blad: 1040
      },
    },
  },
  plugins: [
    plugin(function({addUtilities}){
      const fonWeigtUtil = {
        '.weight': {
          fontWeight: 'fontWeight(1100)'
        } 
      }
      addUtilities(fonWeigtUtil);
    })
  ],
};
