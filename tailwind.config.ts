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
          100: "rgba(71, 59, 240, 1)",
          50: "rgba(71, 59, 240, 0.2)",
        },
        secondary: {
          100: "rgba(249, 249, 249, 1)",
          50: "rgba(246, 246, 246, 1)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
