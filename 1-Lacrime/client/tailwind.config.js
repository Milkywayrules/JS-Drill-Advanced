/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors');

module.exports = {
  // mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      st: [
        'Inter',
        'Roboto',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      nd: [
        'Roboto',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',

        black: colors.black,
        white: colors.white,
        gray: colors.blueGray,
        // red: colors.red,
        orange: colors.orange,
        primary: colors.orange,
        yellow: colors.amber,
        // green: colors.emerald,
        // blue: colors.blue,
        // indigo: colors.indigo,
        // purple: colors.violet,
        // pink: colors.pink,
        rose: colors.rose,
      },
      screens: { fhd: '1920px' },
      width: { 21: '5.25rem' },
    },
  },
  variants: { extend: {} },
  plugins: [
    // require("@tailwindcss/jit"),
    // require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
