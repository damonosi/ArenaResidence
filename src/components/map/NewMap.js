import React, { useState, useEffect } from "react";

import { Stage, Layer, Image } from "react-konva";
import { Html } from "react-konva-utils";
import Modalul from "./Modal";
import "./imageMap.scss";
import useImage from "use-image";
import MapImage from "../../images/decor/1.jpg";

import { debounce } from "../functions/debounce";

import { Parter, Et1, Et2, Et3, Et4, Et5, Et6, Et7, Et8 } from "./Etaje";

const NewImageMapPage = () => {
  // const getWidth = () =>
  //   window.innerWidth ||
  //   document.documentElement.clientWidth ||
  //   document.body.clientWidth;

  // function useCurrentWidth() {
  //   // save current window width in the state object
  //   let [width, setWidth] = useState(getWidth());

  //   // in this case useEffect will execute only once because
  //   // it does not have any dependencies.
  //   useEffect(() => {
  //     const resizeListener = () => {
  //       // change width from the state object
  //       setWidth(getWidth());
  //     };
  //     // set resize listener
  //     window.addEventListener("resize", resizeListener);

  //     // clean up function
  //     return () => {
  //       // remove resize listener
  //       window.removeEventListener("resize", resizeListener);
  //     };
  //   }, []);

  //   return width;
  // }

  const [setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const BuildingImage = () => {
    const [image] = useImage(MapImage, "Anonymous");
    useEffect(() => {
      const debouncedHandleResize = debounce(function handleResize() {
        setDimensions({
          height: window.innerHeight,
          width: window.innerWidth,
        });
      }, 500);
      window.addEventListener("resize", debouncedHandleResize);
      return (_) => {
        window.removeEventListener("resize", debouncedHandleResize);
      };
    }, []);

    return <Image image={image} />;
  };
  const [setOpacity] = useState(1);
  const handleClose = (e) => {
    e.preventDefault();
    setOpacity(0);
  };

  useEffect(() => {}, []);
  return (
    <Stage id="container" width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <BuildingImage />
        <Parter onClick={handleClose} />

        <Et1 />
        <Et2 />
        <Et3 />
        <Et4 />
        <Et5 />
        <Et6 />
        <Et7 />
        <Et8 />
      </Layer>

      <Layer>
        <Html>
          <Modalul />
        </Html>
      </Layer>
    </Stage>
  );
};

export default NewImageMapPage;
