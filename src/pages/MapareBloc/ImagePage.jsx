import React from "react";

import NewImageMapPage from "../../components/map/LaptopMap";
import AlegeScara from "../../components/map/AlegeScara";
import "./ImagePage.styles.scss";

import ParteneriPage from "../Parteneri/ParteneriComponent";

const ImagePage = () => {
  return (
    <div className="containing">
      <div className="image-container">
        <AlegeScara />
      </div>
      <div className="pauza">
        <h1>Partenerii Nostri</h1>
      </div>
      <div className="banner-container">
        <ParteneriPage />
      </div>
    </div>
  );
};

export default ImagePage;
