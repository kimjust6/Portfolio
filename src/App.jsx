import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Resume from "./components/resume/Resume";

function App() {
  return (
    <div className="app">
        <Navbar/>
      <div className="sections">
        <Intro/>
        <Projects/>
        <Resume/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
