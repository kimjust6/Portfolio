// import Divider from '@material-ui/core/Divider';
import "./education.scss";

const Education = () => {
  return (
    <div className="education" id="education">
      <div className="courses">
        <div className="courseWork">
          <h1>Work Experience</h1>
        </div>
        <div className="workExperience">
          <ul className="aList">
            <div className="positionTitle">Software Developer Coop </div>
            <li>Partech, Inc.</li>
            <li>25 Centurian Drive</li>
            <li>Markham, Ontario</li>
          </ul>
          <ul>
            <li className="positionTitle">May 2022 – Present</li>
          </ul>
        </div>
      </div>
      {/* <Divider light="true" className="divide" style={{ width: "100%" }} /> */}

      <div className="school">
        <div className="title">
          <h1>Education</h1>
        </div>
        <p className="degree">
          Honours Bachelor of Technology in Software Development – GPA 3.9
        </p>
        <p className="school">Seneca College, Toronto</p>
        <p className="school">Expected Graduation: August 2023</p>
      </div>
    </div>
  );
};

export default Education;
