import About from "./components/About/About";
import ContactMe from "./components/Contact/ContactMe";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";

function App() {
  return (
    <div className="App relative px-4">
      <Header />
      <Home />
      <About />
      <Education />
      <Projects />
      <div className="flex flex-col md:flex-row">
        <Resume />
        <ContactMe />
      </div>
      <Footer />
    </div>
  );
}

export default App;
