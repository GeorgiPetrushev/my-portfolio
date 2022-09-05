import React from "react";
import { ProjectsStyle } from "./styles/Projects.style";
import { projectsArr } from "./projectObjects";

const Projects = () => {
  const listItems = projectsArr.map((number) => (
    <li key={number.key} className="project">
      {number.tittle}
    </li>
  ));

  return (
    <ProjectsStyle>
      <div className="project-tittle">Projects</div>
      <ul className="container-projects">{listItems}</ul>
    </ProjectsStyle>
  );
};

export default Projects;
