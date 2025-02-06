// import Navigation from "./components/ui/navigation";
import About from "./components/about";
import Donate from "./components/donate";
import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import Project from "./components/project";
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
      <Project />
    </main>
  );
}

export default App;
