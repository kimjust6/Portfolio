import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import "./intro.scss";

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="moreLeft"></div>
      <div className="left">
        <div className="picture">
          <img src="../assets/profile.jpg" alt=""></img>
        </div>
      </div>
      <div className="right">
        <div className="text">
          <h2 className="hello">My name is</h2>
          <h1 className="name">Justin Kim</h1>
          <h1 className="hello">Junior Software Developer</h1>

          <h4 className="introduction">
            <br />
            Full stack developer that is passionate about finance and technology.

          </h4>
          
        </div>
      </div>
      <div className="downArrow">
        <KeyboardArrowDownIcon/>
      </div>
    </div>
  );
};

export default Intro;
