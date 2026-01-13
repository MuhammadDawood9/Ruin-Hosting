import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        yellow: {
          400: "#FACC15",
        },
        zinc: {
          900: "#18181b",
          950: "#09090b",
        },
      },
      boxShadow: {
        'yellow-glow': '0 0 20px 0px rgba(250, 204, 21, 0.2)',
      }
    },
  },
  plugins: [],
};
export default config;