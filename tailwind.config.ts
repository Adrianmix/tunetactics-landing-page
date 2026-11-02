import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0C",
        surface: "#141418",
        "surface-2": "#1C1C22",
        bone: "#F2EDE4",
        "text-muted": "#8C887E",
        "signal-lime": "#D4F24A",
        "hot-coral": "#FF6B4A",
        "electric-violet": "#9B7BFF",
        "ice-mint": "#5EEAD4",
        border: "rgba(242, 237, 228, 0.10)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
