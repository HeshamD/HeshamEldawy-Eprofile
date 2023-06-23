/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      "vw-60": "60vw",
      "vw-19": "19vw",
      "vm-7": "7.8vm"
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      fontFamily: {
        serif: ['"Roboto Serif"', "serif"]
      }
    }
  },
  plugins: []
};
