import {GitHub, Mail, LinkedIn} from "@material-ui/icons";
// import windowSize from 'react-window-size';

import "./navbar.scss";



export default function Navbar ({menuOpen, setMenuOpen}) {
  
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a className="name" href = "#intro">justin kim</a>  
          <div className="itemContainer">
            <LinkedIn className="icon"/>
            <GitHub className="icon"/>
            <Mail className="icon"/>
            {/* <span>kimjust6@gmail.com</span> */}
          </div>
        </div>
        
        <div className="right">
          <div className="allLinks">
          <a className="link" href="#intro">About Me</a>
          <a className="link" href="#projects">Projects</a>
          <a className="link" href="#resume">Resume</a>
          <a className="link contactLink" href="#contact">Contact</a>
          </div>
          <div className="hamburger" onClick={()=>(setMenuOpen(!menuOpen))}>
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
};




