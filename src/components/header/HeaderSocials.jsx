import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://linkedin.com' target='_blank'>
        <BsLinkedin />
      </a>
      <a href='https://twitter.com' target='_blank'>
        <AiFillTwitterCircle />
      </a>
      <a href='https://github.com' target='_blank'>
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
