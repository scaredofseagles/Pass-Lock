//const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      warmblue: {
        500: '#007580',
        700: '#005d66'
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
