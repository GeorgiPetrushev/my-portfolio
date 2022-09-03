import React from "react";
import { SkillsStyle } from "./styles/Skills.style";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3, DiBootstrap, DiSass, DiReact } from "react-icons/di";
import { FaGit } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

const Skills = () => {
  return (
    <SkillsStyle>
      <div className="tittle">My Skills</div>
      <div className="icon-container">
        <h3>
          <AiFillHtml5 />
        </h3>
        <h3>
          <DiCss3 />
        </h3>
        <h3>
          <SiJavascript />
        </h3>
        <h3>
          <DiSass />
        </h3>
        <h3>
          <DiReact />
        </h3>
        <h3>
          <DiBootstrap />
        </h3>
        <h3>
          <AiFillGithub />
        </h3>
        <h3>
          <FaGit />
        </h3>
        <h2>ES6</h2>
        <h2>ES7</h2>
      </div>
    </SkillsStyle>
  );
};

export default Skills;
