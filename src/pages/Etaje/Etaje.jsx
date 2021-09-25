import React from "react";
import { useParams } from "react-router-dom";
import { C1_Etaje } from "../../components/Etaj/etaj_data";
const Etaje = () => {
  const { et } = useParams();
  return (
    <div className="contain">
      <div className="apartament">
        {C1_Etaje
          // eslint-disable-next-line eqeqeq
          .filter((apartament) => apartament.id == et)
          .map((filteredApartment) => (
            <div className="produs">
              <div className="fler">
                <div className="info-apartament">
                  <h1 className="title">{filteredApartment.title}</h1>
                  <h4>Apartament cu {filteredApartment.camere} camere</h4>
                  <h8>{filteredApartment.descriere}</h8>
                  <p className="firstt">Etaj : {filteredApartment.etaj}</p>
                  <p>Scara : {filteredApartment.scara}</p>
                  <p>Liber : {filteredApartment.liber}</p>
                  <img
                    height={200}
                    width={200}
                    src={filteredApartment.src}
                    alt="etaj 1 C1"
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Etaje;
