import React from "react";
import contactT from "../pictures/contact-pic.jpg";
import { ContactMeStyle } from "./styles/ContactMeStyle";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillPhone,
  AiOutlineMail,
} from "react-icons/ai";

const ContactMe = () => {
  return (
    <ContactMeStyle>
      <img src={contactT} alt="contact" />
      <div className="container-info">
        <div className="container-phone-and-email">
          <h1>
            <AiFillPhone /> <a href="tel:443-824-5866">(443) 824-5866</a>
          </h1>
          <h1>
            <AiOutlineMail />
            <a href="mailto: george.petrushev.bell@gmail.com">
              George.Petrushev.Bell@gmail.com
            </a>
          </h1>
        </div>
        <div className="icon-container">
          <h1>
            <a
              href="https://github.com/GeorgiPetrushev"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub />
            </a>
          </h1>
          <h1>
            <a
              href="https://www.linkedin.com/in/georgi-petrushev-51151821a/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin />
            </a>
          </h1>
        </div>
      </div>
    </ContactMeStyle>
  );
};

export default ContactMe;
