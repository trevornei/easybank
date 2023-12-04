/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#2D314D',
        eCash: '#30C88F',
        mGrey: '#979797'
      },
    },
  },
  plugins: [],
}

