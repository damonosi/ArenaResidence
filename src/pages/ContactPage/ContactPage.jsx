import React, { useRef } from "react";
import "./ContactPage.styles.scss";
import Lottie from "react-lottie";
import animationData from "./facebook.json";
import animationData2 from "./instagram.json";
import animationData3 from "./whatsapp.json";

const ContactPage = () => {
  const lottieRef = useRef(null);
  const handleClickToPause = () => lottieRef?.current?.handleClickToPause?.();
  return (
    <div id="contact" className="section section-contact">
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
            <iframe
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJsaqPauNvtUARUV9dFbqEctA&key=AIzaSyAOvouR89FhXVDwimL2TTuBW5_BeY2fo8s"
              width="1000"
              height="500"
              allowFullScreen="allowFullScreen"
              title="map"
            ></iframe>
            <div className="lot-cont">
              <div className="social">
                <a href="https://www.facebook.com/arenaresidencebacau/">
                  <Lottie
                    width={100}
                    height={100}
                    speed={0.5}
                    isClickToPauseDisabled
                    ref={lottieRef}
                    title="facebook"
                    options={{
                      loop: true,
                      autoplay: true,
                      animationData,
                    }}
                  ></Lottie>
                </a>
              </div>

              <div className="social2">
                <a href="https://www.instagram.com/arena_residence_bacau/">
                  <Lottie
                    width={150}
                    height={150}
                    speed={0.6}
                    isClickToPauseDisabled
                    ref={lottieRef}
                    title="instagram"
                    options={{
                      loop: true,
                      autoplay: false,
                      animationData: animationData2,
                    }}
                  ></Lottie>
                </a>
              </div>

              <div className="social">
                <a href="https://www.instagram.com/arena_residence_bacau/">
                  <Lottie
                    width={100}
                    height={100}
                    speed={0.5}
                    isClickToPauseDisabled
                    ref={lottieRef}
                    title="whattsup"
                    options={{
                      loop: true,
                      autoplay: true,
                      animationData: animationData3,
                    }}
                  ></Lottie>
                </a>
              </div>
            </div>
          </div>

          <div className="clear"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
