import React from "react";

import BarrierLogo from "../../images/parteneri/barrier.svg";
import Schneider from "../../images/parteneri/Scheider.svg";
import Porotherm from "../../images/parteneri/Porotherm2.svg";
import Rehau from "../../images/parteneri/Rehau.svg";
import "./Parteneri.scss";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";

const ParteneriComponent = () => {
  const slides = [
    {
      key: uuidv4(),
      content: <img src={BarrierLogo} alt="1" />,
    },
    {
      key: uuidv4(),
      content: <img src={Schneider} alt="2" />,
    },
    {
      key: uuidv4(),
      content: <img src={Porotherm} alt="3" />,
    },
    {
      key: uuidv4(),
      content: <img src={Rehau} alt="4" />,
    },
  ];

  return (
    <div id="services" className="services-section backy">
      <div className="content-wrapper">
        <Carousel
          config={config.gentle}
          offsetRadius={3}
          autoplay={true}
          interval={1000}
          goToSlide={40}
          goToSlideDelay={300}
          showNavigation={false}
          slides={slides}
        />
      </div>
    </div>
  );
};

export default ParteneriComponent;
