const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ], // remove unused styles in production
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        // prettier-ignore
        "waves": "url('/images/waves.svg')",
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: "#3182ce",
              "&:hover": {
                color: "#2c5282",
              },
            },
            img: {
              margin: "auto",
            },
          },
        },
      },
      colors: {
        "brand-blue": "#00abe9",
      },
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
    },
    fontFamily: {
      carter: ["Leckerli One", "sans-serif"],
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
