import React from 'react';

import "./menu.scss";

function Menu ({menuOpen, setMenuOpen}) {
    
  return (
      <div className="top">
    <div className={"menu " + (menuOpen && "active")}>
        <ul className="nav">
            <div>
            <li>
                <a href="#intro" onClick={()=>(setMenuOpen(false))}>About Me</a>
            </li>
            </div>
            <div>
            <li>
                <a href="#education" onClick={()=>(setMenuOpen(false))}>Education</a>
            </li>
            </div>
            <div>
            <li>
                <a href="#projects" onClick={()=>(setMenuOpen(false))}>Projects</a>
            </li>
            
         

            </div>
            <div>
            <li>
                <a href="#contact" onClick={()=>(setMenuOpen(false))}>Contact Me</a>
            </li>
            </div>
        </ul>
    </div>
    </div>
  );
};

export default Menu;


