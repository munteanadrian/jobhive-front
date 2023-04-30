/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        themeBlue: "#3498DB",
        themeRed: "#E74C3C",
        themeGreen: "#2ECC71",
        themeGreenDark: "#27AE60",
        themeYellow: "#F1C40F",

        themeDark: "#2C3E50",
        themeLight: "#C0C0C0",
        themeMedium: "#818183",
        themeBackground: "#ECF0F1",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        "2xs": "0.5rem",
      },
    },
  },
  plugins: [],
};
