/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        bred: "hsl(12, 88%, 59)",
        bredLight: "hsl(12, 88%, 69%)",
        BredSupLight: "hsl(12, 88% 95%)",
        darkBlue: "hsl(228, 39%, 23%)",
        darkGrayishBlue: "hsl(227, 12%, 61%)",
        veryDarkBlue: "hsl(233, 12%, 13%)",
        veryPalRed: "hsl(13, 100%, 96%)",
        veryLightGray: "hsl(0, 5%, 95%)",
      },
    },
  },
  plugins: [],
};
