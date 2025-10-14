import { useEffect, useState, useCallback } from "react";

type Theme = "light" | "dark";
const KEY = "theme";

const system = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem(KEY) as Theme | null;
    return saved ?? system();
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(KEY, theme);
  }, [theme]);

  const set = useCallback((t: Theme) => setTheme(t), []);
  return { theme, setTheme: set };
}
