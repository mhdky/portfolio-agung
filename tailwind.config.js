/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./index.html", "./resume/**/*.{html,js}", "./contact/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'tomato': '#EC1B09',
        'orange': '#FF9C1A',
        'body': '#F2F5F9',
        'black-transperant': '#00000070'
      },
      fontFamily: {
        'pacifico': ['Pacifico', 'cursive'],
        'raleway': ['Raleway', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      screens: {
        'sm-600': '600px',
        'lg-1200': '1200px',
        'lg-1180': '1180px',
      },
    },
  },
  plugins: [],
}

