import React from "react";
import { SkillsStyle } from "../styles/Skills.style";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3, DiBootstrap, DiSass, DiReact } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiRedux } from "react-icons/si";

const Skills = () => {
  return (
    <SkillsStyle>
      <div className="tittle">My Skills</div>
      <div className="icon-container">
        <h3 className="html">
          <AiFillHtml5 />
        </h3>
        <h3 className="css">
          <DiCss3 />
        </h3>
        <h3 className="java-scrip">
          <SiJavascript />
        </h3>
        <h3 className="sass">
          <DiSass />
        </h3>
        <h3 className="react">
          <DiReact />
        </h3>
        <h3 className="redux">
          <SiRedux />
        </h3>
        <h3 className="bootstrap">
          <DiBootstrap />
        </h3>
        <h3 className="git-hub">
          <AiFillGithub />
        </h3>
        <h3 className="git">
          <FaGitAlt />
        </h3>
        <h2 className="es-six">ES6</h2>
        <h2 className="es-seven">ES7</h2>
      </div>
    </SkillsStyle>
  );
};

export default Skills;
