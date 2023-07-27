/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      keyframes: {
        rotate: {
          from: {
            rotate: "0deg",
          },

          "50%": {
            scale: "1 1.5",
          },

          to: {
            rotate: "360deg",
          },
        },
        animation: {
          "rotating-light": "rotate 20s infinite",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
