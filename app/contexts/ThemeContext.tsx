"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";

type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  // Leer preferencia guardada (default claro). Si no hay preferencia, forzar claro.
  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem("theme");
    const shouldBeDark = saved === "dark";

    if (!shouldBeDark) {
      // Forzar claro por defecto
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      setIsDark(false);
      return;
    }

    setIsDark(shouldBeDark);
  }, []);

  const toggleTheme = useCallback(() => {
    if (typeof window === "undefined") return;
    try {
      setIsDark((prev) => {
        const next = !prev;
        const html = document.documentElement;
        if (next) {
          html.classList.add("dark");
          localStorage.setItem("theme", "dark");
        } else {
          html.classList.remove("dark");
          localStorage.setItem("theme", "light");
        }
        console.log("[theme] toggled to:", next, "classList:", html.classList.value);
        return next;
      });
    } catch (e) {
      console.error("Error applying/saving theme:", e);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
