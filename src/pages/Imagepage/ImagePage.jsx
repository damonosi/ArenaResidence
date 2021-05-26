import React from "react";

import ImageMapPage from "../../components/map/Imagemap.component";
import HeaderImage from "./ImageHeader";
import Footer from "../footerPage";
import "./ImagePage.styles.scss";

const ImagePage = () => {
  return (
    <>
      <div className="containing">
        <HeaderImage />
        <ImageMapPage />
      </div>
      <Footer />
    </>
  );
};

export default ImagePage;
