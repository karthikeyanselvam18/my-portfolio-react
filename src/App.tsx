import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App px-4">
      <Header/>
      <Home/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
