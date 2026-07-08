/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/**/*.{html,js}',
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        rubikRegular: "Rubik Regular",
        rubikBold: "Rubik Bold",
        railwayBold: "RaleWay Bold",
        railwayExtraBold: "RaleWay Extra Bold",
      },
      colors: {
        spacialPink: "#EB5569",
        spacialPurple: "#4285F4",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
    },
    screens: {
      'xs': "360px",
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
  },
  plugins: [
    function ({addVariant}) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
}