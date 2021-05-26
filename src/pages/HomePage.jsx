import React from "react";

import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div id="home" className="section no-page-title">
      <div className="section-wrapper block content-1170 center-relative">
        <div className="content-wrapper">
          <h1 className="big-text">
            DESIGN <br />& SERIOZITATE
          </h1>
          <div className="button-holder text-left">
            <Link to="/map" className="button">
              ALEGETI APARTAMENTUL
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
