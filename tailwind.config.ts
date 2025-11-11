import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0B1F2D",
          DEFAULT: "#0E6F63",
          light: "#8AD9C5"
        }
      },
      boxShadow: {
        "glow-green":
          "0 10px 30px rgba(14, 111, 99, 0.25), 0 4px 10px rgba(11, 31, 45, 0.25)"
      },
      fontFamily: {
        sans: ["'Poppins'", "ui-sans-serif", "system-ui"]
      }
    }
  },
  plugins: []
};

export default config;
