const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        scrollX: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        scrollX: 'scrollX 5s linear infinite',
      },
      colors: {
        header: {
          background: "#004F5D", // Deep Teal
          text: "#FFFFFF", // White
        },
        hero: {
          orange: "#FF7F11", // Vibrant Orange
          white: "#FFFFFF",
          // White
        },
        cta: {
          button: "#FF7F11", // Orange
          text: "#FFFFFF",
          hover: "#e76c00",
          ctaBorder: "#e76c00", // White
        },
        body: {
          background: "#f2f3f3", // Soft Cream
          text: "#333333", // Charcoal Gray
        },
        cards: {
          background: "#FFFFFF", // White
          shadow: "rgba(0, 0, 0, 0.1)", // Subtle shadow (CSS usage)
        },
        footer: {
          background: "#F7F7F7", // Deep Teal
          text: "#444444",
          link: "#004F5D", // Deep Teal
          hover: "#FF7F11", // White
        },
      },
    },
  },
  plugins: [flowbite.plugin(), require("tailwind-scrollbar-hide")],
};
