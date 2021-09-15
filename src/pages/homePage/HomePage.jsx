import React from "react";

import { Link } from "react-router-dom";

import "./HomePage.styles.scss";

const HomePage = () => {
  return (
    <div>
      <div id="home" className="section no-page-title">
        <h1 className="big-text text-left">
          APARTAMENTE <br /> DE VISAT
        </h1>
        <div className="aligning">
          <div className="bottom button-holder text-left"></div>
        </div>
        <Link className="colored" to="/scara">
          ALEGETI SCARA &rarr;
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
