/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color': 'rgb(0, 31, 63)',
        'white': '#fff',
        'color-1': '#FF8F0F',
        'transparent-bg': 'rgba(0, 0, 0, 0.8)',

        'text': '#FF8F0F'
      },
      screens: {
        'medium-pc' : {'max': '1300px'},
        'small-pc': {'max': '950px'},
        'tablet': {'max': '700px'},
        'phone': {'max': '500px'},
        'small-phone': {'max': '450px'},
      },
    },
  },


  plugins: [],
}



