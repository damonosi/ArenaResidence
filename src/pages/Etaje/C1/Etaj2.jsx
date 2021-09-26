import React from "react";

import C1Etaj2 from "../../../components/map/Etaje/C1/Etaj2";
import "../Etaj.scss";
const C1_Etaj2 = () => {
  return (
    <div className="contain-etaj">
      <div className="etaje">
        <div className="etaj">
          <div className="flerat">
            <div className="info-etaj">
              <div className="distance"></div>
              <div class="arrow bounce">
                <h1>SELECTATI APARTAMENTUL DORIT</h1>
                <a class="fa fa-arrow-down fa-2x" href="#"></a>
              </div>
              <div className="canvas-container">
                <C1Etaj2 />
              </div>

              <div className="distance"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default C1_Etaj2;
