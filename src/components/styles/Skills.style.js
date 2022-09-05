import styled from "styled-components";

export const SkillsStyle = styled.div`
background: linear-gradient(to right bottom,rgba(255,255,254,0.5), rgba(255,255,255,0.7));
  .tittle{
    font-size: 1.5rem;
    text-align: center;
    text-decoration: underline;
  }
  .icon-container {
    padding: 1rem 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 1rem 5%;
    border-radius: 1rem;
    .html{
      color: rgb(233,89,35);
    }
    .css{
      color: rgb(55,153,214);
    }
    .java-scrip{
      color: rgb(239,219,78);
    }
    .sass{
      color: rgb(200,105,149);
    }
    .react{
      color: rgb(0,206,247);
    }
    .redux{
      color:rgb(118,75,189);
    }
    .bootstrap{
      color: rgb(118,75,189);
    }

    .git{
      color: rgb(240,60,47);
    }

    }
    h3 {
      height: 60px;
      width: 60px;
      font-size: 1.5rem;
      padding: 1rem;
      background-color: white;
      margin: 0.4rem;
      border-radius: 50% 20% / 10% 40%;;
      align-items: center;
      border: 1.5px dotted black
    }
    h2{
      height: 60px;
      width: 60px;
      font-size: 1rem;
      padding: 1rem;
      background-color: white;
      margin: 0.4rem;
      border-radius: 50% 20% / 10% 40%;;
      align-items: center;
      border: 1.5px dotted black
    }
  
`;
