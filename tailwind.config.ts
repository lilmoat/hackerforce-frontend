import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/landing/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        flash: "flash 0.9s ease-in-out 4",
      },
      keyframes: {
        flash: {
          "0%, 100%": { borderColor: "red" },
          "50%": { borderColor: "transparent" },
        },
      },
      screens: {
        "3xl": "1920px",
        "4xl": "2560px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darker: "#0d0d0d",
        dark: "#1a1a1a",
        red: "#b22222",
        "bright-red": "#ff3b3b",
        light: "#f5f5f5",
        white: "#ffffff",
        grey: "#333333",
        "light-grey": "#d3d3d3",
        accent: "#d89c6a",
        green: "#7fff00",
      },
      fontFamily: {
        orbitron: ["orbitron"],
        inconsolata: ["inconsolata"],
      },
    },
  },
  plugins: [],
} satisfies Config;
