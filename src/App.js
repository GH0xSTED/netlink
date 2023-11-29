import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PathConverter from "./components/PathConverter";

function App() {
  return (
    <div className="flex flex-col items-center bg-black/70 h-screen">
      <header className="text-white font-semibold mb-20">
        <Navbar />
        <div className="flex flex-col justify-center items-center mt-10">
          <h1 className="font-bold text-lg m-4">Welcome to PathLink</h1>
          <Hero />
        </div>
      </header>
      <div className="flex flex-col justify-center items-center w-screen">
        <PathConverter />
      </div>
    </div>
  );
}

export default App;
