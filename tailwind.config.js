/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./css/**/*.css",
    "./js/**/*.js",
    "./img/**/*.{jpg,png,svg}",
    "./node_modules/**/*.css"
  ],
  theme: {
    extend: {
      colors: {
        bg_color: '#252525',
        black: '#000000',
        red_btn: '#f95d51'
      },
      fontFamily: {
        'noto': ["Noto Serif Traditional Chinese", "serif"],
        'Bonche' : ["Bonche"],
        'mak' : ["Mak"],
        'cezanne' : ['Cezanne']
      },
      boxShadow: {
        '3xl': '0 0 7px 7px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}

