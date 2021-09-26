import React from "react";

import C2Etaj3 from "../../../components/map/Etaje/C2/Etaj3";
import "../Etaj.scss";
const C2_Etaj3 = () => {
  return (
    <div className="contain-etaj">
      <div className="etaje">
        <div className="etaj">
          <div className="flerat">
            <div className="info-etaj">
              <div className="distance"></div>

              <div className="distance"></div>
              <div className="canvas-container">
                <C2Etaj3 />
              </div>

              <div className="distance"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default C2_Etaj3;
