import React, { useState, useEffect, useRef } from "react";

import { Stage, Layer, Image, Group } from "react-konva";

import { useHistory } from "react-router-dom";

import useImage from "use-image";
import LaptopImage from "../../../../images/plan_etaje/c1/plan_2.png";

import Ap1 from "../../Apartamente/C1/Et2/Ap1";
import Ap2 from "../../Apartamente/C1/Et2/Ap2";
import Ap3 from "../../Apartamente/C1/Et2/Ap3";
import Ap4 from "../../Apartamente/C1/Et2/Ap4";
import Ap5 from "../../Apartamente/C1/Et2/Ap5";
import Ap6 from "../../Apartamente/C1/Et2/Ap6";
import "./Ejaje.scss";
const C1Etaj2 = () => {
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

  var sceneWidth = 2127;
  var sceneHeight = 5820;

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
    history.push("/apartamente/7");
    history.go(0);
  };

  const handleTouch = () => {
    history.push("/apartamente/7");
    history.go(0);
  };
  const handleClick = () => {
    history.push("/apartamente/8");
    history.go(0);
  };

  const handleTouch2 = () => {
    history.push("/apartamente/8");
    history.go(0);
  };
  const handleClick3 = () => {
    history.push("/apartamente/9");
    history.go(0);
  };

  const handleTouch3 = () => {
    history.push("/apartamente/9");
    history.go(0);
  };
  const handleClick4 = () => {
    history.push("/apartamente/10");
    history.go(0);
  };

  const handleTouch4 = () => {
    history.push("/apartamente/10");
    history.go(0);
  };
  const handleClick5 = () => {
    history.push("/apartamente/11");
    history.go(0);
  };

  const handleTouch5 = () => {
    history.push("/apartamente/11");
    history.go(0);
  };
  const handleClick6 = () => {
    history.push("/apartamente/12");
    history.go(0);
  };

  const handleTouch6 = () => {
    history.push("/apartamente/12");
    history.go(0);
  };

  const BuildingImage = () => {
    const [image] = useImage(LaptopImage, "Anonymous");

    return <Image image={image} />;
  };

  return (
    <div id="map-container" className="map-container">
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

          <Group onTouchStart={handleTouch} onClick={handleClick2}>
            <Ap1 />
          </Group>
          <Group onTouchStart={handleTouch2} onClick={handleClick}>
            <Ap2 />
          </Group>
          <Group onTouchStart={handleTouch3} onClick={handleClick3}>
            <Ap3 />
          </Group>
          <Group onTouchStart={handleTouch4} onClick={handleClick4}>
            <Ap4 />
          </Group>
          <Group onTouchStart={handleTouch5} onClick={handleClick5}>
            <Ap5 />
          </Group>
          <Group onTouchStart={handleTouch6} onClick={handleClick6}>
            <Ap6 />
          </Group>
        </Layer>
      </Stage>
    </div>
  );
};

export default C1Etaj2;
