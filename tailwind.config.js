/** @type {import('tailwindcss').Config} */

const thema = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  darkMode:"class",
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
          100: "#ef7674",
          200: "#ec5766",
          300: "#da344d",
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
