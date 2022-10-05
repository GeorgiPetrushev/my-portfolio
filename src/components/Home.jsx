import React from "react";
import { HomeStyle } from "./styles/Home.style";
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
        <div className="right-side">
          <p>
            I graduated technical university of Sofia major telecommunication.
            But I decided to continue in the software developer industry in
            2019, which I love very much. I am a highly motivated, dedicated and
            ambitious software developer who is ready to fulfill any task
            assigned to me. Thanks to my background, I gained problem-solving
            skills. I am very interested in new technologies and I am trying to
            grasp it. I am want to be a web developer and am constantly
            researching and improving myself. I believe in lifelong learning.I'm
            abel really quick to learn new languages and libraries if is
            necessary.{" "}
          </p>
          <p>
            I'm currently doing front development (Java Script | React |) 👨🏼‍🤝‍👨🏻 I
            want to collaborate on open source projects 🥅 Goals: Develop
            application projects useful to humanity and to participate in these
            projects in the world. 💬 You can ask me anything you want to know
          </p>
        </div>
      </HomeStyle>
      <Skills />
    </div>
  );
};

export default Home;
