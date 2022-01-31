import Divider from "@material-ui/core/Divider";

import "./education.scss";

const Education = () => {
  return (
    <div className="education" id="education">
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
      <Divider light="true" className="divide" style={{ width: "100%" }} />
      <div className="courses">
        <div className="courseWork">
          <h1>Relevant Coursework</h1>
        </div>
        <ul>
          <li>Design Patterns in UML</li>
          <li>Web Programming Tools and Frameworks</li>
          <li>Computer Vision</li>
          <li>SQL Database Design Using Oracle</li>
          <li>Advanced UNIX Bash Shell Scripting</li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
