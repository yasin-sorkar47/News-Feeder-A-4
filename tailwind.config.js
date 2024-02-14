/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,js,tsx,jsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        clifford: "#da373d",
      },
    },
  },
  plugins: [],
};
