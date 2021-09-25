import React, { useEffect, useState, useRef } from "react";

import { Stage, Layer, Image } from "react-konva";
import LaptopImage from "../../../images/plan_etaje/c1/plan_parter.png";
import useImage from "use-image";
import "./Etaj.scss";

const Etaj8 = () => {
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
  var sceneWidth = 1600;
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

  const BuildingImage = () => {
    const [image] = useImage(LaptopImage, "Anonymous");

    return <Image image={image} />;
  };
  return (
    <div className="scene-center">
      <h1>Etaj 1 Scara C1</h1>
      <hr />
      <div className="dual">
        <div className="informatii">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo eius
            sint voluptatum. Accusantium nesciunt quasi labore. Harum tempore
            praesentium, a sed voluptatem nisi reiciendis, vero quidem hic fugit
            neque eligendi.
          </p>
        </div>
        <hr />
        <div id="map-container" className="map-container2">
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
            </Layer>
          </Stage>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Etaj8;
