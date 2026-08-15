import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from "react";
import { applyTheme, type Theme } from "./theme";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const lightTheme: Theme = "light";
  const value = useMemo<ThemeContextValue>(
    () => ({
      theme: lightTheme,
      toggleTheme: () => {},
    }),
    [lightTheme],
  );

  useEffect(() => {
    applyTheme(lightTheme);
  }, [lightTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}
