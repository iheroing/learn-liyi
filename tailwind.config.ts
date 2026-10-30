import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        reading: "42rem",
      },
      colors: {
        paper: {
          DEFAULT: "#f7f3eb",
          elevated: "#fffdf8",
        },
        ink: {
          DEFAULT: "#1c1917",
          muted: "#57534e",
        },
        accent: {
          DEFAULT: "#9a3412",
        },
      },
      fontFamily: {
        sans: [
          "PingFang SC",
          "Hiragino Sans GB",
          "Microsoft YaHei",
          "Noto Sans SC",
          "Source Han Sans SC",
          "system-ui",
          "sans-serif",
        ],
        serif: [
          "Songti SC",
          "STSong",
          "Noto Serif SC",
          "Source Han Serif SC",
          "Georgia",
          "serif",
        ],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(28, 25, 23, 0.04), 0 8px 24px rgba(28, 25, 23, 0.04)",
      },
    },
  },
  plugins: [],
} satisfies Config;
