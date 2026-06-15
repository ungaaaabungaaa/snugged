import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#17171b",
        muted: "#73737c",
        blush: "#e92d68",
        "blush-dark": "#c91f56",
        surface: "#f7f7f8",
        line: "#e7e7ea"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(18, 18, 22, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
