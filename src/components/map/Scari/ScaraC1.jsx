import React, { useState, useEffect, useRef } from "react";

import { Stage, Layer, Image, Group } from "react-konva";

import { useHistory } from "react-router-dom";
import { Responsive } from "../../../responsiveComponent/Responsive";

import useImage from "use-image";
import LaptopImage from "../../../images/building_map/C1_map_laptop-.png";
import MobileImage from "../../../images/building_map/C1_map_mobile.png";

import C1Et1 from "../AnimatedStores/C1/C1_Et1";
import C1Et2 from "../AnimatedStores/C1/C1_Et2";
import C1Et3 from "../AnimatedStores/C1/C1_Et3";
import C1Et4 from "../AnimatedStores/C1/C1_Et4";
import C1Et5 from "../AnimatedStores/C1/C1_Et5";
import C1Et6 from "../AnimatedStores/C1/C1_Et6";
import C1Et7 from "../AnimatedStores/C1/C1_Et7";
import C1Et8 from "../AnimatedStores/C1/C1_Et8";

const C1 = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,

    width: window.innerWidth,
  });

  function debounce(fn, ms) {
    let timer;

    return (_) => {
      clearTimeout(timer);

      timer = setTimeout((_) => {
        timer = null;

        fn.apply(this, arguments);
      }, ms);
    };
  }
  const breakpoint = 700;
  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,

        width: window.innerWidth,
      });
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);

    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  const stageRef = useRef();

  const sceneWidth = 1500;
  const sceneHeight = 840;

  useEffect(() => {
    function fitStageIntoParentContainer() {
      var container = document.querySelector("#map-container");
      const stage = stageRef.current;
      // now we need to fit stage into parent container
      var containerWidth = container.offsetWidth;

      // but we also make the full scene visible
      // so we need to scale all objects on canvas
      var scale = containerWidth / sceneWidth;

      stage.width(sceneWidth * scale);
      stage.height(sceneHeight * scale);
      stage.scale({ x: scale, y: scale });
    }
    if (window.innerWidth > breakpoint) {
      fitStageIntoParentContainer();
    } else {
      return;
    }
    window.addEventListener("resize", fitStageIntoParentContainer);
  }, [sceneHeight, sceneWidth]);
  let history = useHistory();

  const handleClick2 = () => {
    history.push("/etaje");
    history.go(0);
  };

  const handleTouch = () => {
    history.push("/etaje");
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
    <div id="map-container" className="map-container">
      <Stage
        ref={stageRef}
        id="container"
        width={dimensions.width}
        height={1240}
        label="mapare_bloc"
        // onMouseMove={handleMouseMove}
      >
        <Layer>
          <BuildingImage id="build" />

          <Group onTouchStart={handleTouch} onClick={handleClick2}>
            <C1Et1 />
          </Group>
          <Group onTouchStart={handleTouch} onClick={handleClick2}>
            <C1Et2 />
          </Group>
          <Group onTouchStart={handleTouch} onClick={handleClick2}>
            <C1Et3 />
          </Group>
          <Group onTouchStart={handleTouch} onClick={handleClick2}>
            <C1Et4 />
          </Group>
          <Group onTouchStart={handleTouch} onClick={handleClick2}>
            <C1Et5 />
          </Group>
          <Group onTouchStart={handleTouch} onClick={handleClick2}>
            <C1Et6 />
          </Group>
          <Group onTouchStart={handleTouch} onClick={handleClick2}>
            <C1Et7 />
          </Group>
          <Group onTouchStart={handleTouch} onClick={handleClick2}>
            <C1Et8 />
          </Group>
        </Layer>
      </Stage>
    </div>
  );
};

export default C1;
