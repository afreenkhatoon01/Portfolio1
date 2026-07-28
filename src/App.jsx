import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <HeroSection />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;