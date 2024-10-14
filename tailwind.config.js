/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "onboardImage":"url('/pic2.jpg')",
    },
    },
  },
  plugins: [],
}