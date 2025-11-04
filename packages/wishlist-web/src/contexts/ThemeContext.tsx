import { createContext, ReactNode, use, useEffect, useState } from "react";
import * as Color from "color-bits";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
  isLoading: boolean;
};

// TODO: Un-hardcode theme colors and timing
const KEY = "theme";
const DARK = "oklch(26.7% 0.048517 219.8)";
const LIGHT = "oklch(97.4% 0.026053 90.1)";
const DURATION = 250;
const system = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const ThemeContext = createContext<ThemeContextType>({
  theme: system(),
  setTheme: () => null,
  toggleTheme: () => null,
  isLoading: false,
});

const handleAnimateThemeColor = (
  metaTheme: Element,
  theme: Theme,
  progress = 0
) => {
  if (progress > 1) return;

  const start = Color.parse(theme === "light" ? DARK : LIGHT);
  const end = Color.parse(theme === "light" ? LIGHT : DARK);
  const duration = DURATION;

  let timeStart = 0;
  function step(timestamp: number) {
    if (timeStart === 0) timeStart = timestamp;
    // TODO: Add linear -> ease-in interpolation
    const progress = (timestamp - timeStart) / duration;

    const mix = Color.blend(start, end, Math.min(1, progress));
    metaTheme.setAttribute("content", Color.format(mix));

    if (progress > 1) return;
    requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem(KEY) as Theme) ?? system()
  );
  const [isLoading, setIsLoading] = useState(false);

  const metaTheme = document.querySelector(`meta[name="theme-color"]`);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    metaTheme?.setAttribute("content", theme === "light" ? LIGHT : DARK);
    localStorage.setItem(KEY, theme);
  }, [theme, metaTheme]);

  const set = (t: Theme) => {
    setIsLoading(true);
    if (!document.startViewTransition) {
      setTheme(t);
      setIsLoading(false);
      return;
    }

    // animate theme color change for supported browsers (e.g. Safari)
    if (metaTheme) handleAnimateThemeColor(metaTheme, t);

    document.startViewTransition(() => {
      setTheme(t);
      setIsLoading(false);
    });
  };

  const toggleTheme = () => {
    set(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext value={{ theme, setTheme: set, toggleTheme, isLoading }}>
      {children}
    </ThemeContext>
  );
};

export function useTheme() {
  const context = use(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme used outside of a ThemeProvider");
  }

  return context;
}
