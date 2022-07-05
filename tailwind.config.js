
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ...colors,
        'footer-color': '#eaeaea'
      }
    },
  },
  variants: {},
  plugins: [require('tailwindcss-filters')],
  // xwind options
  xwind: {
    mode: 'objectstyles',
  },
}