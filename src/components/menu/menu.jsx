import React from 'react';
import "./menu.scss";

function menu () {
  return (
    <div className="menu">
        <ul>
            <li>
                <a href="#intro">About Me</a>
            </li>
            <li>
                <a href="#projects">Projects</a>
            </li>
            <li>
                <a href="#resume">Resume Me</a>
            </li>
            <li>
                <a href="#contact">Contact Me</a>
            </li>
        </ul>
    </div>
  );
};

export default menu;


