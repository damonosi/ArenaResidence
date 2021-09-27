import React from "react";

import C1Etaj6 from "../../../components/map/Etaje/C1/Etaj6";
import "../Etaj.scss";
const C2_Etaj6 = () => {
  return (
    <div className="contain-etaj">
      <div className="etaje">
        <div className="etaj">
          <div className="flerat">
            <div className="info-etaj">
              <div className="distance"></div>
              <h1>SELECTATI APARTAMENTUL DORIT</h1>
              <div class="arrow bounce">
                <a class="fa fa-arrow-down fa-2x" href="#map-container">
                  {" "}
                </a>
              </div>
              <div className="canvas-container">
                <C1Etaj6 />
              </div>

              <div className="distance"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default C2_Etaj6;
