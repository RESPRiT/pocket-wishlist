import Header from "./components/Header";
import Menu from "./components/Menu";
import ListView from "./components/ListView";
import { WishlistProvider } from "./contexts/WishlistContext";
import { useTheme } from "./contexts/ThemeContext.tsx";
import { cn } from "./lib/utils.ts";

function App() {
  const { isTransitioning } = useTheme();

  // TODO: Disable scroll on mobile
  // TODO: Fix reset to top on scroll disable
  return (
    <main className="flex justify-center selection:bg-select">
      <div className="striped fixed -z-50 h-full w-full invert" />
      <div
        className={cn(
          "flex w-full flex-col clamp-[px,4,10,md,lg] lg:max-w-5xl",
          // disable scroll while changing theme
          isTransitioning && "h-screen overflow-y-hidden",
        )}
      >
        <WishlistProvider>
          <Header />
          <Menu />
          <ListView />
        </WishlistProvider>
      </div>
    </main>
  );
}

export default App;
