import Header from "./components/Header";
import Menu from "./components/Menu";
import ListView from "./components/ListView";
import { WishlistProvider } from "./contexts/WishlistContext";

function App() {
  return (
    <main className="flex justify-center selection:bg-select">
      <div className="fixed -z-50 w-full h-full invert striped"></div>
      <div className="flex flex-col clamp-[px,4,10,md,lg] w-full lg:max-w-5xl">
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
