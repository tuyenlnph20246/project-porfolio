/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ".src/pages/admin/**.{js}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}