/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#E4E4E4",
        // "gray-50": "#EFE6E6",
        // "gray-100": "#DFCCCC",
        // "gray-500": "#5E0000",
        "primary-100": "#F0475F",
        "primary-200": "#E55C56",
        "primary-300": "#AB0000",
        "primary-500": "#800000",
        // "secondary-400": "#FFCD5B",
        // "secondary-500": "#FFC132",
      },
      backgroundImage: (theme) => ({
        // "gradient-yellowred":
        //   "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        // "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        // evolvetext: "url('./assets/EvolveText.png')",
        // abstractwaves: "url('./assets/AbstractWaves.png')",
        // sparkles: "url('./assets/Sparkles.png')",
        // circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}