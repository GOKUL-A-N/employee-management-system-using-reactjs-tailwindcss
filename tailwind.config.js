/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#22331d",
        secondary:"#d3f36b",
        tertiary: "#f1ede7",
        heading: "#24282c",
        text:"#939393",
        error: "#fa7576",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    plugins: [],
  }
}


