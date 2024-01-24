/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#ffd700",
        primary: "#bad0e3",
        "primary-light": "#dbe9f6",
        "primary-dark": "#8eb4d9",
        secondary: "#feee7d",
        "secondary-light": "#fefa9c",
        paper: "#f5f5f5",
      }
    },
  },
  plugins: [],
}

