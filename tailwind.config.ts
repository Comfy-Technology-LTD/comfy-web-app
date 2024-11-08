import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        buttoncolor: '#18ba32',
        lightgray: '#f9f9f9',
      },
      variants: {
        animation: ['responsive', 'motion-safe', 'motion-reduce']
      },
      animation: {
        'animate-bounce': 'bounce 6s linear infinite',
      }
    },
  },
  plugins: [],
};
export default config;
