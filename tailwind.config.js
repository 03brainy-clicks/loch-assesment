/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        loch:{
          black:"#19191A",
          white:"#F2F2F2"
        }
      }
    },
  },
  plugins: [],
}