import React from "react";
import { Link } from "react-router-dom";
import companyLogo from "../images/logoCladire.png";

const Header = () => {
  return (
    <header className="header-holder">
      <div className="menu-wrapper center-relative relative">
        <div className="header-logo">
          <a href="#home">
            <img src={companyLogo} alt="Arena Residence" />
          </a>
        </div>

        <div className="toggle-holder">
          <div id="toggle">
            <div className="first-menu-line"></div>
            <div className="second-menu-line"></div>
            <div className="third-menu-line"></div>
          </div>
        </div>

        <div className="menu-holder">
          <nav id="header-main-menu">
            <ul className="main-menu sm sm-clean">
              <li>
                <a href="#home">Home</a>
              </li>

              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <Link href="#clients">Clients</Link>
              </li>

              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="clear"></div>
      </div>
    </header>
  );
};

export default Header;
