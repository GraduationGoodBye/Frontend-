import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background_grey: "#D9D9D9",
        background_light: "#F5eae3",
        primary: "#DD4E24",
        secondary: "#c4b960",
      },
      fontFamily: {
        super: ["Supernormal"],
      },
    },
  },
  plugins: [],
};
export default config;
