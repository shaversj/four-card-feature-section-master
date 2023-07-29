/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '375px',
        'lg': '1440px'
      },
      colors: {
        'red': "hsl(0, 78%, 62%)",
        'cyan': "hsl(180, 62%, 55%)",
        "orange": "hsl(34, 97%, 64%)",
        "blue": "hsl(212, 86%, 64%)",
        "very-dark-blue": "hsl(234, 12%, 34%)",
        "grayish-blue": "hsl(229, 6%, 66%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        'Poppins': ['Poppins', "sans-serif"]
      }
    },
  },
  plugins: [],
}