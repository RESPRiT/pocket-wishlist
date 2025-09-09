import Header from "./components/Header";
import Menu from "./components/Menu";
import ListView from "./components/ListView";

function App() {
  return (
    <main className="flex justify-center selection:bg-select">
      <div className="flex flex-col px-4 md:px-10 w-min max-w-md md:max-w-5xl h-screen">
        <Header />
        <Menu />
        <ListView />
      </div>
    </main>
  );
}

export default App;
