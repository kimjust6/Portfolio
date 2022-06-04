// import Divider from '@material-ui/core/Divider';
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ListItem from "@mui/material/ListItem";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import "./education.scss";

const Education = () => {
  const [isExpanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className="education" id="education">
      <div className="courses">
        <div className="courseWork">
          <h1>Work Experience</h1>

          <div className="myAccordian">
            <Accordion>
              <AccordionSummary
                onClick={handleClick}
                className={"bgc-main c-lightSecondary bright"}
              >
                <div className="workExperience ">
                  <ul className="aList">
                    <div className="positionTitle">
                      Software Developer Co-op
                    </div>
                    <li>Partech, Inc.</li>
                    <li>25 Centurian Drive</li>
                    <li>Markham, Ontario</li>
                  </ul>
                </div>
                <ul className="rotate">
                  <li className="positionTitle">
                    May 2022 – Present
                    <div class="bounce-base">
                      <div class={isExpanded ? "" :"bounce-in bounce-1"}>
                        <div className="expandIcon">
                          <ExpandCircleDownIcon
                            className={
                              isExpanded
                                ? "down expandMore"
                                : "expandMore"
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </AccordionSummary>
              <AccordionDetails className={"bgc-main c-lightSecondary"}>
                <div className="maxwidth-60rem">
                  <ul className={" listStyle-circle workDescription"}>
                    <ListItem>
                      • Worked using Agile/Scrum methodologies.
                    </ListItem>
                    <ListItem>
                      • Developed new stories/features and debugged existing
                      Angular web components with typescript/html/css.
                    </ListItem>
                    <ListItem>
                      • Developed new and debugged existing RESTful apis in Java
                      with the tools such as the eclipse debugger, postman, and
                      mySQL workbench.
                    </ListItem>
                    <ListItem>
                      • Heavy exposure to material design, Jira, gridster2,
                      wijmo, bitbucket, postman, and mySQL Workbench.
                    </ListItem>
                    <ListItem>• Performed code reviews.</ListItem>
                  </ul>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
          {/* <Divider light="true" className="divide" style={{ width: "100%" }} /> */}
        </div>
      </div>

      <div className="school">
        <div className="title">
          <h1>Education</h1>
        </div>
        <p className="degree">
          Honours Bachelor of Technology in Software Development – GPA 3.9
        </p>
        <p className="school">Seneca College, Toronto</p>
        <p className="school">Expected Graduation: August 2023</p>
      </div>
    </div>
  );
};

export default Education;
