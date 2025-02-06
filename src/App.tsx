// import Navigation from "./components/ui/navigation";
import About from "./components/about";
import Donate from "./components/donate";
import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import TornPaper from "./components/TornPaper";

function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <div className="relative">
        <Donate />
        <TornPaper />
      </div>
    </main>
  );
}

export default App;
