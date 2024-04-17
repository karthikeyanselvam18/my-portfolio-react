import About from "./components/About";
import Education from "./components/Education";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App px-4">
      <Header/>
      <Home/>
      <About/>
      <Education/>
      <Projects/>
    </div>
  );
}

export default App;
