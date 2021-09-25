import React from "react";

import BarrierLogo from "../../images/parteneri/barrier.svg";
import Schneider from "../../images/parteneri/Scheider.svg";
import Porotherm from "../../images/parteneri/Porotherm2.svg";
import Rehau from "../../images/parteneri/Rehau.svg";
import "./Parteneri.scss";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const ParteneriComponent = () => {
  return (
    <div id="services" className="services-section backy">
      <div className="content-wrapper">
        <Carousel
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          showArrows={false}
          interval={1000}
          autoPlay
          centerMode
          infiniteLoop
          swipeable={true}
          emulateTouch={true}
        >
          <img src={BarrierLogo} alt="1" />
          <img src={Schneider} alt="2" />
          <img src={Porotherm} alt="3" />
          <img src={Rehau} alt="4" />
        </Carousel>
      </div>
    </div>
  );
};

export default ParteneriComponent;
