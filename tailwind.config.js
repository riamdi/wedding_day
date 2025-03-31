/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./css/**/*.css",
    "./js/**/*.js",
    "./img/**/*.{jpg,png,svg}"
  ],
  theme: {
    extend: {
      colors: {
        bg_color: '#252525',
        black: '#000000'
      },
      fontFamily: {
        'noto': ["Noto Serif Traditional Chinese", "serif"],
        'Bonche' : ["Bonche"],
        'mak' : ["Mak"],
        'cezanne' : ['Cezanne']
      },
    },
  },
  plugins: [],
}

