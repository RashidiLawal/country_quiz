/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontWeight: {
      hairline: 100,
      "extra-light": 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      "extra-bold": 800,
      black: 900,
      "extra-black": 1100,
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      borderColor: {
        mbr: "#6066D0",
      },
      colors: {
        myColor: "#2F527B",
        lightGreen: "#6FCF97",
        darkerBlue: "#1D355D",
        lightWhite: " #F2F2F2",
        myYellow: "#F9A826",
        lightRed: "#EA8282",
        newLightGreen: "#60BF88",
        myIndigo: "#6066D0",
      },
      height: {
        98: "38rem",
        99: "40.8rem",
      },
      width: {
        98: "32rem",
      },
      dropShadow: {
        "3xl": "0px 4px 24px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const fonWeigtUtil = {
        ".weight": {
          fontWeight: "fontWeight(10rem)",
        },
      };
      addUtilities(fonWeigtUtil);
    }),
  ],
};
