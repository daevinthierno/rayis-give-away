/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./app/**/*.{html,js,jsx}",
    "./components/**/*.{html,js,jsx}",
    "./containers/**/*.{html,js,jsx}",
    "./pages/**/*.{html,js,jsx}",
    "./styles/**/*.{js,jsx}"
  ],
  theme: {
    fontFamily:{
      sans:['var(--font-poppins)','sans-serif'],
      serif:['var(--font-cormorant-upright)','serif'],
    },
    colors:{
      transparent:colors.transparent,
      primary:{
        100:'#DBD7FE',
        200:'#B7B1FD',
        300:'#9289FA',
        400:'#756AF6',
        500:'#473BF0',
        600:'#342BCE',
        700:'#251DAC',
        800:'#18128B',
        900:'#0F0B73',
      },
      secondary:{
        100:'#d1d1d4',
        200:'#a3a4a9',
        300:'#76767e',
        400:'#484953',
        500:'#1a1b28',
        600:'#151620',
        700:'#101018',
        800:'#0a0b10',
        900:'#050508',
      },
      tertiary:'#00040F',
      white:'#fafafa',
      black:'#101018',
      dimWhite:'#d1d1d4' //color.secondary.100
    },
    extend: {},

  },
  plugins: [],
}
