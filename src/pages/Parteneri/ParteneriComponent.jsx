import React from "react";

import BarrierLogo from "../../images/parteneri/barrier.svg";
import Schneider from "../../images/parteneri/Scheider.svg";
import Porotherm from "../../images/parteneri/Porotherm2.svg";
import Rehau from "../../images/parteneri/Rehau.svg";
import "./Parteneri.scss";
import { Parallax } from "react-scroll-parallax";

const ParteneriComponent = () => {
  return (
    <div id="services" className="services-section backy">
      <div className="content-wrapper">
        <div className="sectionare">
          <Parallax x={[-5, 5]}>
            <h1>
              Partenerii <br /> Nostrii
            </h1>
          </Parallax>
        </div>
        <img src={BarrierLogo} alt="1" />

        <img src={Schneider} alt="2" />

        <img src={Porotherm} alt="3" />

        <img src={Rehau} alt="4" />
      </div>
    </div>
  );
};

export default ParteneriComponent;
