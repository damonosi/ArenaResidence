import React from "react";

import { Link } from "react-router-dom";

import "./HomePage.styles.scss";

const HomePage = () => {
  return (
    <div>
      <div id="home" className="section no-page-title">
        <div className="aligning">
          <h1 className="big-text text-left">
            APARTAMENTE <br /> DE VISAT
          </h1>
          <div className="button-holder text-left">
            <Link className="colored" to="/scara">
              ALEGETI SCARA
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
