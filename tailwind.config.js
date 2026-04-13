/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        crono: {
          green: '#00C896',
          'green-dark': '#00A87E',
          'green-light': '#E6FAF5',
          sidebar: '#FAFAFA',
          bg: '#F4F5F7',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}


