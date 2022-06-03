import { GitHub, Mail, LinkedIn } from "@material-ui/icons";

import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="title">
        <h1> Contact Me</h1>
      </div>
      <div className="links">
        <div className="linkedin">
          <a
            href="https://www.linkedin.com/in/justin-kim6/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn style={{ fontSize: 35}} className="myIcon" /> LinkedIn
          </a>
        </div>
        <div className="github">
          <a
            href="https://github.com/kimjust6/"
            target="_blank"
            rel="noreferrer"
          >
            <GitHub style={{ fontSize: 33}} className="myIcon2"/> Github
          </a>
        </div>
        <div className="email">
          <a href="mailto:kimjust6@gmail.com" target="_blank" rel="noreferrer">
            <Mail style={{ fontSize: 35}} className="myIcon"/> Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
