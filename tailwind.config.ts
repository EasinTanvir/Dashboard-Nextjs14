import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        topBar: "#1D2327",
        selectColor: "#2271B1",
        hoverColor: "#388FE6",
        submenu: "#151A1D",
      },
      minHeight: {
        custom: "calc(100vh - 56px)",
        custom2: "calc(100vh - 88px)",
      },
      maxHeight: {
        custom: "calc(100vh - 56px)",
      },
      width: {
        sidebar: "48px",
      },
    },
  },
  plugins: [],
};
export default config;
