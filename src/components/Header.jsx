import React, { useState ,useEffect } from "react";
import { Link } from "react-router-dom";
import { HeaderStyle } from "./styles/Header.style";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  
  const handleWidthChanges = (e) => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWidthChanges);
    return () => window.removeEventListener('resize', handleWidthChanges);
  }, []);

  useEffect(() => {
    if (width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [width]);

  const menuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderStyle>
      <div>
      <h2>Georgi WebDev</h2>
        <nav className={menuOpen ? "isMenu" : ""}>
          <ul>
            <li>
              <Link to="/" onClick={menuToggle}>Home</Link>
            </li>
            <li>
              <Link to="/projects" onClick={menuToggle}>Projects</Link>
            </li>
            <li>
              <Link to="/contact" onClick={menuToggle}>Contact me</Link>
            </li>
          </ul>
          
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
