import styled from "styled-components";

export const HeaderStyle = styled.div`
  background-color: black;
  width: 100%;
  height: 12vh;
  padding: 0 1.5rem;
  @media screen and (min-width: 768px) {
    padding: 0 1.5rem;
  }
  transition: 0.5s ease all;
  div {
    color: white;
    max-width: 1920px;
    overflow: hidden;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 100;
    h2 {
      list-style: none;
      font-size: 2.5rem;
      font-weight: bold;
      text-decoration: none;
      color: white;
    }
    nav {
      top: 0;
      right: 100%;
      bottom: 0;
      width: 100%;
      height: 100vh;
      position: fixed;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      background: rgba(0,0,0, 0.3);
      backdrop-filter: blur(2px);
      transform: translate(0);
      transition: 0.3s ease transform;
      @media screen and (min-width: 768px) {
        transform: none;
        flex-direction: row;
        background: transparent;
        width: auto;
        height: 100%;
        position: static;
      }
      ul {
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        margin-bottom: 32px;
        @media screen and (min-width: 768px) {
          flex-direction: row;
          align-items: center;
          margin-bottom: 0;
          margin-right: 0.5rem;
        }
        li {
          &:not(:last-child) {
            margin-bottom: 32px;
            @media screen and (min-width: 768px) {
              margin-bottom: 0;
              margin-right: 16px;
            }
          }
          a {
            text-decoration: none;
            color: white;
            padding: 0.75rem 1.25rem;
            border-radius: 12px;
            transform: 0.5 ease all;

            &:hover {
                background: white;
                color: black;
            }
            &:active {
              border-radius: 18px;
              background: linear-gradient(rgba(255,255,255, 0.1), rgba(255,255,255, 0.5));
            }
          }
        }
      }
      button {
        cursor: pointer;
        outline: none;
        padding: 0.75rem 1.25rem;
        border-radius: 12px;
        font-size: 1rem;
        font-family: inherit;
        background: pink;
        color: black;
        border: 3px solid transparent;
        transition: 0.2s ease all;

        &:hover {
          border-color: pink;
          background: rgba(255, 165, 0, 0.9);
          color: white;
        }
        &:active {
          border-color: red;
          background: linear-gradient(rgba(210, 210, 210, 0.2), rgba(210, 210, 210, 0.3));
          color: black;
        }
      }
      &.isMenu {
        transform: translate(100%);
      }
    }
    icon {
      cursor: pointer;
      display: flex;
      align-items: center;
      font-size: 2rem;
      transition: 0.3s ease all;
      position: relative;

      &:hover {
        color: skyblue;
      }

      @media screen and (min-width: 768px) {
        display: none;
      }
    }
  }
`;
