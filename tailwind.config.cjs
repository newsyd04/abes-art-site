/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poiret: ["Poiret One", "cursive"], // Add your custom font
        quicksand: ["Quicksand", "serif"], // Add your custom font
        comforter: ["Comforter Brush", "serif"], // Add your custom font
      },
    },
  },
  plugins: [],
};
