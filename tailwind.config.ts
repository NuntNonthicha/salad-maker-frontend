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
      boxShadow: {
        "default-shadow": "0px 4px 8px rgba(55, 62, 68, 0.15)",
        "dark-shadow": "0px 1px 10px rgba(0, 0, 0, 0.15)",
        "footer-shadow": "11px -14px 16px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
