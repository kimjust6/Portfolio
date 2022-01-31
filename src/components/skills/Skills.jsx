import React from 'react';

import GitHubIcon from '@mui/icons-material/GitHub';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';


import "./skills.scss";

const Skills = () => {
  return (
    <div className="skills" id="contact">
        <h1>Skills</h1>
        <div className="skillType">
            <div className="title">
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
            <div className="title">
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
                            Typescript
                        </li>
                        <li>
                            Spring Boot
                        </li>
                    </ul>
                </div>
            </div>
            <div className="title">
                <h2>Databases</h2>
                <div className="list">
                    <ul>
                        <li>
                            postgreSQL
                        </li>
                        <li>
                            Angular
                        </li>
                        <li>
                            Node.js
                        </li>
                        <li>
                            HTML
                        </li>
                        <li>
                            CSS
                        </li>
                        <li>
                            Typescript
                        </li>
                    </ul>
                </div>
            </div>

        </div>

    </div>
  );
};


export default Skills;
