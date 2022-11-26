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
        fadein: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        expand: {
          '0%': {
            transform: 'scale(1,0)',
          },
          '100%': {
            transform: 'scale(1,1)',
          }
        }
      },
      animation: {
        fadeout: 'fadeout 3s forwards;',
        fadein: 'fadein 5s forwards',
        expand: 'expand 2s linear forwards'
      }
    },
  },
  plugins: [],
}
