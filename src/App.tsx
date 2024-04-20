import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="App px-4 relative">
      <Header/>
      <Home/>
      <About/>
      <Education/>
      <Projects/>
      <Resume/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App;
