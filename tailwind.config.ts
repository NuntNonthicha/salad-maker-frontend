import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["var(--font-poppins)"],
    },
    extend: {
      backgroundImage: {
        "card-recipe": "url('/images/backgroundCard.png')",
      },
      colors: {
        "default-yellow": "#F8B602",
        "dark-yellow": "#EAAC03",
        "light-yellow": "#FFEA75",
        "default-green": "#2FB62D",
        "dark-green": "#28A126",
        "default-red": "#FF3F56",
        "dark-red": "#ED374C",
        "default-gray": "#A098AE",
        "light-gray": "#FFF5F6",
      },
      borderRadius: {
        DEFAULT: "16px",
      },
    },
  },
  plugins: [],
};
export default config;
