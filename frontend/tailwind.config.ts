import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#F0F0F3',
      black: '#000000',
      blue: {
        100: '#E5E7F6',
        800: '#27339A',
        950: '#191F54',
      },
      indigo: {
        400: '#7481F6',
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    dropShadow: {
      button: '0 4px 14px rgba(0, 0, 0, 0.25)',
      menu: '0 4px 50px rgba(0, 0, 0, 0.4)',
    }
  },
  plugins: [],
};
export default config;
