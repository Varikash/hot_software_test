/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
        'sofia': ['Sofia Sans', 'sans-serif'],
      },
      screens: {
        'mobile': {'max': '360px'},
        'tablet-s': {'min': '361px', 'max': '768px'},
        'tablet': {'min': '769px', 'max': '1024px'},
        'desktop-s': {'min': '1025px', 'max': '1366px'},
        'desktop': {'min': '1367px'},
      },
    },
  },
  plugins: [],
}
