import Header from "./components/Header";
import Map from "./components/Map";
import Home from "./components/Home.js";

function App() {
  return (
    <div >
      <header>
        <div>
          <Header />
          <Map />
          <Home />
        </div>
      </header>
    </div>
  );
}

export default App;
