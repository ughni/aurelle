import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F8F5F1",
        surface: "#EDE5DC",
        champagne: "#E8D8C8",
        nude: "#D5BFAE",
        brown: "#756052",
        espresso: "#302722",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: { page: "1360px" },
    },
  },
  plugins: [],
};
export default config;
