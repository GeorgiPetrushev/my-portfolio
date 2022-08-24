import React, { useState ,useEffect } from "react";
import { HeaderStyle } from "./styles/Header.style";
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

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
    console.log(size.width)
  }, [size.width, menuOpen]);

  const menuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderStyle>
      <div>
        <h2>Georgi WebDev</h2>
        <nav className={`${menuOpen && size.width ? "isMenu" : ""}`}>
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

export default Header;
