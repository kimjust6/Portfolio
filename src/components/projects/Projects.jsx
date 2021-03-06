import { GitHub, YouTube, CloudQueue } from "@material-ui/icons";
import { Card, CardMedia, Button } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Carousel from "react-material-ui-carousel";

import "./projects.scss";

const Projects = () => {
  var project1Images = [
    {
      image: "https://i.imgur.com/M1Cr3jy.png",
      alt: "Blockchain Banking Web Application 1",
    },
    {
      image: "https://i.imgur.com/YtsmSca.png",
      alt: "Blockchain Banking Web Application 2",
    },
    {
      image: "https://i.imgur.com/EN3zOft.png",
      alt: "Blockchain Banking Web Application 3",
    },
    {
      image: "https://i.imgur.com/eaJnZ95.png",
      alt: "Blockchain Banking Web Application 4",
    },
  ];

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
          <div className="img">
            <ImageCarousel myImage={project1Images} />
          </div>
          {/* <img src="https://i.imgur.com/Arrus6K.png" alt=""></img> */}
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
            Completed this project in 6 sprints over an 8 month period. This
            mobile app lets users create and join events near them. Users are
            also able to search for businesses and other points of interest
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
            This portfolio website is coded in React.js and CSS to
            showcase my technical knowledge and application. I created this
            website with responsive design in mind.
          </p>
          <Button
            className="but1"
            target="_blank"
            href="https://github.com/kimjust6/portfolio"
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
            <CloudQueue className="icon" />
            Live Demo
          </Button>
        </div>
        <div className="screen">
          <img src="https://i.imgur.com/ITIYoji.png" alt=""></img>
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
          <img src="https://i.imgur.com/a3yG8xX.png" alt="" />
        </div>
      </div>
    </div>
  );
};

function ImageCarousel(props) {
  return (
    <Carousel
      className="images"
      navButtonsAlwaysVisible={true}
      animation="slide"
      autoPlay={false}
      duration="450"
      interval="5000"
      cycleNavigation={false}
    >
      {props.myImage.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <div>
      <Card>
        <CardMedia
          className="Media"
          component="img"
          height="450"
          image={props.item.image}
          alt={props.item.alt}
        />
      </Card>
    </div>
  );
}

export default Projects;
