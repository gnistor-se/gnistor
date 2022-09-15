/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    screens: {
      'sm': '576px',
      'md': '960px',
      'md': '1020px',
    },
    extend: {
      colors: {
        back: "#FFFCF7",
        primary: "#F85C3A",
        secondary: "#FDC6C6",
        opace: "#F6F6F6",
        dark: "#181818",
      }
    },
  },
  plugins: [],
}
