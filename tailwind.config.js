/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        'wave': "url('/src/assets/endless-constellation.svg')",
      },

      variants: {
        animation: ["motion-safe"]
      },

      colors: {
        'bg': '#121212',
        'primary': '#0096c7',
        'secondary': '#0077b6',
        'txt': '#FFFFFF99',
        'bright': '#FFFFFFDE',
        'elevation': '#FFFFFF0D',
        'elevation2': '#FFFFFF12',
        'transparent': '#FFFFFF00'
      },
    },
  },
  plugins: [],
}


