/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/public/*.html',
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
