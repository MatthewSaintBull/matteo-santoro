/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    listStyleType:{
      square: 'square'
    },
    extend: {
      keyframes: {
        fadeout: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
      },
      animation: {
        fadeout: 'fadeout 3s forwards;',
      }
    },
  },
  plugins: [],
}
