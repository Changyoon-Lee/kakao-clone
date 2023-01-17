/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/*.html',
    './src/views/*.pug'],
  theme: {
    extend: {
      transitionProperty: {
        width: "width"
      }
    }
  },
  plugins: [],
}
