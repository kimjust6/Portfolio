import { GitHub, Mail, LinkedIn } from "@material-ui/icons";
// import windowSize from 'react-window-size';

import "./navbar.scss";

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a className="name" href="#intro">
            {" "}
            <span className="firstName">justin</span>{" "}
            <span className="lastName">kim</span>
          </a>
          <div className="itemContainer">
            <a
              href="https://www.linkedin.com/in/justin-kim6/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn className="icons" />
            </a>
            <a
              href="https://github.com/kimjust6"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub className="icons" />
            </a>
            <a
              href="mailto:kimjust6@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <Mail className="icons" />
            </a>
          </div>
        </div>

        <div className="right">
          <div className="allLinks">
            <a className="link" href="#about">
              About Me
            </a>
            <a className="link" href="#education">
              Education
            </a>
            <a className="link" href="#projects">
              Projects
            </a>
            <a className="link" href="#contact">
              Skills
            </a>
          </div>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {/* <div className="hamborder"> */}
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
