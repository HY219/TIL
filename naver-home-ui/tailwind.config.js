/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      minWidth: {
        '1280': '1280px'
      },
      borderWidth: {
        DEFAULT: '1px',
      },
      borderRadius: {
        '13': '13px',
        '33': '33px'
      },
      colors: {
        'blue': '#3a67ea'
      }
    },
  },
  plugins: [],
}

