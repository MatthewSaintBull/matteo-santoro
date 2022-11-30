/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    listStyleType: {
      square: 'square'
    },
    extend: {
      keyframes: {
        fadeout: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        fadein: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        }
      },
      animation: {
        fadeout: 'fadeout 3s forwards',
        fadein: 'fadein 5s forwards'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
