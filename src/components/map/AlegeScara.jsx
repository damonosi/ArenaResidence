import React, { useState } from "react";

import { Stage, Layer, Image, Group } from "react-konva";

import { useHistory } from "react-router-dom";
import { Responsive } from "./../../responsiveComponent/Responsive";

import useImage from "use-image";
import LaptopImage from "../../images/building_map/bloc_map_mapping.png";
import MobileImage from "../../images/building_map/C1_map_mobile.png";
import ScaraC1 from "./AnimatedStores/AlegeScara/ScaraC1";
import ScaraC2 from "./AnimatedStores/AlegeScara/ScaraC2";
import "./imageMap.scss";

const AlegeScara = () => {
  const [dimensions] = useState({
    height: window.innerHeight,

    width: window.innerWidth,
  });
  let history = useHistory();
  const handleClick = () => {
    history.push("/c1");
    history.go(0);
  };
  const handleClick2 = () => {
    history.push("/c2");
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
          <Group onClick={handleClick}>
            <ScaraC1 />
          </Group>
          <Group onClick={handleClick2}>
            <ScaraC2 />
          </Group>
        </Layer>
      </Stage>
    </div>
  );
};

export default AlegeScara;
