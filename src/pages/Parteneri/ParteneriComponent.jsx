import React from "react";

import "./Parteneri.scss";
import { Parallax } from "react-scroll-parallax";
import { Responsive } from "../../responsiveComponent/Responsive";
import ControlledCarousel from "./../../components/Carousel/Carousel";
const ParteneriComponent = () => {
  return (
    <div id="services" className="services-section backy">
      <Responsive displayIn={["Laptop"]}>
        <Parallax x={[-5, 5]}>
          <h1>
            Partenerii <br /> Nostrii
          </h1>
        </Parallax>
      </Responsive>

      <Responsive displayIn={["Mobile"]}>
        <h1>
          Partenerii <br /> Nostrii
        </h1>
      </Responsive>

      <div className="carousel-container">
        <ControlledCarousel />
      </div>
    </div>
  );
};

export default ParteneriComponent;
