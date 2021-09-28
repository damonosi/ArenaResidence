import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import C1Etaj7 from "../../../components/map/Etaje/C1/Etaj7";
import "../Etaj.scss";
import ParteneriPage from "./../../Parteneri/ParteneriComponent";
const C2_Etaj7 = () => {
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
                <h1>SELECTATI APARTAMENTUL DORIT</h1>
              </div>
              <div class="arrow bounce">
                <a class="fa fa-arrow-down fa-2x" href>
                  {" "}
                </a>
              </div>
              <div className="padder">
                <div className="canvas-container">
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
export default C2_Etaj7;
