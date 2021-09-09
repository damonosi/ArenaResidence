import React, { useState, useEffect, useRef } from "react";

import { Stage, Layer, Image, Group } from "react-konva";

import { useHistory } from "react-router-dom";
import { Responsive } from "../../../responsiveComponent/Responsive";

import useImage from "use-image";
import LaptopImage from "../../../images/building_map/C2_map_laptop-.png";
import MobileImage from "../../../images/building_map/C1_map_mobile.png";

const C1 = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,

    width: window.innerWidth,
  });
  let history = useHistory();
  const handleClick = () => {
    history.push("/ScaraC1");
    history.go(0);
  };
  const handleClick2 = () => {
    history.push("/ScaraC2");
    history.go(0);
  };
  const BuildingImage = () => {
    const [image] = useImage(LaptopImage, "Anonymous");
    const [mobile_image] = useImage(MobileImage, "Anonymous");

    return (
      <>
        <Responsive displayIn={["Laptop"]}>
          <Image image={image} />
        </Responsive>
        <Responsive displayIn={["Mobile"]}>
          <Image image={mobile_image} />
        </Responsive>
      </>
    );
  };

  return (
    <div className="map-container">
      <Stage
        id="container"
        width={dimensions.width}
        height={850}
        label="mapare_bloc"
        // onMouseMove={handleMouseMove}
      >
        <Layer>
          <BuildingImage id="build" />
          <Group onClick={handleClick}></Group>
          <Group onClick={handleClick2}></Group>
        </Layer>
      </Stage>
    </div>
  );
};

export default C1;
