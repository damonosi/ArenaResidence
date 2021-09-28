import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import C1Etaj4 from "../../../components/map/Etaje/C1/Etaj4";
import "../Etaj.scss";
import ParteneriPage from "./../../Parteneri/ParteneriComponent";
const C1_Etaj4 = () => {
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
                  <C1Etaj4 />
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
export default C1_Etaj4;
