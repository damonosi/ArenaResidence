import React from "react";
import "./ContactPage.styles.scss";
import Lottie from "react-lottie";
import animationData from "./contact-us.json";

const ContactPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div className="contact-container">
        <div className="left-right-container">
          <div className="left-contact">
            <p>Contactati-ne</p>
            <h2>
              Haideti sa <br /> colaboram
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas,
              veritatis. Ex adipisci commodi ratione maxime expedita tempore
              cupiditate magni, veritatis, quia laudantium hic quas earum,
              ducimus voluptatibus modi ad animi?
            </p>

            <div className="social-cont">
              <a href="https://www.facebook.com/arenaresidencebacau/">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/arena_residence_bacau/">
                <i className="fab fa-instagram"></i>
              </a>
              <a href=" https://wa.me/0770258169">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <div className="right-contact">
            <Lottie options={defaultOptions} height={400} width={400}></Lottie>
          </div>
        </div>
        <div className="frame-container">
          <iframe
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJsaqPauNvtUARUV9dFbqEctA&key=AIzaSyAOvouR89FhXVDwimL2TTuBW5_BeY2fo8s"
            width="1000"
            height="500"
            allowFullScreen="allowFullScreen"
            title="map"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
