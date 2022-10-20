import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HeaderStyle } from "../styles/Header.style";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  console.log(size);
  useEffect(() => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);
  console.log(size);
  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
    console.log(size.width);
  }, [size.width, menuOpen]);

  const menuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderStyle>
      <div>
        <h2>Georgi WebDev</h2>
        <nav className={`${menuOpen && size.width < 768 ? "isMenu" : ""}`}>
          <StyleUl>
            <li>
              <Link to="/my-portfolio/" onClick={menuToggle} className="link">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/my-portfolio/projects"
                onClick={menuToggle}
                className="link"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/my-portfolio/contact"
                onClick={menuToggle}
                className="link"
              >
                Contact me
              </Link>
            </li>
          </StyleUl>
        </nav>

        <icon>
          {menuOpen ? (
            <AiOutlineClose onClick={menuToggle} />
          ) : (
            <BiMenuAltRight onClick={menuToggle} />
          )}
        </icon>
      </div>
    </HeaderStyle>
  );
};

const StyleUl = styled.ul`
  @media screen and (min-width: 768px) {
    .link {
      transition: 400ms;
      padding: 1rem 1rem;
      &:hover {
        padding: 1rem 2rem;
      }
    }
  }
`;

export default Header;
