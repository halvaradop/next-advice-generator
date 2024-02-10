import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          DEFAULT: 'hsl(193, 38%, 86%)'
        },
        green: {
          DEFAULT: 'hsl(150, 100%, 66%)'
        },
        blue: {
          DEFAULT: 'hsl(217, 19%, 38%)',
          100: 'hsl(217, 19%, 24%)',
          200: 'hsl(218, 23%, 16%)'
        }
      },
      boxShadow: {
        dice: '0px 0px 50px 0px hsl(150, 100%, 66%)'
      }
    },
  },
  plugins: [],
};
export default config;
