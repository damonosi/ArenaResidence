import React from "react";

import RoundImage1 from "../../images/decor/1.jpg";

import "./About.styles.scss";
import Parallax, { Layer } from "react-parallax-scroll";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="half-left">
        <p class="title-description-up">WHO WE ARE</p>
        <h2 class="entry-title medium-text">
          Live up to <br />
          your creative potential.
        </h2>
        <p>
          Code the energy hidden in matter citizens of distant epochs from which
          we spring drake equation perga inconspicuous motespatch clean designed
          code and energy matter.
        </p>
        <br />
        <div class="button-holder text-left">
          <Link href="http://www.residence-arena.ro/" class="colored">
            LEARN MORE
          </Link>
        </div>
      </div>

      <Parallax>
        <div className="half-right">
          <Layer settings={{ speed: 0.2, type: ["translateY"] }}>
            <img src={RoundImage1} alt="" />
          </Layer>
        </div>
      </Parallax>
    </div>
  );
};

export default AboutPage;
