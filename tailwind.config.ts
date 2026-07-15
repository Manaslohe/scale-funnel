import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./animation/**/*.{js,ts,jsx,tsx,mdx}",
    "./container/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F7F5F1",
        secondry: "#202021",
        marquee: "#282762",
        about: "#F3ECE4",
        navy: "#282762",
        navylight: "#4F57A3",
        orange: "#DA7B31",
        orangelight: "#F0A878",
        cream: "#E9E7DF",
        dark: "#202021"
      },
    },
    fontFamily: {
      FoundersGrotesk: ["Space Grotesk", "sans-serif"],
      NeueMontreal: ["Inter", "sans-serif"],
    },
    screens: {
      xm: { max: "400px" },
      sm: { min: "401px", max: "768px" },
      md: { min: "769px", max: "1024px" },
      lg: { min: "1025px", max: "1490px" },
      xl: { min: "1491px" },
    }
  },
  plugins: [],
};
export default config;
