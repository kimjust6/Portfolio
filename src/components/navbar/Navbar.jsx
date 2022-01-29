import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <a href = "#intro">About Me</a>
        <a href = "#portfolio">Projects</a>
        <a href = "#resume">Resume</a>
        <a href = "#contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
