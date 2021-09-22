import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "./HomePage.styles.scss";

const HomePage = () => {
  // eslint-disable-next-line no-unused-vars
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 16) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });
  return (
    <div>
      <div id="home" className="section no-page-title">
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
