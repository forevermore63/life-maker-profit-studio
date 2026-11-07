/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        peace: '#0ea5e9',
        surge: '#10b981',
        pure: '#f0fdf4',
      }
    },
  },
  plugins: [],
}
