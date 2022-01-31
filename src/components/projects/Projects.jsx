import react from "react";
import Button from '@material-ui/core/Button';
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
            This is a banking application that uses cryptocurrencies as the store of value between accounts. Transactions are done on a live blockchain and done in real time. We used the Spring Boot framework for the front end and Java for the backend. Account information was stored and encrypted on a postgreSQL server.  To broadcast transactions, we spun up a banano (cryptocurrency) node in a docker container.
            </p>
            <Button className="but1" target="_blank" href="https://github.com/kimjust6/Banking-Web-App" variant="contained">Github Link</Button>
            <Button className="but2" target="_blank" href="https://www.youtube.com/watch?v=80ICIoXTi1U" variant="outlined">Video Demo</Button>
            
          </div>
          <div className="screen">
            <img src="https://i.imgur.com/Arrus6K.png" alt=""></img>
          </div>
        </div>

        <div className="proj2">
          <div className="title">
            <h2>Eventure Mobile Application</h2>
            <h3 className="tech">
              Agile Development, Ionic, Google Firebase, tomtom API
            </h3>
            
            <p>
            This mobile app lets users create and join events near them.  Users are also able to search for businesses and other points of interest through the tomtom API. Eventure was developed using the Agile Software Development and coded using angular. User information is stored in a Firebase database.
            </p>
            {/* <Button className="but" target="_blank" href="https://github.com/kimjust6/boulderdash" variant="contained">Github Link</Button> */}
            <Button className="but2" target="_blank" href="https://www.eventure.site/landing" variant="outlined">Live Demo</Button>
            
            

          </div>
          <div className="screen">
            <img src="https://i.imgur.com/l2FVRdI.png" alt=""></img>
          </div>
        </div>
        <div className="proj3">
          <div className="title">
            <h2>Portfolio Website</h2>
            <h3 className="tech">
              React.js, CSS
            </h3>
            
            <p>
            This website portfolio website is coded in React.js and CSS to showcase my technical knowledge and application. I created this website with responsive design in mind.
            </p>
            <Button className="but1" target="_blank" href="https://github.com/kimjust6/portfolio2" variant="contained">Github Link</Button>
            <Button className="but2" target="_blank" href="https://www.justink.dev/" variant="outlined">Live Demo</Button>
            
            

          </div>
          <div className="screen">
            <img src="https://i.imgur.com/uB6c6X6.png" alt=""></img>
          </div>
        </div>

        <div className="proj4">
          <div className="title">
            <h2>Boulder Dash Clone</h2>
            <h3 className="tech">
              Java
            </h3>
            
            <p>
            In this project, I recreated the classic arcade game "Boulder Dash". 
            In this game, the player will travel through the maze and collect
            diamonds and attempt to proceed to the next level.  The level is loaded 
            from a text file and all the game logic is coded in Java.
            </p>
            <Button className="but1" target="_blank" href="https://github.com/kimjust6/boulderdash" variant="contained">Github Link</Button>
            <Button className="but2" target="_blank" href="https://www.youtube.com/watch?v=kSDaNuoXWMQ" variant="outlined">Video Demo</Button>
            
            

          </div>
          <div className="screen">
            <img src="https://i.imgur.com/a3yG8xX.png" alt=""></img>
          </div>
        </div>
        
        
        
        


        {/* <div className="item">
          <img src="" alt=""></img>
          <h3>Library Management System</h3>
        </div>
        <div className="item">
          <img src="" alt=""></img>
          <h3>Eventure</h3>
        </div>
        <div className="item">
          <img src="" alt=""></img>
          <h3>Boulder Dash Clone</h3>
        </div>
        <div className="item">
          <img src="" alt=""></img>
          <h3>Shell Script</h3>
        </div> */}
    </div>
  );
};

export default Projects;
