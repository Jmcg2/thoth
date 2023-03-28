/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      grayscale: {
        60: "60%",
      },
      textShadow: {
        DEFAULT:
          "-1px -1px 0 var(--tw-shadow-color), 1px -1px 0 var(--tw-shadow-color), -1px 1px 0 var(--tw-shadow-color), 1px 1px 0 var(--tw-shadow-color)",
      },
      colors: {
        conjure: "#651a44",
        conjure2: "#9e236a",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
