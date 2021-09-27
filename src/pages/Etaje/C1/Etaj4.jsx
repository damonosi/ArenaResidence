import React from "react";

import C1Etaj4 from "../../../components/map/Etaje/C1/Etaj4";
import "../Etaj.scss";
const C1_Etaj4 = () => {
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
    </div>
  );
};
export default C1_Etaj4;
