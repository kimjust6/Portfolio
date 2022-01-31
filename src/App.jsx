import { useState } from "react";

import "./app.scss";
import Divider from '@material-ui/core/Divider';
import Navbar from "./components/navbar/Navbar.jsx";
import Intro from "./components/intro/Intro.jsx";
import Projects from "./components/projects/Projects.jsx";
import Contact from "./components/contact/Contact.jsx";
import Education from "./components/resume/Education.jsx";
import Menu from "./components/menu/Menu.jsx"
import About from "./components/about/About.jsx"
import Skills from "./components/skills/Skills.jsx";


function App() {
  
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Divider style={{width:'100%'}} />
      <div className="sections">
        <Intro />
        <Divider style={{width:'100%'}} />
        <About/>
        <Divider style={{width:'100%'}} />
        <Education/>
        <Divider style={{width:'100%'}} />
        <Projects/>
        <Divider style={{width:'100%'}} />
        <Skills/>
        <Divider style={{width:'100%'}} />
        <Contact/>
      </div>
    </div>
  );
}

export default App;
