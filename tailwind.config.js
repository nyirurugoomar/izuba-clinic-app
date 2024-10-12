/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "onboardImage":"url('/onboarding-img.png')",
    },
    },
  },
  plugins: [],
}