import { useState } from "react";

import "./app.scss";
import Navbar from "./components/navbar/Navbar.jsx";
import Intro from "./components/intro/Intro.jsx";
import Projects from "./components/projects/Projects.jsx";
import Contact from "./components/contact/Contact.jsx";
import Resume from "./components/resume/Resume.jsx";
import Menu from "./components/menu/Menu.jsx"


function App() {
  
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
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
