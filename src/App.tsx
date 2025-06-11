import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Sidebar from "./components/NavBar";

function App() {
  return (
    <div>
      <Sidebar />
      <div className="md:ml-64">
        <Home />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;