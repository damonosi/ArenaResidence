import React, { useState } from "react";

import { Stage, Layer, Image, Group } from "react-konva";

import { useHistory } from "react-router-dom";
import { Responsive } from "../../../responsiveComponent/Responsive";

import useImage from "use-image";
import LaptopImage from "../../../images/building_map/C2_map_laptop-.png";
import MobileImage from "../../../images/building_map/C1_map_mobile.png";

import C2Et1 from "../AnimatedStores/C2/C2_Et1";
import C2Et2 from "../AnimatedStores/C2/C2_Et2";
import C2Et3 from "../AnimatedStores/C2/C2_Et3";
import C2Et4 from "../AnimatedStores/C2/C2_Et4";
import C2Et5 from "../AnimatedStores/C2/C2_Et5";
import C2Et6 from "../AnimatedStores/C2/C2_Et6";
import C2Et7 from "../AnimatedStores/C2/C2_Et7";
import C2Et8 from "../AnimatedStores/C2/C2_Et8";

const C2 = () => {
  const [dimensions] = useState({
    height: window.innerHeight,

    width: window.innerWidth,
  });
  let history = useHistory();
  const handleClick = () => {
    history.push("/apartamente/1");
    history.go(0);
  };
  const handleClick2 = () => {
    history.push("/apartamente/1");
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

          <Group onClick={handleClick2}>
            <C2Et1 />
          </Group>
          <Group onClick={handleClick2}>
            <C2Et2 />
          </Group>
          <Group onClick={handleClick2}>
            <C2Et3 />
          </Group>
          <Group onClick={handleClick2}>
            <C2Et4 />
          </Group>
          <Group onClick={handleClick2}>
            <C2Et5 />
          </Group>
          <Group onClick={handleClick2}>
            <C2Et6 />
          </Group>
          <Group onClick={handleClick2}>
            <C2Et7 />
          </Group>
          <Group onClick={handleClick2}>
            <C2Et8 />
          </Group>
        </Layer>
      </Stage>
    </div>
  );
};

export default C2;
