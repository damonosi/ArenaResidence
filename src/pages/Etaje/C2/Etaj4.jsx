import React from "react";

import C2Etaj4 from "../../../components/map/Etaje/C2/Etaj4";
import "../Etaj.scss";
const C2_Etaj4 = () => {
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
                <C2Etaj4 />
              </div>

              <div className="distance"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default C2_Etaj4;
