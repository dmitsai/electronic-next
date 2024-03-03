import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "main-top-img" : "url('../assets/icons/bg.svg')"
      },
      colors: {
        'main-top': '#4B76E4',
        'activity': '#737373',
        'category-title' : '#3E5DAF',
        'mid-center' : '#FFFFFF',
        'mid-end': '#E4ECFF',

      }
    },
  },
  plugins: [],
};
export default config;
