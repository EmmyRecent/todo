/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textColor: "hsl(198, 1%, 29%)",
        inputColor: "hsla(260, 2%, 25%, 0.7)",
        borderColor: "#fdcb6e",
        bgContainer: "#f1f5f8",
        background: "#ffeaa7",
      },

      fontFamily: {
        architects: ["Architects Daughter", "cursive"],
      },
    },
  },
  plugins: [],
};
