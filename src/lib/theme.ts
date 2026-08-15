export type Theme = "light";

export const THEME_STORAGE_KEY = "theme";

export function getStoredTheme(): Theme | null {
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  return stored === "light" ? stored : null;
}

export function getSystemTheme(): Theme {
  return "light";
}

export function getInitialTheme(): Theme {
  return getStoredTheme() ?? getSystemTheme();
}

export function applyTheme(theme: Theme) {
  document.documentElement.classList.remove("dark");
  document.documentElement.dataset.theme = theme;
}
