import Header from "./components/Header";
import Menu from "./components/Menu";
import ListView from "./components/ListView";
import { WishlistProvider } from "./contexts/WishlistContext";
import { useTheme } from "./contexts/ThemeContext.tsx";
import { cn } from "./lib/utils.ts";

function App() {
  const { isTransitioning } = useTheme();

  // TODO: Disable scroll on mobile
  return (
    <main className="flex justify-center selection:bg-select">
      <div className="fixed -z-50 w-full h-full invert striped" />
      <div
        className={cn(
          `flex flex-col clamp-[px,4,10,md,lg] w-full lg:max-w-5xl`,
          // disable scroll while changing theme
          isTransitioning && "overflow-y-hidden h-screen"
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
