import React from "react";
import ParteneriComponent from "./ParteneriComponent";
import "./ParteneriPage.css";

import Barrier from "../../images/parteneri/Barrier_Bistrita2.png";
import Porotherm from "../../images/parteneri/Porotherm2.png";
import Rehau from "../../images/parteneri/Rehau.svg";
import Scheider from "../../images/parteneri/Scheider.svg";

const ParteneriPage = () => {
  return (
    <div className="container">
      <h1 className="title-parteneri">Parteneri</h1>

      <div className="big-box">
        <div className="box-1">
          <div className="style-boxing-1">
            <img className="party" src={Barrier} alt="barrier logo" />
          </div>
          <div className="style-boxing-2">
            <h1 className="header-text">BARRIER</h1>
            <p className="text">
              Profesioniștii Barrier sunt alături de tine din prima clipă și îți
              oferă soluții personalizate, simple și fiabile pentru spațiul tău.
            </p>
          </div>
        </div>

        <div className="box-2">
          <div className="style-boxing-1">
            <img className="party" src={Porotherm} alt="porotherm" />
          </div>
          <div className="style-boxing-2">
            <h1 className="header-text">POROTHERM</h1>
            <p className="text">
              {" "}
              Porotherm 36.5 TermoPlus este un bloc ceramic slefuit cu insertii
              de vata minerala bazaltica, realizat in fabricile din Germania din
              materiale 100% naturale, este pentru executia peretilor
              nestructurali din zidarie.
            </p>
          </div>
        </div>
      </div>

      <div className="big-box2">
        <div className="box-3">
          <div className="style-boxing-1">
            <img className="party" src={Rehau} alt="rehau" />
          </div>
          <div className="style-boxing-2">
            <h1 className="header-text">REHAU</h1>
            <p className="text">
              REHAU - specialist în soluții pe bază de polimeri în sectoarele
              construcțiilor, auto și industrial, cu peste 20.000 de angajați în
              întreaga lume.
            </p>
          </div>
        </div>
        <div className="box-4">
          <div className="style-boxing-1">
            <img className="party" src={Scheider} alt="schneider" />
          </div>
          <div className="style-boxing-2">
            <h1 className="header-text">SCHNEIDER</h1>
            <p className="text">
              Scopul Schneider Electric este de a le oferi tuturor mijloacele
              necesare pentru a beneficia de energia si resursele noastre,
              respectand normele de sustenabilitate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParteneriPage;
