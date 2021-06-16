import React from "react";

import AboutPage from "./aboutPage/AboutPage.jsx";
import ParteneriPage from "./ParteneriPage.jsx";
import AlteProiecte from "./alteProiecte/alteProiecte";
import HomePage from "./homePage/HomePage.jsx";
import ContactPage from "./ContactPage/ContactPage";
import Parallax from "react-parallax-scroll";
import "./MainPage.styles.scss";

const MainPage = () => {
  return (
    <div className="site-wrapper">
      <Parallax>
        <div id="content" className="site-content center-relative">
          <HomePage />

          <AboutPage />

          <AlteProiecte />

          <ContactPage />
        </div>
      </Parallax>
      <ParteneriPage />
    </div>
  );
};

export default MainPage;
