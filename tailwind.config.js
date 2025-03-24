/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      colors: {
        bg_color: '#252525'
      },
      fontFamily: {
        'noto': ["Noto Serif Traditional Chinese", "serif"],
        'Bonche' : ["Bonche"],
        'mak' : ["Mak"]
      },
    },
  },
  plugins: [],
}

