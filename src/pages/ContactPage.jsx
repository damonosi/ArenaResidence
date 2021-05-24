import React from "react";

const ContactPage = () => {
  return (
    <div id="contact" className="section">
      <div className="page-title-holder">
        <h3 className="entry-title">CONTACT</h3>
      </div>
      <div className="section-wrapper block content-1170 center-relative">
        <div className="content-wrapper">
          <div className="one_half ">
            <p className="title-description-up">CONTACT US</p>
            <h2 className="entry-title medium-text">
              Lets start <br />
              Working
            </h2>
            <p>
              Because they are hard, because that goal will serve to organize
              and measure the best of our energies and skills, because that
              challenge is one that we are willing to accept one we are.
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

          <div className="one_half last ">
            <div className="contact-form">
              <p>
                <input
                  id="name"
                  type="text"
                  name="your-name"
                  placeholder="Name"
                />
              </p>
              <p>
                <input
                  id="contact-email"
                  type="email"
                  name="your-email"
                  placeholder="Email"
                />
              </p>
              <p>
                <input
                  id="subject"
                  type="text"
                  name="your-subject"
                  placeholder="Subject"
                />
              </p>
              <p>
                <textarea
                  id="message"
                  name="your-message"
                  placeholder="Message"
                ></textarea>
              </p>
              <p className="contact-submit-holder">
                <input type="submit" value="SEND" />
              </p>
            </div>
          </div>
          <div className="clear"></div>

          <p>
            <iframe
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJsaqPauNvtUARUV9dFbqEctA&key=AIzaSyAOvouR89FhXVDwimL2TTuBW5_BeY2fo8s"
              width="400"
              height="300"
              allowFullScreen="allowFullScreen"
              title="map"
            ></iframe>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
