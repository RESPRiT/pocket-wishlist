import { createContext, ReactNode, use, useEffect, useState } from "react";
import * as Color from "color-bits";

export type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
  isTransitioning: boolean;
};

// TODO: Un-hardcode theme colors and timing
const KEY = "theme";
const DARK = "oklch(26.7% 0.048517 219.8)";
const LIGHT = "oklch(97.4% 0.026053 90.1)";
const DURATION = 350;
const system = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

const ThemeContext = createContext<ThemeContextType>({
  theme: system(),
  setTheme: () => null,
  toggleTheme: () => null,
  isTransitioning: false,
});

const handleAnimateThemeColor = (
  metaTheme: Element,
  theme: Theme,
  progress = 0,
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
  const [theme, setTheme] = useState<Theme>(system());
  const [isTransitioning, setIsTransitioning] = useState(false);
  const metaTheme =
    typeof document !== "undefined"
      ? document.querySelector(`meta[name="theme-color"]`)
      : null;

  useEffect(() => {
    const cachedTheme = localStorage.getItem(KEY) as Theme;
    setTheme(cachedTheme ?? system());
    document.documentElement.setAttribute(
      "data-theme",
      cachedTheme ?? system(),
    );
    metaTheme?.setAttribute(
      "content",
      (cachedTheme ?? system()) === "light" ? LIGHT : DARK,
    );

    // set the theme if not currently in storage
    if (cachedTheme === null) localStorage.setItem(KEY, system());
  }, [metaTheme]);

  async function set(t: Theme) {
    setIsTransitioning(true);
    if (!document.startViewTransition) {
      setTheme(t);
      localStorage.setItem(KEY, t);
      setIsTransitioning(false);
      return;
    }

    // animate theme color change for supported browsers (e.g. Safari)
    if (metaTheme) handleAnimateThemeColor(metaTheme, t);

    // this call back fires _before_ the transition starts
    const transition = document.startViewTransition(() => {
      document.documentElement.setAttribute("data-theme", t);
      setTheme(t);
      localStorage.setItem(KEY, t);
    });
    await transition.finished;
    setIsTransitioning(false);
  }

  const toggleTheme = () => {
    set(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext
      value={{
        theme,
        setTheme: set,
        toggleTheme,
        isTransitioning,
      }}
    >
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
