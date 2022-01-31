import {GitHub, Mail, LinkedIn} from "@material-ui/icons";

import "./contact.scss";


const Contact = () => {
  return (
    <div className="contact" id="contact">
        <h2> Contact Me</h2>
        <div className="links">
        <div class="linkedin">
        <a href="https://www.linkedin.com/in/justin-kim6/" target="_blank" rel="noreferrer"><LinkedIn></LinkedIn> LinkedIn</a>
        </div>
        <div class="github">
        <a href="https://github.com/kimjust6/" target="_blank" rel="noreferrer"><GitHub></GitHub> Github</a>
        </div>
        <div class="email">
          <a href="mailto:kimjust6@gmail.com" target="_blank" rel="noreferrer"><Mail></Mail> Email</a>
        </div>
        </div>
    </div>
  );
};

export default Contact;
