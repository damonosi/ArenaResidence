import React, { useState, useEffect, useRef } from "react";

import { Stage, Layer, Image, Group } from "react-konva";

import { useHistory } from "react-router-dom";
import { Responsive } from "../../../responsiveComponent/Responsive";

import useImage from "use-image";
import LaptopImage from "../../../images/building_map/C1_map_laptop-.png";
import MobileImage from "../../../images/building_map/C1_map_mobile.png";

import C1Parter from "../AnimatedStores/C1/C1_Parter";
import C1Et1 from "../AnimatedStores/C1/C1_Et1";
import C1Et2 from "../AnimatedStores/C1/C1_Et2";
import C1Et3 from "../AnimatedStores/C1/C1_Et3";
import C1Et4 from "../AnimatedStores/C1/C1_Et4";
import C1Et5 from "../AnimatedStores/C1/C1_Et5";
import C1Et6 from "../AnimatedStores/C1/C1_Et6";
import C1Et7 from "../AnimatedStores/C1/C1_Et7";
import C1Et8 from "../AnimatedStores/C1/C1_Et8";

const C1 = () => {
  const [dimensions] = useState({
    height: window.innerHeight,

    width: window.innerWidth,
  });
  useEffect(() => {
    const stage = stageRef;
    console.log(stage.current);
  }, []);
  const stageRef = useRef();
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
        ref={stageRef}
        id="container"
        width={dimensions.width}
        height={850}
        label="mapare_bloc"
        // onMouseMove={handleMouseMove}
      >
        <Layer>
          <BuildingImage id="build" />
          <Group onClick={handleClick}>
            <C1Parter />
          </Group>
          <Group onClick={handleClick2}>
            <C1Et1 />
          </Group>
          <Group onClick={handleClick2}>
            <C1Et2 />
          </Group>
          <Group onClick={handleClick2}>
            <C1Et3 />
          </Group>
          <Group onClick={handleClick2}>
            <C1Et4 />
          </Group>
          <Group onClick={handleClick2}>
            <C1Et5 />
          </Group>
          <Group onClick={handleClick2}>
            <C1Et6 />
          </Group>
          <Group onClick={handleClick2}>
            <C1Et7 />
          </Group>
          <Group onClick={handleClick2}>
            <C1Et8 />
          </Group>
        </Layer>
      </Stage>
    </div>
  );
};

export default C1;
