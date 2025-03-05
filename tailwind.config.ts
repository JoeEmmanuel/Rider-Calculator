import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#1E1E1E",
          50: "#CBCBCB",
        },
        secondary: {
          100: "#FAFAFA",
          50: "#F7F7F7",
        },
        textColor: {
          100: "#3B3B3B",
          50: "#636363",
          25: "#9E9E9E",
        },
      },
    },
  },
  plugins: [],
};
export default config;
