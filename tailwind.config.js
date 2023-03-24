/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*'],
  theme: {
    extend: {
      colors: {
      },
      fontFamily: {
        'Mulish': ['Mulish', 'sans-serif']
      },
      keyframes: {
        'scroll': {
          '0%': {transform: 'translateY(0%)'},
          '100%': { transform: 'translateY(-50%)' },
        }
      },
      animation: {
        'scroll':'scroll 30s linear infinite'
      }
    },
  },
  plugins: [],
}
