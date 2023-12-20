/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },
      colors:{
        navbar:{
          100: '#27374D',
          200: '#2C3E50'
        },
        'japanese-indigo' : '#27374D',
        'dark-electric-blue' : '#526D82',
        'cadet-blue-crayola' : '#9DB2BF',
        'azureish-white' : '#DDE6ED',
      }
    },
  },
  plugins: [],
});

