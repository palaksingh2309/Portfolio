import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: "#FDE8EF",
        rose: "#F4AECB",
        pink: "#E8679A",
        deep: "#C23F74",
        charcoal: "#1E1B20",
        muted: "#6B6470",
        light: "#FAF2F5",
        border: "#F0D6E4",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      boxShadow: {
        "pink-sm": "0 8px 28px rgba(232,103,154,0.12)",
        "pink-md": "0 12px 40px rgba(232,103,154,0.14)",
        "pink-lg": "0 16px 48px rgba(232,103,154,0.18)",
        glow: "0 8px 24px rgba(194,63,116,0.28)",
        glass:
          "0 1px 1px rgba(255,255,255,0.7) inset, 0 8px 32px rgba(194,63,116,0.10)",
        "glass-lg":
          "0 1px 1px rgba(255,255,255,0.8) inset, 0 20px 60px rgba(194,63,116,0.16)",
        island: "0 8px 32px rgba(30,27,32,0.14)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      animation: {
        blob: "morphBlob 8s ease-in-out infinite alternate",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        morphBlob: {
          from: { borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%" },
          to: { borderRadius: "40% 60% 45% 55% / 60% 40% 55% 45%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
