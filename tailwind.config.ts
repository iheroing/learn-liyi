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
        reading: "38rem",
        shell: "62rem",
        prose: "38rem",
        lesson: "56rem",
      },
      colors: {
        paper: {
          DEFAULT: "#f4f2ec",
          elevated: "#faf9f5",
          soft: "#ebe8e0",
        },
        ink: {
          DEFAULT: "#1a1d21",
          muted: "#4a5058",
          faint: "#8b919a",
        },
        accent: {
          DEFAULT: "#0f6e6b",
          soft: "#148a86",
          wash: "rgba(15, 110, 107, 0.08)",
        },
        slate: {
          DEFAULT: "#3d4f66",
          wash: "rgba(61, 79, 102, 0.08)",
        },
        sage: {
          DEFAULT: "#3d4f66",
          wash: "rgba(61, 79, 102, 0.08)",
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
          "Cambria",
          "serif",
        ],
      },
      boxShadow: {
        soft: "0 1px 0 rgba(26, 29, 33, 0.04)",
        card: "0 1px 0 rgba(26, 29, 33, 0.06), 0 4px 16px rgba(26, 29, 33, 0.04)",
        lift: "0 2px 8px rgba(26, 29, 33, 0.06)",
      },
      letterSpacing: {
        kicker: "0.14em",
        caption: "0.08em",
      },
    },
  },
  plugins: [],
} satisfies Config;
