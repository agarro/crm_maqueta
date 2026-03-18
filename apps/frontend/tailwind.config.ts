import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--blue-600))",
        success: "hsl(var(--emerald-500))",
        warning: "hsl(var(--amber-500))",
        danger: "hsl(var(--red-500))",
      },
    },
  },
  plugins: [],
};
export default config;
