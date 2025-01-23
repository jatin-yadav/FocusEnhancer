/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: {
          100: "#eba232",
        },
        lightpurple: {
          100: "#c052f1",
        },
      },
    },
  },
  plugins: [],
};
