/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary : "#151515",
        secondery : "#707070",
      },
    },
    container:{
      center:true,
      padding:"16px",
    },
    fontFamily: {
      primary : ["Roboto", "sans-serif"],
    }
  },
  plugins: [require('daisyui'),],
}
