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
        shell: "72rem",
        prose: "46rem",
      },
      colors: {
        paper: {
          DEFAULT: "#f7f3eb",
          elevated: "#fffdf8",
          soft: "#f1ebe0",
        },
        ink: {
          DEFAULT: "#1c1917",
          muted: "#57534e",
          faint: "#a8a29e",
        },
        accent: {
          DEFAULT: "#9a3412",
          soft: "#c2410c",
          wash: "rgba(154, 52, 18, 0.08)",
        },
        sage: {
          DEFAULT: "#3f6212",
          wash: "rgba(63, 98, 18, 0.08)",
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
        card: "0 1px 3px rgba(28, 25, 23, 0.05), 0 12px 32px rgba(28, 25, 23, 0.06)",
        lift: "0 4px 16px rgba(28, 25, 23, 0.08)",
      },
    },
  },
  plugins: [],
} satisfies Config;
