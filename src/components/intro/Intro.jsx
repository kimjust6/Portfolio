import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from '@material-ui/core/Button';

import "./intro.scss";

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="moreLeft"></div>
      <div className="left">
        <div className="picture">
          <img src="https://i.imgur.com/HASBYuf.jpg" alt=""></img>
        </div>
      </div>
      <div className="right">
        <div className="text">
          {/* <h2 className="hello">My name is</h2> */}
          <h1 className="name">Justin Kim</h1>
          <h1 className="title">Software Developer</h1>

          <h4 className="introduction">
            Full stack developer who is passionate about finance and
            technology.
          </h4>
          <Button className="but1" target="_blank" href="https://drive.google.com/file/d/1lPpys9BbJom56Zpdcq0dZHkO31trq7WA/view?usp=sharing" variant="contained">
            My Résumé
            </Button>
          <div className="downArrow">
            <a href="#about">
              <KeyboardArrowDownIcon fontSize="inherit" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
