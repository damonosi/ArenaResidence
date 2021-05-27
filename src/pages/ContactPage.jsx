import React from "react";

import { FiPhoneCall } from "react-icons/fi";

const ContactPage = () => {
  return (
    <div id="contact" className="section">
      <div className="page-title-holder">
        <h3 className="entry-title">CONTACT</h3>
      </div>
      <div className="section-wrapper block content-1170 center-relative">
        <div className="contact-wrapper">
          <div className="one_half">
            <p className="title-description-up">CONTACTATI-NE</p>
            <h2 className="entry-title medium-text">
              Integritatea este <br />
              Baza
            </h2>
            <p>
              Suntem pe piata din Bacau de foarte mult timp si toate proiectele
              noastre se desfasoara cu integritate si seriozitate
            </p>
            <br />
            <div className="social">
              <a href="https://www.facebook.com/arenaresidencebacau/">
                <span className="fa fa-facebook"></span>
              </a>
            </div>

            <div className="social">
              <a href="https://www.instagram.com/arena_residence_bacau/">
                <span className="fa fa-instagram"></span>
              </a>
            </div>
          </div>

          <div className="clear"></div>

          <iframe
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJsaqPauNvtUARUV9dFbqEctA&key=AIzaSyAOvouR89FhXVDwimL2TTuBW5_BeY2fo8s"
            width="1000"
            height="300"
            allowFullScreen="allowFullScreen"
            title="map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
