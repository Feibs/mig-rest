/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "pale-blue" : "#F0F6FB",
        "light-blue" : "#BED9EF",
        "light-green" : "#C4F2DD",
        "gray" : "#898989",
        "teal" : "#379FB8",
      }
    },
  },
  plugins: [],
}
