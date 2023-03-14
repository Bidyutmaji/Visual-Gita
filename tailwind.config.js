/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mplus: ["M PLUS Rounded 1c"],
        },
      backgroundImage: {
        'gita': "url('../src/Images/bg-chapter-1.png')",
      },
    },
  },
  plugins: [],
}
