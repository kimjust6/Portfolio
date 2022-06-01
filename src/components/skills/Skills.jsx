import React from 'react';
import Divider from '@material-ui/core/Divider';
import GitHubIcon from '@mui/icons-material/GitHub';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';


import "./skills.scss";

const Skills = () => {
    return (
        <div className="skills" id="contact">
            <h1>Skills</h1>

            <div className="skillType">
                <div className="title1">
                    <h2>Back End</h2>
                    <div className="list">
                        <ul>
                            <li>
                                C++
                            </li>
                            <li>
                                Java
                            </li>
                            <li>
                                Python
                            </li>
                            <li>
                                Node.js
                            </li>
                            <li>
                                Visual Basic
                            </li>
                            <li>
                                Shell Scripting
                            </li>
                        </ul>
                    </div>
                </div>
                <Divider variant="middle" />
                <div className="title2">
                    <h2>Front End</h2>
                    <div className="list">
                        <ul>
                            <li>
                                React.js
                            </li>
                            <li>
                                Angular
                            </li>
                            <li>
                                Javascript
                            </li>
                            <li>
                                HTML
                            </li>
                            <li>
                                CSS
                            </li>
                            <li>
                                JavaFX
                            </li>
                            <li>
                                Typescript
                            </li>
                            <li>
                                Thymeleaf
                            </li>
                        </ul>
                    </div>
                </div>
                <Divider variant="middle" />
                <div className="title3">

                    <h2>Databases</h2>
                    <div className="list">
                        <ul>
                            <li>
                                postgreSQL
                            </li>
                            <li>
                                MySQL
                            </li>
                            <li>
                                Firebase/Firestore
                            </li>
                            <li>
                                MongoDB
                            </li>

                        </ul>
                    </div>
                </div>

                <Divider variant="middle" />
                <div className="title4">

                    <h2>Tools & Misc</h2>
                    <div className="list">
                        <ul>
                            <li>
                                Git
                            </li>
                            <li>
                                Postman
                            </li>
                            <li>
                                Jira
                            </li>
                            <li>
                                Unix
                            </li>

                            <li>
                                Vercel
                            </li>
                            <li>
                                Heroku
                            </li>
                            <li>
                                Visio
                            </li>
                            <li>
                                Visual Paradigm
                            </li>
                            <li>
                                MS Office
                            </li>

                        </ul>
                    </div>
                </div>


            </div>


        </div>
    );
};


export default Skills;
