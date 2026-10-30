import type { Config } from "tailwindcss";

const c = (name: string) => `rgb(var(--c-${name}) / <alpha-value>)`;

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: c("ink"),
        royal: { DEFAULT: c("royal"), deep: c("royal-deep"), soft: c("royal-soft") },
        flame: { DEFAULT: c("flame"), deep: c("flame-deep") },
        mist: c("mist"),
        paper: c("paper"),
        lotus: c("lotus"),
      },
      fontFamily: {
        display: ["'Newsreader Variable'", "Georgia", "serif"],
        sans: ["'Figtree Variable'", "system-ui", "sans-serif"],
      },
      maxWidth: { page: "76rem" },
      keyframes: {
        breathe: {
          "0%,100%": { transform: "scale(0.82)", opacity: "0.55" },
          "50%": { transform: "scale(1.08)", opacity: "0.15" },
        },
        rise: {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        breathe: "breathe 9s ease-in-out infinite",
        rise: "rise 0.9s cubic-bezier(.2,.7,.2,1) both",
      },
    },
  },
  plugins: [],
};
export default config;
