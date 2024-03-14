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
      },
    },
    screens: {
      'sm': {'min': '350px', 'max': '844px'},
      'md': {'min': '845px', 'max': '1044px'},
      'lg': {'min': '1045px', 'max': '1250px'},
      'xl': {'min': '1251px', 'max': '1550px'},
      '2xl': {'min': '1551px'},
    },
  },
  
  plugins: [],
};
export default config;
