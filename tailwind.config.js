/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "body-bg": "var(--color-body-bg)",
        "list-bg": "var(--color-list-bg)",
        "list-bg-strong": "var(--color-list-bg-strong)",
        "list-border": "var(--color-list-border)",
        "list-font": "var(--color-list-font)",
        accent: "var(--color-accent)",
        link: "var(--color-link)",
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
