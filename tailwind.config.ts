import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        church: {
          red: "#DD5F4C",
          gold: "#F5BE40",
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        caveat: ["var(--font-caveat)", "cursive"],
      },
      backgroundImage: {
        // The Metallic Gold Gradient
        "gradient-gold": "linear-gradient(180deg, #FFFFFF 0%, #F5BE40 46%, #FFFFFF 54%, #F5BE40 100%)",
      },
      fontSize: {
        // 108px size from your Figma
        'hero-huge': ['108px', { lineHeight: '112px', letterSpacing: '-2.62px' }],
      }
    },
  },
  plugins: [],
};

export default config;