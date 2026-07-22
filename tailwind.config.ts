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
        parchment: "#FAF8F5",
        "parchment-dark": "#F5EDE3",
        crimson: "#B91C1C",
        "crimson-light": "#FEE2E2",
        charcoal: "#242120",
        ink: "#5C5755",
        
        // Remap existing colors to avoid regressions
        blush: "#F5EDE3",
        rose: "#FAF8F5",
        pink: "#B91C1C",
        deep: "#991B1B",
        charcoal_legacy: "#EBE5DF",
        muted: "#7C726E",
        light: "#FAF8F5",
        border: "#E4DCCE",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
        handwritten: ["var(--font-caveat)", "cursive"],
      },
      boxShadow: {
        "pink-sm": "0 8px 28px rgba(197, 168, 128, 0.06)",
        "pink-md": "0 12px 40px rgba(197, 168, 128, 0.08)",
        "pink-lg": "0 16px 48px rgba(197, 168, 128, 0.1)",
        glow: "0 8px 24px rgba(197, 168, 128, 0.15)",
        glass:
          "0 1px 1px rgba(255, 255, 255, 0.04) inset, 0 8px 32px rgba(12, 8, 7, 0.4)",
        "glass-lg":
          "0 1px 1px rgba(255, 255, 255, 0.06) inset, 0 20px 60px rgba(12, 8, 7, 0.5)",
        island: "0 8px 32px rgba(0, 0, 0, 0.6)",
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
