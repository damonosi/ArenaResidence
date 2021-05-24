import React from "react";

import companyLogo from "../images/logoCladire.png";

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
            office.arenaresidence@gmail.com
          </a>
          <h1>0727 339 499</h1>
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
