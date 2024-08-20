/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: { transformOrigin: {
      "0": "0%",
    },
    rotate: {
      "y-180": "180deg",
    },
    transitionProperty: {
      transform: "transform",
    },},
  },
  plugins: [],
};

