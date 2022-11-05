import React from "react";
import { HomeStyle } from "../styles/Home.style";
import profilePicture from "../pictures/profile-pic.jpg";

import Skills from "./Skills";

const Home = () => {
  return (
    <div>
      <HomeStyle className="container">
        <div className="left-side">
          <img src={profilePicture} alt="Logo" />
          <h2>Georgi Petrushev</h2>
          <h3>Web Developer</h3>
        </div>
        <div className="right-side"><p>
          Dedicated individual with a passion to code for Web Development.
          Typically, code as a hobby, through self-developed projects and
          programs. Previously and actively progressed my programming skills
          with different online courses, such as TeamTreeHouse, FreeCodeCamp and
          Udemy. Understanding that coding is an infinite cycle constantly
          evolving as technology progresses. I look forward to supporting my
          company to code with innovation. In each course, we learn to develope
          different sets of technical skills, such as HTML, CSS, JavaScript, React, Redux, TypeScript, Firebase,
          jQuery, Bootstrap, etc. </p><p>As
          a professional and a person with much humility I’m aware that
          technology is constantly evolving so I am proactive in educating
          myself as much as possible to enhance my programming skills,
          knowledge, and portfolio. Lastly, I commend myself on being a prompt
          learner with a passion to problem-solve regardless of any issue.</p>
        </div>
      </HomeStyle>
      <Skills />
    </div>
  );
};

export default Home;
