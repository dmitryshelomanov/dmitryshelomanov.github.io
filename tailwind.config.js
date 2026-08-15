/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "body-bg": "var(--color-body-bg)",
        "list-bg": "var(--color-list-bg)",
        "list-bg-strong": "var(--color-list-bg-strong)",
        "list-border": "var(--color-list-border)",
        "list-font": "var(--color-list-font)",
        link: "var(--color-link)",
        border: "var(--color-list-border)",
        input: "var(--color-list-border)",
        ring: "var(--color-link)",
        background: "var(--color-body-bg)",
        foreground: "var(--color-list-font)",
        primary: {
          DEFAULT: "var(--color-accent)",
          foreground: "var(--color-primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--color-list-bg)",
          foreground: "var(--color-list-font)",
        },
        muted: {
          DEFAULT: "var(--color-list-bg-strong)",
          foreground: "var(--color-list-font)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          foreground: "var(--color-primary-foreground)",
        },
        "accent-secondary": "var(--color-accent-secondary)",
        "accent-success": "var(--color-accent-success)",
        "accent-warm": "var(--color-accent-warm)",
        "accent-danger": "var(--color-accent-danger)",
        card: {
          DEFAULT: "var(--color-list-bg)",
          foreground: "var(--color-list-font)",
        },
      },
      borderRadius: {
        xl: "calc(var(--radius) - 8px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        brutal: "var(--color-brutal-shadow)",
      },
      fontFamily: {
        heading: ["Tungsten-Bold", "Oswald", "Roboto", "sans-serif"],
        body: ["DINNextW05-Medium", "Noto Sans", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
