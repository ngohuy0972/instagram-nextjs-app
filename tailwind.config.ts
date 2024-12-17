import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fafafad9",
        foreground: "var(--foreground)",
        text: "#000000",
        textSecondary: "#b7b7b7",
        borderLine: "#b8b8b8",
      },
      fontFamily: {
        geistSans: ["Inter", "sans-serif"],
        geistMono: ["JetBrains Mono", "monospace"],
      },
      borderWidth: {
        none: "0",
        xs: "0.05rem",
        sm: "0.125rem",
        default: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl:": "1rem",
        "3xl": "1.5rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
} satisfies Config;
