/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,ts}"],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: "#085F78",
          "teal-muted": "#0a6f85",
          cyan: "#79D1D9",
          lime: "#D9ED92",
          surface: "#f4fafb",
        },
      },
      fontFamily: {
        sans: [
          "Nunito",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
