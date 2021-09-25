import React from "react";

import BarrierLogo from "../../images/parteneri/barrier.svg";
import Schneider from "../../images/parteneri/Scheider.svg";
import Porotherm from "../../images/parteneri/Porotherm2.svg";
import Rehau from "../../images/parteneri/Rehau.svg";
import "./Parteneri.scss";

const ParteneriComponent = () => {
  return (
    <div id="services" className="services-section backy">
      <div className="sectionare ">
        <div className="space">
          <h1>Partenerii Nostrii</h1>
        </div>
      </div>
      <div className="content-wrapper">
        <img src={BarrierLogo} alt="1" />

        <img src={Schneider} alt="2" />

        <img src={Porotherm} alt="3" />

        <img src={Rehau} alt="4" />
      </div>
    </div>
  );
};

export default ParteneriComponent;
