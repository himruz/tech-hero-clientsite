/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '0px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [require("daisyui")],
}
