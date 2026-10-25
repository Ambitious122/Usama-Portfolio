/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B1F36",
        deep: "#08172A",
        line: "#24415F",
        hv: "#FFC800",
        mist: "#E8EEF5",
        dim: "#93A9C1",
      },
      fontFamily: {
        head: ['"Barlow Condensed"', "Arial Narrow", "sans-serif"],
        body: ['"IBM Plex Sans"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
