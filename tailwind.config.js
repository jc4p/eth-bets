const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        ocean: '#BFD5EB',
        cherry: '#F7CFE1',
        orchid: '#D198C5',
        pink: '#F0A1BF',
        militaryBlue: '#274374',
        militaryGreen: '#545A3E',
        paleNude: '#F8D8C9',
        paleGreen: '#E0E6D6',
        paleBlue: '#E2EAEB',
        palePeach: '#FED1BD',
      },
      fontFamily: {
        sans: ['Ideal Sans A', 'Ideal Sans B', ...defaultTheme.fontFamily.sans],
        serif: ['Whitney A', 'Whitney B', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
