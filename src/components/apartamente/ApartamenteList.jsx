import React from "react";
import { Link } from "react-router-dom";
import { apartamenteData } from "./data.js";
import "./apartamente.scss";
const ApartamenteList = ({ title }) => {
  return (
    <div className="apartamente-list">
      {apartamenteData.map((apartament) => (
        <div
          className="apartament-preview"
          key={apartament.id}
          item={apartament}
        >
          <h2>{title}</h2>
          <Link to={`/apartamente/${apartament.id}`}>
            <h2>{apartament.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ApartamenteList;
