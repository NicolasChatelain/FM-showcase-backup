/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-light-gray': '#c3c3c3',
        'custom-blue': '#00a3ff',
      }
    },
  },
  plugins: [],
}

