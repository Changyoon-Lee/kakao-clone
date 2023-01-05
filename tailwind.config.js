/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/*.html',
    './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      transitionProperty: {
        width: "width"
      }
    }
  },
  plugins: [],
}
