import React from "react";

import C1Etaj6 from "../../../components/map/Etaje/C1/Etaj6";
import "../Etaj.scss";
const C1_Etaj6 = () => {
  return (
    <div className="contain-etaj">
      <div className="etaje">
        <div className="etaj">
          <div className="flerat">
            <div className="info-etaj">
              <div className="distance"></div>
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
export default C1_Etaj6;
