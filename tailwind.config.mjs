import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('../assets/flight-school-name-location-keyword.jpg')",
      },
      fontFamily: {
        sans: ["Oswald Variable", ...defaultTheme.fontFamily.sans],
        sans1: ["Poppins", ...defaultTheme.fontFamily.sans],
        sans2: ["Raleway Variable", ...defaultTheme.fontFamily.sans],
        sans3: ["Exo 2 Variable", ...defaultTheme.fontFamily.sans],
        stock: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      colors: {
        primary: "#099a97",
        "primary-dark": "#055250",
        secondary: "#0de2de",
        accent: "#0cbfca",
        muted: "#e0fdfd",
        "dark-blue": "#09212b",
        "medium-blue": "#2cc0ff",
      },
      height: (theme) => ({
        "screen-1/2": "50vh",
        "screen-2/3": "66vh",
        "screen-1/3": "calc(100vh / 3)",
        "screen-3/4": "75vh",
        "screen-4/5": "80vh",
        "screen-mobile": "92vh", //depends on menu height
      }),
      keyframes: {
        "slow-zoom": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
        "fade-from-left": {
          "0%": { opacity: 0, transform: "translateX(-10%)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        "fade-from-right": {
          "0%": { opacity: 0, transform: "translateX(10%)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
      animation: {
        "slow-zoom": "slow-zoom 45s infinite",
        "fade-from-left": "fade-from-left 1s",
        "fade-from-right": "fade-from-right 1s",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
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
