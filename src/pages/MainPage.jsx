import React from "react";

import AboutPage from "./aboutPage/AboutPage.jsx";
import ParteneriPage from "./Parteneri/ParteneriComponent";
import AlteProiecte from "./alteProiecte/alteProiecte";
import HomePage from "./homePage/HomePage.jsx";

import "./MainPage.styles.scss";
import { Parallax } from "react-scroll-parallax";

const MainPage = () => {
  return (
    <div className="site-wrapper">
      <div id="content" className="site-content center-relative">
        <HomePage />

        <section className="absec">
          <AboutPage />
        </section>

        <section className="alteProiecte-container">
          <div className="sectionare">
            <Parallax x={[-5, 5]}>
              <h1>Proiecte Finalizate </h1>
            </Parallax>
          </div>

          <AlteProiecte />
        </section>
      </div>

      <ParteneriPage />
    </div>
  );
};

export default MainPage;
