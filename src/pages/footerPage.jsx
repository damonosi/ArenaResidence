import React from "react";

import companyLogo from "../images/logoCladire.png";

import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content center-relative">
        <div className="footer-logo">
          <img src={companyLogo} alt="logo" />
        </div>
        <div className="footer-logo-divider"></div>

        <div className="footer-social-divider"></div>
        <div className="social-holder">
          <a href="https://www.facebook.com/arenaresidencebacau">
            <span className="fa fa-facebook"></span>
          </a>
          <a href="https://www.instagram.com/arena_residence_bacau/">
            <span className="fa fa-instagram"></span>
          </a>
          <a href=" https://wa.me/0770258169">
            <span className="fa fa-whatsapp"></span>
          </a>
          <a href="mailto:office.arenaresidence@gmail.com">
            <AiOutlineMail />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
