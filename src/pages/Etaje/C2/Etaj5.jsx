import React from "react";

import C2Etaj5 from "../../../components/map/Etaje/C1/Etaj5";
import "../Etaj.scss";
const C2_Etaj5 = () => {
  return (
    <div className="contain-etaj">
      <div className="etaje">
        <div className="etaj">
          <div className="flerat">
            <div className="info-etaj">
              <div className="distance"></div>
              <div className="canvas-container">
                <C2Etaj5 />
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
export default C2_Etaj5;
