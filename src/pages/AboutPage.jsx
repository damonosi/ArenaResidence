import React from "react";

const AboutPage = () => {
  return (
    <div id="about" className="section">
      <div className="page-title-holder">
        <h3 className="entry-title">Cine suntem?</h3>
      </div>
      <div className="section-wrapper block content-1170 center-relative">
        <div className="content-wrapper">
          <div className="one_half">
            <p className="title-description-up">WHO WE ARE</p>
            <h2 className="entry-title medium-text">
              Live up to <br />
              your creative potential.
            </h2>
            <p>
              Code the energy hidden in matter citizens of distant epochs from
              which we spring drake equation perga inconspicuous motespatch
              clean designed code and energy matter.
            </p>
            <br />
            <div className="button-holder text-left">
              <a href="#portfolio" className="button">
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
