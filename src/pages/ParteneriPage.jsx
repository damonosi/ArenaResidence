import React from "react";
import { Carousel } from "3d-react-carousal";

import BarrierLogo from "../images/parteneri/barrier.svg";
import Schneider from "../images/parteneri/Scheider.svg";
import Porotherm from "../images/parteneri/Porotherm2.png";
import Rehau from "../images/parteneri/Rehau2.svg";
import "./Parteneri.css";
const ParteneriPage = () => {
  let slides = [
    <img src={Rehau} alt="1" />,
    <img src={BarrierLogo} alt="2" />,
    <img src={Schneider} alt="3" />,
    <img src={Porotherm} alt="4" />,
  ];

  return (
    <div id="services" className="section">
      <div className="page-title-holder">
        <h3 className="entry-title">Partenerii Nostri</h3>
      </div>
      <div className="section-wrapper block content-1170 center-relative">
        <div className="content-wrapper">
          <Carousel slides={slides} autoplay={true} interval={4000} />
          <div className="clear"></div>
        </div>
      </div>
    </div>
  );
};

export default ParteneriPage;
