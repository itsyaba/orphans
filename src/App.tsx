// import Navigation from "./components/ui/navigation";
import About from "./components/about";
import Contact from "./components/contact";
import Donate from "./components/donate";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import Programs from "./components/programs";
import Partners from "./components/partners";
import Project from "./components/project";
import TornPaper from "./components/TornPaper";
import DonateNow from "./components/DonateNow";
import Gallery from "./components/gallery";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <div className="relative">
        <Donate />
        <TornPaper />
      </div>
      <Project />
      <Programs />
      <Partners />
      <DonateNow />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
