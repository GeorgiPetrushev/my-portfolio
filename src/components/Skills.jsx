import React from "react";
import { SkillsStyle } from "./styles/Skills.style";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { DiSass } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiBootstrap } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";
import { FaGit } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
const Skills = () => {
  return (
    <SkillsStyle>
      <div className="tittle">Skills</div>
      <div className="icon-container">
        <h3>
          <AiFillHtml5 /> HTML5
        </h3>
        <h3>
          <DiCss3 /> CSS3
        </h3>
        <h3>
          <SiJavascript /> JavaScript
        </h3>
        <h3>
          <DiSass /> Sass
        </h3>
        <h3>
          <DiReact /> REACT
        </h3>
        <h3>
          <DiBootstrap /> BootStrap
        </h3>
        <h3>
          <AiFillGithub /> GitHub
        </h3>
        <h3>
          <FaGit /> Git
        </h3>
        <h3>ES6</h3>
        <h3>ES7</h3>
      </div>
      <div>
        Welocome to my wewbpage!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        molestias illo praesentium maxime, doloribus reprehenderit culpa quis
        voluptatum architecto minus optio iure eaque, quae quia soluta enim aut
        odit aspernatur.
      </div>
    </SkillsStyle>
  );
};

export default Skills;
