import React from "react";

import NewImageMapPage from "../../components/map/NewMap";
import "./ImagePage.styles.scss";

import ParteneriPage from "../ParteneriPage";

// const containerVariants = {
//   hidden: {
//     opacity: 0,
//     x: 0,
//     y: 0,
//   },
//   visible: {
//     opacity: 1,
//     x: 0,
//     y: 0,
//     transition: { duration: 0.3 },
//   },
//   exit: {
//     opacity: 0,
//     x: 0,
//     y: 0,
//     transition: { ease: "linear" },
//   },
// };
const ImagePage = () => {
  return (
    <div className="containing">
      <div id="image" className="image-container">
        <NewImageMapPage />
      </div>

      <div className="banner-container">
        <ParteneriPage />
      </div>
    </div>
  );
};

export default ImagePage;
