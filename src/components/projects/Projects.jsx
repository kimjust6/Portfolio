import { GitHub, YouTube, CloudQueue } from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

import "./projects.scss";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="heading">
        <h1>Projects</h1>
      </div>

      <div className="proj1">
        <div className="title">
          <h2>Blockchain Banking Web Application</h2>
          <h3 className="tech">
            Spring Boot, Java, SQL, Docker, jNano, Google ZXing
          </h3>

          <p>
            This is a banking application that uses cryptocurrencies as the
            store of value between accounts. Transactions are done on a live
            blockchain and done in real time. We used the Spring Boot framework
            for the front end and Java for the backend. Account information was
            stored and encrypted on a postgreSQL server. To broadcast
            transactions, we spun up a banano (cryptocurrency) node in a docker
            container.
          </p>
          <Button
            className="but1"
            target="_blank"
            href="https://github.com/kimjust6/Banking-Web-App"
            variant="contained"
          >
            <GitHub className="icon" /> Github
          </Button>
          <Button
            className="but2"
            target="_blank"
            href="https://www.youtube.com/watch?v=uKlhKMTh05k"
            variant="outlined"
          >
            {/* <Button
            className="but2"
            target="_blank"
            href="https://www.youtube.com/watch?v=80ICIoXTi1U"
            variant="outlined"
          > */}
            <YouTube className="icon" />
            Demo
          </Button>
        </div>
        <div className="screen">
          <img src="https://i.imgur.com/Arrus6K.png" alt=""></img>
        </div>
      </div>
      <Divider style={{ width: "100%" }} variant="middle" />
      <div className="proj2">
        <div className="title">
          <h2>Eventure Mobile Application (Capstone)</h2>
          <h3 className="tech">
            Angular, Ionic, Agile/SCRUM Development, Firebase/Firestore, tomtom
            API
          </h3>

          <p>
            Completed this project in 6 sprints over an 8 month period.
            This mobile app lets users create and join events near them. Users
            are also able to search for businesses and other points of interest
            through the tomtom API. Eventure was developed using the Agile
            Software Development and coded using angular. User information is
            stored in a Firebase database.
          </p>
          <Button
            className="but1"
            target="_blank"
            href="https://github.com/kimjust6/Eventure"
            variant="contained"
          >
            <GitHub className="icon" /> Github
          </Button>
          <Button
            className="but2"
            target="_blank"
            href="https://www.youtube.com/watch?v=aNnlid6Ti_4"
            variant="outlined"
          >
            <YouTube className="icon" />
            Demo
          </Button>
        </div>
        <div className="screen">
          <img src="https://i.imgur.com/l2FVRdI.png" alt=""></img>
        </div>
      </div>
      <Divider style={{ width: "100%" }} variant="middle" />
      <div className="proj3">
        <div className="title">
          <h2>Portfolio Website</h2>
          <h3 className="tech">React.js, MaterialUI, CSS</h3>

          <p>
            This website portfolio website is coded in React.js and CSS to
            showcase my technical knowledge and application. I created this
            website with responsive design in mind.
          </p>
          <Button
            className="but1"
            target="_blank"
            href="https://github.com/kimjust6/portfolio2"
            variant="contained"
          >
            <GitHub className="icon" /> Github
          </Button>
          <Button
            className="but2"
            target="_blank"
            href="https://www.justink.dev/"
            variant="outlined"
          >
            <CloudQueue className="icon"/>Live Demo
          </Button>
        </div>
        <div className="screen">
          <img src="https://i.imgur.com/uB6c6X6.png" alt=""></img>
        </div>
      </div>
      <Divider style={{ width: "100%" }} variant="middle" />
      <div className="proj4">
        <div className="title">
          <h2>Boulder Dash Clone</h2>
          <h3 className="tech">Java</h3>

          <p>
            In this project, I recreated the classic arcade game "Boulder Dash".
            In this game, the player will travel through the maze and collect
            diamonds and attempt to proceed to the next level. The level is
            loaded from a text file and all the game logic is coded in Java.
          </p>
          <Button
            className="but1"
            target="_blank"
            href="https://github.com/kimjust6/boulderdash"
            variant="contained"
          >
            <GitHub className="icon" /> Github
          </Button>
          <Button
            className="but2"
            target="_blank"
            href="https://www.youtube.com/watch?v=kSDaNuoXWMQ"
            variant="outlined"
          >
            <YouTube className="icon" /> Demo
          </Button>
        </div>
        <div className="screen">
          <img src="https://i.imgur.com/a3yG8xX.png" alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default Projects;
