import React from "react";
import { ProjectsStyle } from "./styles/Projects.style";
import { projectsArr } from "./data/projectObjects";
import { AiFillGithub } from "react-icons/ai";
import { IoMdPlanet } from "react-icons/io";

const Projects = () => {
  const listItems = projectsArr.map((number) => (
    <li key={number.key} className="project">
      <h1>{number.tittle}</h1>
      <img src={number.img} alt={number.alt}></img>
      <p>{number.description}</p>
      <div className="container-project-footer">
        <div className="container-project-footer-in">
          <a href={number.buttonGitHub} target="_blank" rel="noreferrer">
            To GitHub
          </a>{" "}
          <AiFillGithub className="project-icon"/>
        </div>
        <div className="container-project-footer-in">
          <a href={number.buttonPage} target="_blank" rel="noreferrer">
            To WebSide
          </a>{" "}
          <IoMdPlanet className="project-icon"/>
        </div>
      </div>
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
