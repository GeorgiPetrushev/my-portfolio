import React from "react";
import { HeaderStyle } from "./styles/Header.style";
import {BiMenuAltRight} from "react-icons/bi";
import {AiOutlineClose} from "react-icons/ai";

const Header = () => {
  return (
    <HeaderStyle>
      <div>
        <h2>Georgi WebDev</h2>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Projects</a>
          </li>
          <li>
            <a href="/">Contact me</a>
          </li>
        </ul>
        <button>Night mode</button>
      </nav>

      <icon><BiMenuAltRight /> 
      </icon>
      </div>
    </HeaderStyle>
  );
};

export default Header;
