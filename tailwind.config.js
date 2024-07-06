
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#f19509",
        primaryDArk:"#e86f00",
        lightOrange: "#f1dabf",
        darkGray:"#1a1f2a",
        lightGray:"#272c35"
      },
      container:{
        center: true,
        padding: {
          DEFAULT:"1rem",
           sm:"2rem",
        }
      }
    },
  },
  plugins: [],
}

