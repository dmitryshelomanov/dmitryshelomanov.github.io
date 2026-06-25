/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "body-bg": "var(--color-body-bg)",
        "list-bg": "var(--color-list-bg)",
        "list-border": "var(--color-list-border)",
        "list-font": "var(--color-list-font)",
        accent: "var(--color-accent)",
        link: "var(--color-link)",
      },
      fontFamily: {
        heading: ["Roboto", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
