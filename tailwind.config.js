/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      brightness: {
        20: '.20',
        175: '1.75',
      }
    },
    colors: {
      'dark': '#0a100d',
      'lightred': '#902923',
      'light': '#b9baa3',
      'grayish': '#d6d5c9',
      'darkred': '#a22c29',
      'white': '#ffffff'
    }

  },
  plugins: [],
}