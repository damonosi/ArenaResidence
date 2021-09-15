import React from "react";

import AboutPage from "./aboutPage/AboutPage.jsx";
import ParteneriPage from "./Parteneri/ParteneriComponent";
import AlteProiecte from "./alteProiecte/alteProiecte";
import HomePage from "./homePage/HomePage.jsx";
import { CgArrowDown } from "react-icons/cg";

import "./MainPage.styles.scss";

const MainPage = () => {
  return (
    <div className="site-wrapper">
      <div id="content" className="site-content center-relative">
        <HomePage />

        <section className="absec">
          <AboutPage />
        </section>
        <div className="sectionare">
          <h1>Proiecte Finalizate </h1>
          <CgArrowDown className="downy" />
        </div>
        <section className="alteProiecte-container">
          <AlteProiecte />
        </section>
      </div>

      <ParteneriPage />
    </div>
  );
};

export default MainPage;
