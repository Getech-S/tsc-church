import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // 1. Set the Font Family
      fontFamily: {
        sans: ["montserrat", "sans-serif"], // We will set this variable in Step 2
      },
      // 2. Set the Fluid Font Sizes (from your doc)
      fontSize: {
        // H1: Mobile 32px -> Desktop 56px
        h1: ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "62", letterSpacing: "-0.02em", fontWeight: "700" }],

        // H2: Mobile 26px (approx) -> Desktop 40px
        h2: ["clamp(1.625rem, 3vw, 2.5rem)", { lineHeight: "1.25", letterSpacing: "-0.02em", fontWeight: "600" }],

        // H3: Mobile 22px -> Desktop 32px
        h3: ["clamp(1.375rem, 2.5vw, 2rem)", { lineHeight: "1.3", letterSpacing: "-0.02em", fontWeight: "600" }],

        // H4: Mobile 18px -> Desktop 24px
        h4: ["clamp(1.125rem, 2vw, 1.5rem)", { lineHeight: "1.35", letterSpacing: "-0.02em", fontWeight: "600" }],

        // Body: 16px base
        body: ["1rem", { lineHeight: "1.6", fontWeight: "400" }],

        // Small: 14px
        small: ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }],

        // Button text
        btn: ["0.875rem", { lineHeight: "1.2", fontWeight: "600" }],
      },
      colors: {
        // ... your existing colors (keep these)
      },
    },
  },
  plugins: [],
};
export default config;