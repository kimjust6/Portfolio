import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <a className="name" href = "#intro">justin kim</a>  
        </div>
        <div className = "right">
          <a className = "link" href = "#intro">About Me</a>
          <a className = "link" href = "#projects">Projects</a>
          <a className = "link" href = "#resume">Resume</a>
          <a className = "link" href = "#contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
