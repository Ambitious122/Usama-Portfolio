import useMotion from "./hooks/useMotion";
import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Capabilities from "./components/Capabilities";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useMotion();
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Capabilities />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
