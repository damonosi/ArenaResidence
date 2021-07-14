import React, { useState } from "react";
import companyLogo from "../../images/logoCladire.png";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink exact to="/" className="nav-logo">
          <img src={companyLogo} alt="Arena Residence" />
        </NavLink>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              exact
              className="nav-links"
              activeClassName="active"
              onClick={handleClick}
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              className="nav-links"
              activeClassName="active"
              onClick={handleClick}
              to="/map"
            >
              Apartamente
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              className="nav-links"
              activeClassName="active"
              onClick={handleClick}
              to="/about"
            >
              About
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              exact
              className="nav-links"
              activeClassName="active"
              onClick={handleClick}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
};

export default Header;
