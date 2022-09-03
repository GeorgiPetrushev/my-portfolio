import React from "react";
import {AiFillGithub,AiFillLinkedin,AiFillPhone,AiOutlineMail} from "react-icons/ai";


const ContactMe = () => {
  return <div>
    <h1><AiFillPhone/> : <a href="tel:443-824-5866">(443) 824-5866</a></h1>
    <h1><AiOutlineMail /> : <a href = "mailto: george.petrushev.bell@gmail.com">George.Petrushev.Bell@gmail.com</a></h1>
    <AiFillGithub />
    <AiFillLinkedin />
  </div>;
};

export default ContactMe;