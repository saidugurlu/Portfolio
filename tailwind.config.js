/** @type {import('tailwindcss').Config} */

const thema = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  darkMode: "class",
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
        typography: (theme) => ({
          DEFAULT: {
            css: {
              color: "#333",
              a: {
                color: "#e86ed0",
                "&:hover": {
                  color: "#edb5f5",
                },
              },
            },
          },
          dark: {
            css: {
              color: theme("colors.gray.100"),

              a: {
                color: theme("colors.purple.400"),
                "&:hover": {
                  color: theme("colors.purple.300"),
                },
              },
            },
          },
        }),
      },

      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: "#333",
            a: {
              color: "#e86ed0",
              "&:hover": {
                color: "#edb5f5",
              },
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.100"),

            a: {
              color: theme("colors.blue.400"),
              "&:hover": {
                color: theme("colors.red.300"),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
