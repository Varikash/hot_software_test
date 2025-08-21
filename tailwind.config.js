/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
      },
      screens: {
        'mobile': {'max': '360px'},
      },
    },
  },
  plugins: [],
}
