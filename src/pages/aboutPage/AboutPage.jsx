import React from "react";

import RoundImage1 from "../../images/decor/1.jpg";
import { Link } from "react-router-dom";
import "./About.styles.scss";
import Parallax, { Layer } from "react-parallax-scroll";

const AboutPage = () => {
  return (
    <div className="about-container">
      <Parallax>
        <div className="half-right">
          <Layer settings={{ speed: 0.2, type: ["translateY"] }}>
            <img src={RoundImage1} alt="" />
          </Layer>
        </div>
      </Parallax>
      <div className="half-left">
        <p className="title-description-up">WHO WE ARE</p>
        <h2 className="entry-title medium-text">
          Live up to <br />
          your creative potential.
        </h2>
        <p>
          Code the energy hidden in matter citizens of distant epochs from which
          we spring drake equation perga inconspicuous motespatch clean designed
          code and energy matter.
        </p>
        <br />

        <Link to="/contact" className="colored">
          Contactati-ne
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
