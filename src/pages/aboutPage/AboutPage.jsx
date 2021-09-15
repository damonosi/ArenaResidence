import React from "react";

import RoundImage1 from "../../images/lider1.jpg";
import { Link } from "react-router-dom";
import "./About.styles.scss";

import ParallaxImage from "./../../components/Parallax/ParralaxImage";

const AboutPage = () => {
  return (
    <div className="about-container">
      <ParallaxImage
        y={[-35, 15]}
        height={800}
        width={1600}
        src={RoundImage1}
      />

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
