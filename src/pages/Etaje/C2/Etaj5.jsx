import React, { useEffect } from "react";
import { useAlert } from "react-alert";

import C2Etaj5 from "../../../components/map/Etaje/C1/Etaj5";
import "../Etaj.scss";
import ParteneriPage from "./../../Parteneri/ParteneriComponent";
const C2_Etaj5 = () => {
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
                  SELECTATI <br /> APARTAMENTUL <br /> DORIT <br /> Etaj 5{" "}
                  <br />
                  Scara C2
                </h1>
              </div>
              <div class="arrow bounce">
                <a class="fa fa-arrow-down fa-2x" href="#canvas-container">
                  {" "}
                </a>
              </div>
              <div className="padder">
                <div className="canvas-container" id="canvas-container">
                  <C2Etaj5 />
                </div>
              </div>

              <div className="distance"></div>
              <h8></h8>

              <p></p>
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
export default C2_Etaj5;
