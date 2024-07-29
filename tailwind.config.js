/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      screens: {
        tall: { raw: "(min-height: 1100px)" },
      },
      fontFamily: {
        roboto: "Roboto",
      },
      colors: {
        frameDark: "#191921",
        frameLight: "#F2F1F2",
        frameBorder: "#2A2A31",
        bgDark: "#151517",
        bgLight: "rgb(96 158 235 / 50%)",
        buttonNav: "#3A6FF8",
        new: "#0ACF83",
        done: "#F24E1E",
        inProgress: "#29A0DC",
      },
    },
  },
  plugins: [],
};
