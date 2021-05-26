import React from "react";
import companyLogo from "../../images/logoCladire.png";

import { Link } from "react-router-dom";

const HeaderImage = () => {
  return (
    <header className="header-holder">
      <div className="menu-wrapper center-relative relative">
        <div className="header-logo">
          <Link to="/">
            <img src={companyLogo} alt="Seppo" />
          </Link>
        </div>

        <div className="menu-holder">
          <nav id="header-main-menu">
            <ul className="main-menu sm sm-clean">
              <li>
                <Link to="/">Innapoi</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="clear"></div>
      </div>
    </header>
  );
};

export default HeaderImage;
