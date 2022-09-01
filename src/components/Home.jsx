import React from "react";
import { HomeStyle } from "./styles/Home.style";
import profilePicture from "../pictures/profile-pic.jpg";

const Home = () => {
  return (
    <HomeStyle className="container">
      <div className="left-side">
        <img src={profilePicture} alt="Logo" />
        <h2>Georgi Petrushev</h2>
        <h3>Web Developer</h3>
      </div>
      <div className="right-side">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo atque
          iste iure ullam nihil nulla amet earum cupiditate fugit omnis nemo,
          repellat facilis voluptatum natus labore accusamus quidem cum
          doloribus!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo atque
          iste iure ullam nihil nulla amet earum cupiditate fugit omnis nemo,
          repellat facilis voluptatum natus labore accusamus quidem cum
          doloribus!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo atque
          iste iure ullam nihil nulla amet earum cupiditate fugit omnis nemo,
          repellat facilis voluptatum natus labore accusamus quidem cum
          doloribus!
        </p>
      </div>
    </HomeStyle>
  );
};

export default Home;
