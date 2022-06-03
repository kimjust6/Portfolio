import React from "react";

import "./menu.scss";

function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className="top">
      <div className={"menu " + (menuOpen && "active")}>
        <ul className="nav">
          <div>
            <li>
              <a
                className="link"
                href="#about"
                onClick={() => setMenuOpen(false)}
              >
                About Me
              </a>
            </li>
          </div>

          <div>
            <li>
              <a
                className="link"
                href="#education"
                onClick={() => setMenuOpen(false)}
              >
                Education
              </a>
            </li>
          </div>

          <div>
            <li>
              <a
                className="link"
                href="#projects"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </a>
            </li>
          </div>
          <div>
            <li>
              <a
                className="link"
                href="#contact"
                onClick={() => setMenuOpen(false)}
              >
                Skills
              </a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
