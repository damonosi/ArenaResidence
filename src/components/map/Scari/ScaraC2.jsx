import React, { useState, useEffect, useRef } from "react";

import { Stage, Layer, Image, Group, Label, Tag, Text } from "react-konva";

import { useHistory } from "react-router-dom";

import useImage from "use-image";
import LaptopImage from "../../../images/building_map/bloc_map_mapping.png";

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
    history.push("/etaje/C2/1");
    history.go(0);
  };

  const handleTouch = () => {
    setTimeout(() => {
      history.push("/etaje/C2/1");
    }, 3000);
  };
  const handleClick = () => {
    history.push("/etaje/C2/2");
    history.go(0);
  };

  const handleTouch2 = () => {
    setTimeout(() => {
      history.push("/etaje/C2/2");
    }, 3000);
  };
  const handleClick3 = () => {
    history.push("/etaje/C2/3");
    history.go(0);
  };

  const handleTouch3 = () => {
    setTimeout(() => {
      history.push("/etaje/C2/3");
    }, 3000);
  };
  const handleClick4 = () => {
    history.push("/etaje/C2/4");
    history.go(0);
  };

  const handleTouch4 = () => {
    setTimeout(() => {
      history.push("/etaje/C2/4");
    }, 3000);
  };
  const handleClick5 = () => {
    history.push("/etaje/C2/5");
    history.go(0);
  };

  const handleTouch5 = () => {
    setTimeout(() => {
      history.push("/etaje/C2/5");
    }, 3000);
  };
  const handleClick6 = () => {
    history.push("/etaje/C2/6");
    history.go(0);
  };

  const handleTouch6 = () => {
    setTimeout(() => {
      history.push("/etaje/C2/6");
    }, 3000);
  };
  const handleClick7 = () => {
    history.push("/etaje/C2/7");
    history.go(0);
  };

  const handleTouch7 = () => {
    setTimeout(() => {
      history.push("/etaje/C2/7");
    }, 3000);
  };
  const handleClick8 = () => {
    history.push("/etaje/C2/8");
    history.go(0);
  };

  const handleTouch8 = () => {
    setTimeout(() => {
      history.push("/etaje/C2/8");
    }, 3000);
  };

  const BuildingImage = () => {
    const [image] = useImage(LaptopImage, "Anonymous");

    return <Image image={image} />;
  };

  return (
    <div id="map-container" className="map-container">
      <h1>
        <br /> Scara C2
      </h1>
      <div class="arrow bounce">
        <a class="fa fa-arrow-down fa-2x" href="#map-container">
          {" "}
        </a>
      </div>
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
          <Label id="tooltip" x={500} y={80}>
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
              text="ALEGETI ETAJUL DORIT"
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

export default C2;
