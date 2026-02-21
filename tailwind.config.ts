import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#020617",
        midnight: "#0B1220",
        graphite: "#0F172A",
        ember: {
          50: "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          500: "#EF4444",
          600: "#DC2626",
          700: "#B91C1C"
        },
        volt: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          400: "#FBBF24",
          500: "#F59E0B"
        }
      },
      boxShadow: {
        neon: "0 0 0 1px rgba(250, 204, 21, 0.25), 0 18px 70px rgba(250, 204, 21, 0.18)",
        ember: "0 0 0 1px rgba(239, 68, 68, 0.25), 0 18px 70px rgba(239, 68, 68, 0.18)",
        crisp: "0 18px 60px rgba(0,0,0,0.55)"
      }
    },
  },
  plugins: [],
} satisfies Config;
