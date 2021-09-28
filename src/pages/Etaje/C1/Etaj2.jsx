import React, { useEffect } from "react";

import C1Etaj2 from "../../../components/map/Etaje/C1/Etaj2";
import { useAlert } from "react-alert";
import "../Etaj.scss";
import ParteneriPage from "./../../Parteneri/ParteneriComponent";
const C1_Etaj2 = () => {
  const alert = useAlert();
  useEffect(() => {
    if (window.innerWidth < 700) {
      alert.show("APASATI de doua ori pentru a selecta apartamentul dorit");
    } else {
      alert.show("Selectati apartamentul dorit");
    }
  });
  return (
    <div className="contain-etaj">
      <div className="etaje">
        <div className="etaj">
          <div className="flerat">
            <div className="info-etaj">
              <div className="distance"></div>
              <div className="texter">
                <h1>
                  SELECTATI <br /> APARTAMENTUL <br /> DORIT
                </h1>
              </div>
              <div class="arrow bounce">
                <a class="fa fa-arrow-down fa-2x" href>
                  {" "}
                </a>
              </div>
              <div className="padder">
                <div className="canvas-container">
                  <C1Etaj2 />
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
export default C1_Etaj2;
