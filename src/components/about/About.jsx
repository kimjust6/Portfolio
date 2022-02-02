import React from 'react';
import "./about.scss";

const About = () => {
  return (
<div className="about" id="about">
    <div className="title">
        <h1>
            About Me
        </h1>
    </div>
    <div className="content">
        <p>
            Hello there! My name is Justin Kim and I am a 3rd year student studying Software Development. 
            I love learning new technologies and developing new applications.  My current goal is to find a co-op position 
            for the Summer of 2022.   <br/><br/>
            In addition to programming, I am interested in market trends and financial news.
            Have a look at what kind of projects I have been working on and feel free to email me at <a href="mailto:kimjust6@gmail.com">kimjust6@gmail.com</a> if you have any questions.
        </p>
    </div>
</div>
    );
};

export default About;
