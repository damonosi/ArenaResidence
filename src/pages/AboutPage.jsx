import React from "react";

import RoundImage1 from "../images/decor/1.jpg";
import RoundImage2 from "../images/decor/2.jpg";

import "./About.styles.scss";
const AboutPage = () => {
  return (
    <div id="about" className="section">
      <div className="page-title-holder">
        <h3 className="entry-title">Cine suntem?</h3>
      </div>
      <div className="section-wrapper block content-1170 center-relative">
        <div className="content-wrapper">
          <div className="about-img">
            <img src={RoundImage1} alt="" />
          </div>
          <div className="one_half">
            <h2 className="entry-title medium-text">
              Suntem dezvoltatorii imobiliari S.C Arena Residence S.R.L
            </h2>

            <p>
              Avem finalizate urmatoarele Proiecte: <br /> Prieteniei nr. 26
              tronsolul A si tronsonul B . Cartierul de case Small Town,
              Rezidential P+5 Prieteniei 89-91, Rezidential P+6 1Mai 60 si
              Rezidential P+6 SAtefan cel Mare 32 A
            </p>
            <br />
            <div className="button-holder text-left">
              <a href="http://www.residence-arena.ro/" className="button">
                LEARN MORE
              </a>
            </div>
          </div>

          <div
            className="one_half last"
            data-threshold="0 0"
            data-jarallax-element="120 0"
          >
            <img src="images/about_01.jpg" alt="" />
          </div>
          <div className="clear"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
