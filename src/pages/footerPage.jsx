import React from "react";

import companyLogo from "../images/logoCladire.png";

import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content center-relative">
        <div className="footer-logo">
          <img src={companyLogo} alt="logo" />
        </div>
        <div className="footer-logo-divider"></div>
        <div className="footer-mail">
          <a href="mailto:office.arenaresidence@gmail.com">
            <AiOutlineMail /> office.arenaresidence@gmail.com
          </a>
        </div>
        <div className="footer-social-divider"></div>
        <div className="social-holder">
          <a href="https://www.facebook.com/arenaresidencebacau">
            <span className="fa fa-facebook"></span>
          </a>
          <a href="https://www.instagram.com/arena_residence_bacau/">
            <span className="fa fa-instagram"></span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
