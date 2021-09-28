import React from "react";

import RoundImage1 from "../../images/lider1.jpg";

import "./About.styles.scss";

import ParallaxImage from "./../../components/Parallax/ParralaxImage";
import { Link } from "react-router-dom";
import { Responsive } from "../../responsiveComponent/Responsive";
const AboutPage = () => {
  return (
    <div className="about-container ">
      <Responsive displayIn={["Laptop"]}>
        <ParallaxImage
          y={[-35, 15]}
          height={800}
          width={1600}
          src={RoundImage1}
        />
      </Responsive>

      <Responsive displayIn={["Mobile"]}>
        <img height={700} width={1000} y={[-10, 10]} src={RoundImage1} />
      </Responsive>

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

        <Link className="colored" to="/scara">
          ALEGETI SCARA &rarr;
        </Link>

        <br />
      </div>
    </div>
  );
};

export default AboutPage;
