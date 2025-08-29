import Header from "./components/Header";
import Menu from "./components/Menu";
import ListView from "./components/ListView";

function App() {
  return (
    <main className="flex justify-center">
      <div className="mx-10 w-full max-w-5xl">
        <Header />
        <Menu />
        <ListView />
      </div>
    </main>
  );
}

export default App;
