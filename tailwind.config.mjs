import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        sans2: ["Raleway Variable", ...defaultTheme.fontFamily.sans],
        stock: ["ui-sans-serif", "system-ui", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
      },
      colors: {
        "dark-blue": "#09212b",
        "medium-blue": "#2cc0ff",
      },
      keyframes: {
        "slow-zoom": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        "slow-zoom": "slow-zoom 30s infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  safelist: [
    "[counter-set:_num_var(--num-graduates)]",
    "[counter-set:_num_var(--num-professionals)]",
    "lg:-translate-x-[calc(0*33.33%)]",
    "lg:-translate-x-[calc(1*33.33%)]",
    "lg:-translate-x-[calc(2*33.33%)]",
    "lg:-translate-x-[calc(3*33.33%)]",
    "lg:-translate-x-[calc(4*33.33%)]",
    "lg:-translate-x-[calc(5*33.33%)]",
    "lg:-translate-x-[calc(6*33.33%)]",
    "lg:-translate-x-[calc(7*33.33%)]",
    "lg:-translate-x-[calc(8*33.33%)]",
    "lg:-translate-x-[calc(9*33.33%)]",
    "-translate-x-[calc(0*100%)]",
    "-translate-x-[calc(1*100%)]",
    "-translate-x-[calc(2*100%)]",
    "-translate-x-[calc(3*100%)]",
    "-translate-x-[calc(4*100%)]",
    "-translate-x-[calc(5*100%)]",
    "-translate-x-[calc(6*100%)]",
    "-translate-x-[calc(7*100%)]",
    "-translate-x-[calc(8*100%)]",
    "-translate-x-[calc(9*100%)]",
    "bg-red-700",
    "bg-green-500",
  ],
};
