import React, { useState, useEffect, useRef } from "react";

import { Stage, Layer, Image, Group } from "react-konva";

import { useHistory } from "react-router-dom";

import useImage from "use-image";
import LaptopImage from "../../../images/building_map/C2_map_laptop-.png";

import C2Et1 from "../AnimatedStores/C2/C2_Et1";
import C2Et2 from "../AnimatedStores/C2/C2_Et2";
import C2Et3 from "../AnimatedStores/C2/C2_Et3";
import C2Et4 from "../AnimatedStores/C2/C2_Et4";
import C2Et5 from "../AnimatedStores/C2/C2_Et5";
import C2Et6 from "../AnimatedStores/C2/C2_Et6";
import C2Et7 from "../AnimatedStores/C2/C2_Et7";
import C2Et8 from "../AnimatedStores/C2/C2_Et8";

const C2 = () => {
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

  var sceneWidth = 1500;
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
  const handleClick2 = () => {
    history.push("/etaje/1");
    history.go(0);
  };

  const handleTouch = () => {
    history.push("/etaje/1");
    history.go(0);
  };
  const handleClick = () => {
    history.push("/etaje/2");
    history.go(0);
  };

  const handleTouch2 = () => {
    history.push("/etaje/2");
    history.go(0);
  };
  const handleClick3 = () => {
    history.push("/etaje/3");
    history.go(0);
  };

  const handleTouch3 = () => {
    history.push("/etaje/3");
    history.go(0);
  };
  const handleClick4 = () => {
    history.push("/etaje/4");
    history.go(0);
  };

  const handleTouch4 = () => {
    history.push("/etaje/4");
    history.go(0);
  };
  const handleClick5 = () => {
    history.push("/etaje/5");
    history.go(0);
  };

  const handleTouch5 = () => {
    history.push("/etaje/5");
    history.go(0);
  };
  const handleClick6 = () => {
    history.push("/etaje/6");
    history.go(0);
  };

  const handleTouch6 = () => {
    history.push("/etaje/6");
    history.go(0);
  };
  const handleClick7 = () => {
    history.push("/etaje/7");
    history.go(0);
  };

  const handleTouch7 = () => {
    history.push("/etaje/7");
    history.go(0);
  };
  const handleClick8 = () => {
    history.push("/etaje/8");
    history.go(0);
  };

  const handleTouch8 = () => {
    history.push("/etaje/8");
    history.go(0);
  };

  const BuildingImage = () => {
    const [image] = useImage(LaptopImage, "Anonymous");

    return <Image image={image} />;
  };

  return (
    <div id="map-container" className="map-container">
      <Stage
        id="container"
        ref={stageRef}
        width={dimensions.width}
        height={dimensions.height}
        label="mapare_bloc"
        // onMouseMove={handleMouseMove}
      >
        <Layer>
          <BuildingImage id="build" />

          <Group onTouchStart={handleTouch} onClick={handleClick2}>
            <C2Et1 />
          </Group>
          <Group onTouchStart={handleTouch2} onClick={handleClick}>
            <C2Et2 />
          </Group>
          <Group onTouchStart={handleTouch3} onClick={handleClick3}>
            <C2Et3 />
          </Group>
          <Group onTouchStart={handleTouch4} onClick={handleClick4}>
            <C2Et4 />
          </Group>
          <Group onTouchStart={handleTouch5} onClick={handleClick5}>
            <C2Et5 />
          </Group>
          <Group onTouchStart={handleTouch6} onClick={handleClick6}>
            <C2Et6 />
          </Group>
          <Group onTouchStart={handleTouch7} onClick={handleClick7}>
            <C2Et7 />
          </Group>
          <Group onTouchStart={handleTouch8} onClick={handleClick8}>
            <C2Et8 />
          </Group>
        </Layer>
      </Stage>
    </div>
  );
};

export default C2;
