/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line import/no-extraneous-dependencies
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Kumbh Sans', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      'dark-cyan': 'hsl(185, 75%, 39%)',
      'very-dark-desaturated-blue': 'hsl(229, 23%, 23%)',
      'dark-grayish-blue': 'hsl(227, 10%, 46%)',
      'dark-gray': 'hsl(0, 0%, 59%)',
    },
  },
  plugins: [],
};
