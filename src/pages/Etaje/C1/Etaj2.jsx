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

              <div className="canvas-container">
                <C1Etaj2 />
              </div>

              <div className="distance"></div>
              <h8></h8>

              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default C1_Etaj2;
