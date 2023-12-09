/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        'brndcolor': '#362ABD',
        'textColor': '#2B2B2B',
      },
      backgroundColor: {
        'mainBg': '#F7F6F9'
      },
      backgroundImage: {
        'heroBg': "url('/public/assets/herobg.png')"
      }
    },
  },
  plugins: [],
};