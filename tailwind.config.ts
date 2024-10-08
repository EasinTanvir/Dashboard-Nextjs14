import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Adds a custom grid template column size
        "200px": "repeat(4, 180px)",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        topBar: "#000000",
        selectColor: "#2271B1",
        hoverColor: "#388FE6",
        submenu: "#4169E1",
        btnColor: "#0172F4",
      },
      minHeight: {
        custom: "calc(100vh - 56px)",
        custom2: "calc(100vh - 88px)",
        custom3: "calc(100vh - 120px)",
      },
      maxHeight: {
        custom: "calc(100vh - 56px)",
        custom2: "calc(100vh - 88px)",
        custom3: "calc(100vh - 120px)",
      },
      width: {
        sidebar: "48px",
      },
    },
  },
  plugins: [],
};
export default config;
