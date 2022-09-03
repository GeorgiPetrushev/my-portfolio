import styled from "styled-components";

export const SkillsStyle = styled.div`
  background-color: red;
  min-height: 85vh;
  text-align: center;
  margin: 0 10%;
  font-size: 1.5rem;
  .tittle {
    font-size: 3rem;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
  }
  .icon-container {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 1rem;
    background-color: green;
    @media screen and (min-width: 768px){
        grid-template-columns: repeat(3,1fr);
    }
    h3 {
        min-width: 10rem;
        min-height: 5rem;
      background-color: blue;
    }
  }
`;
