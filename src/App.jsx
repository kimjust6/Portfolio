import { useState } from "react";

import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Resume from "./components/resume/Resume";
import Menu from "./components/menu/Menu"


function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <div className="app">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} width={width} setWidth={setWidth}/>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
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
