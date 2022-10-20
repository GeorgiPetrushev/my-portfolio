import styled from "styled-components";

export const HomeStyle = styled.div`
margin-top:2rem;
padding: 1rem;
  .left-side {
    margin: auto;
    margin-bottom: 3rem;
    width: 50%;
    padding: 0.2rem;
    text-align: center;
    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 1rem;
      width: 13rem;
      border-radius: 2rem;
    }
    h2 {
      margin-bottom: 0.3rem;
    }
  }
  .right-side {
    margin: auto;

    margin-bottom: 3rem;
    p {
      width: 80%;
      margin: auto;
    }
  }
  @media screen and (min-width: 768px) {
    display: flex;
    margin-top: 0rem;
    min-height: 60vh;
    .left-side {
      margin: auto;
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .right-side {
      margin: auto;
      width: 40%;
      p {
        width: 90%;
        margin: auto;
      }
    }
  }
`;
