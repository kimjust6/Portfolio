import {GitHub, Mail, LinkedIn} from "@material-ui/icons";

import "./contact.scss";


const Contact = () => {
  return (
    <div className="contact">
      <div className="title">
          <h1> Contact Me</h1>
        </div>
        <div className="links">
        <div class="linkedin">
        <a href="https://www.linkedin.com/in/justin-kim6/" target="_blank" rel="noreferrer"><LinkedIn></LinkedIn> LinkedIn</a>
        </div>
        <div className="github">
        <a href="https://github.com/kimjust6/" target="_blank" rel="noreferrer"><GitHub></GitHub> Github</a>
        </div>
        <div className="email">
          <a href="mailto:kimjust6@gmail.com" target="_blank" rel="noreferrer"><Mail></Mail> Email</a>
        </div>
        </div>
    </div>
  );
};

export default Contact;
