import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { apartamenteData } from "./data.js";
import "./apartamente.scss";
import drImg from "../../images/decor/6.jpg";
import { FaWhatsapp } from "react-icons/fa";
const Apartament = () => {
  const { id } = useParams();

  return (
    <div className="contain">
      <div className="apartament">
        <div className="back-cont">
          <Link to="/apartamente">
            <button className="butonus">Back</button>
          </Link>
        </div>
        {apartamenteData
          // eslint-disable-next-line eqeqeq
          .filter((apartament) => apartament.id == id)
          .map((filteredApartment) => (
            <div className="produs">
              <div className="fler">
                <h1>{filteredApartment.title}</h1>
                <h1>Apartament cu {filteredApartment.camere} camere</h1>
                <p>{filteredApartment.descriere}</p>
                <a href="https://wa.me/0770258169">
                  <button>
                    SUNATI <br /> <FaWhatsapp />
                  </button>
                </a>
                <h2>Pret : {filteredApartment.price}</h2>
                <h2>Etaj : {filteredApartment.etaj}</h2>
              </div>
              <div className="imagine">
                <img src={drImg} alt="" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Apartament;
