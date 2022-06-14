/** @type {import('tailwindcss').Config} */

const thema = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', ...thema.fontFamily.sans],
        montserrat: ['"Montserrat"', ...thema.fontFamily.sans],
      },
      colors: {
        "primary-light": "#f8f8f8",
        "primary-dark": "#191919",
        pinkish: {
          100: "#edb5f5",
          200: "#eb7ad4",
          300: "#e86ed0",
        },
        blueish: {
          100: "#e6f8f9",
          200: "#b1e8ed",
        },
      },
    },
  },
  plugins: [],
};
