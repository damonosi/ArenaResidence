import React, { useState, useEffect, useRef } from "react";

import { Stage, Layer, Image, Group } from "react-konva";

import { useHistory } from "react-router-dom";

import useImage from "use-image";
import LaptopImage from "../../../images/building_map/bloc_map_mapping.png";

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
    history.push("/etaje/C1/1");
    history.go(0);
  };

  const handleTouch = () => {
    history.push("/etaje/C1/1");
    history.go(0);
  };
  const handleClick = () => {
    history.push("/etaje/C1/2");
    history.go(0);
  };

  const handleTouch2 = () => {
    history.push("/etaje/C1/2");
    history.go(0);
  };
  const handleClick3 = () => {
    history.push("/etaje/C1/3");
    history.go(0);
  };

  const handleTouch3 = () => {
    history.push("/etaje/C1/3");
    history.go(0);
  };
  const handleClick4 = () => {
    history.push("/etaje/C1/4");
    history.go(0);
  };

  const handleTouch4 = () => {
    history.push("/etaje/C1/4");
    history.go(0);
  };
  const handleClick5 = () => {
    history.push("/etaje/C1/5");
    history.go(0);
  };

  const handleTouch5 = () => {
    history.push("/etaje/C1/5");
    history.go(0);
  };
  const handleClick6 = () => {
    history.push("/etaje/C1/6");
    history.go(0);
  };

  const handleTouch6 = () => {
    history.push("/etaje/C1/6");
    history.go(0);
  };
  const handleClick7 = () => {
    history.push("/etaje/C1/7");
    history.go(0);
  };

  const handleTouch7 = () => {
    history.push("/etaje/C1/7");
    history.go(0);
  };
  const handleClick8 = () => {
    history.push("/etaje/C1/8");
    history.go(0);
  };

  const handleTouch8 = () => {
    history.push("/etaje/C1/8");
    history.go(0);
  };

  const BuildingImage = () => {
    const [image] = useImage(LaptopImage, "Anonymous");

    return <Image image={image} />;
  };

  return (
    <div id="map-container" className="map-container">
      <h1>
        SELECTATI <br /> ETAJUL <br /> DORIT <br /> <br /> Scara C1
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
        height={dimensions.height}
        label="mapare_bloc"
        // onMouseMove={handleMouseMove}
      >
        <Layer>
          <BuildingImage id="build" />

          <Group onDblTap={handleTouch} onClick={handleClick2}>
            <C1Et1 />
          </Group>
          <Group onDblTap={handleTouch2} onClick={handleClick}>
            <C1Et2 />
          </Group>
          <Group onDblTap={handleTouch3} onClick={handleClick3}>
            <C1Et3 />
          </Group>
          <Group onDblTap={handleTouch4} onClick={handleClick4}>
            <C1Et4 />
          </Group>
          <Group onDblTap={handleTouch5} onClick={handleClick5}>
            <C1Et5 />
          </Group>
          <Group onDblTap={handleTouch6} onClick={handleClick6}>
            <C1Et6 />
          </Group>
          <Group onDblTap={handleTouch7} onClick={handleClick7}>
            <C1Et7 />
          </Group>
          <Group onDblTap={handleTouch8} onClick={handleClick8}>
            <C1Et8 />
          </Group>
        </Layer>
      </Stage>
    </div>
  );
};

export default C1;
