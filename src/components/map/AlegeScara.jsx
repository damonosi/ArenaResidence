import React, { useState, useEffect, useRef } from "react";

import { Stage, Layer, Image, Group, Label, Tag, Text } from "react-konva";

import { useHistory } from "react-router-dom";

import useImage from "use-image";
import LaptopImage from "../../images/building_map/bloc_map_mapping.png";

import ScaraC1 from "./AnimatedStores/AlegeScara/ScaraC1";
import ScaraC2 from "./AnimatedStores/AlegeScara/ScaraC2";

import "./imageMap.scss";

const AlegeScara = () => {
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
  var sceneWidth = 1590;
  var sceneHeight = 850;

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
    fitStageIntoParentContainer();
    window.addEventListener("resize", fitStageIntoParentContainer);
  }, [sceneHeight, sceneWidth]);

  let history = useHistory();

  const handleClick = () => {
    history.push("/scara/c1");
    history.go(0);
  };
  const handleClick2 = () => {
    history.push("/scara/c2");
    history.go(0);
  };

  const handleTouch = () => {
    setTimeout(() => {
      history.push("/scara/c1");
    }, 1000);
  };
  const handleTouch2 = () => {
    setTimeout(() => {
      history.push("/scara/c2");
    }, 1000);
  };

  const BuildingImage = () => {
    const [image] = useImage(LaptopImage, "Anonymous");

    return <Image image={image} />;
  };

  return (
    <div id="map-container" className="map-container">
      <div className="distance "></div>
      <h1>
        SELECTATI <br /> SCARA DORITA
      </h1>
      <div class="arrow bounce">
        <a class="fa fa-arrow-down fa-2x" href="#map-container">
          {" "}
        </a>
      </div>
      <Stage
        ref={stageRef}
        id="container"
        width={dimensions.width}
        height={1050}
        label="mapare_bloc"
      >
        <Layer>
          <BuildingImage id="build" />
          <Group onTouchStart={handleTouch} onClick={handleClick}>
            <ScaraC1 />
          </Group>
          <Group onTouchStart={handleTouch2} onClick={handleClick2}>
            <ScaraC2 />
          </Group>
          <Label id="tooltip" x={500} y={20}>
            <Tag
              fill={"rgba(253, 180, 0, .7)"}
              stroke={"#333"}
              shadowColor={"black"}
              shadowBlur={10}
              shadowOffsetX={10}
              shadowOffsetY={10}
              shadowOpacity={0.5}
              lineJoin={"round"}
              pointerDirection={"bottom"}
              pointerWidth={10}
              pointerHeight={10}
              cornerRadius={5}
            />
            <Text
              color="red"
              text="ALEGETI SCARA DORITA"
              fontSize={44}
              padding={10}
              fill="#e6decb"
            />
          </Label>
        </Layer>
      </Stage>
    </div>
  );
};

export default AlegeScara;
