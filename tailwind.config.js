/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily:{
        roboto:['Roboto', 'sans-serif'],
      },
    },
  },
  // plugins: [require("daisyui")],
  plugins: [require("daisyui")],
}
