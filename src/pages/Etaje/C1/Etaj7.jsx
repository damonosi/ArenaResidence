import React, { useEffect } from "react";

import C1Etaj7 from "../../../components/map/Etaje/C1/Etaj7";
import "../Etaj.scss";
import { useAlert } from "react-alert";
import ParteneriPage from "./../../Parteneri/ParteneriComponent";
const C1_Etaj7 = () => {
  const alert = useAlert();
  useEffect(() => {
    alert.show("Selectati apartamentul dorit");
  }, [alert]);
  return (
    <div className="contain-etaj">
      <div className="etaje">
        <div className="etaj">
          <div className="flerat">
            <div className="info-etaj">
              <div className="distance"></div>
              <div className="texter">
                <h1>
                  SELECTATI <br /> APARTAMENTUL <br /> DORIT <br /> Etaj 7{" "}
                  <br />
                  Scara C1
                </h1>
              </div>
              <div class="arrow bounce">
                <a class="fa fa-arrow-down fa-2x" href="#canvas-container">
                  {" "}
                </a>
              </div>
              <div className="padder">
                <div className="canvas-container" id="canvas-container">
                  <C1Etaj7 />
                </div>
              </div>
              <div className="distance"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="more-container ">
        <div className="banner-container ">
          <ParteneriPage />
        </div>
      </div>
    </div>
  );
};
export default C1_Etaj7;
