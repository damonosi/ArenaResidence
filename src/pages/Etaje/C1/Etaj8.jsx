import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import C1Etaj8 from "../../../components/map/Etaje/C1/Etaj8";
import ParteneriPage from "./../../Parteneri/ParteneriComponent";
import "../Etaj.scss";
const C1_Etaj8 = () => {
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
                  SELECTATI <br /> APARTAMENTUL <br /> DORIT <br /> Etaj 8{" "}
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
                  <C1Etaj8 />
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
export default C1_Etaj8;
