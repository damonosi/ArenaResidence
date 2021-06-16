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

  const BuildingImage = ({ children }) => {
    const [image] = useImage(MapImage, "Anonymous");

    return <Image image={image} />;
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);

  useEffect(() => {}, []);
  return (
    <Stage id="container" width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <BuildingImage />
        <Parter onClick={() => setIsOpen(true)} />

        <Et1 onClick={() => setIsOpen2(true)} />
        <Et2 onClick={() => setIsOpen3(true)} />
        <Et3 onClick={() => setIsOpen4(true)} />
        <Et4 onClick={() => setIsOpen5(true)} />
        <Et5 onClick={() => setIsOpen6(true)} />
        <Et6 onClick={() => setIsOpen7(true)} />
        <Et7 onClick={() => setIsOpen8(true)} />
        <Et8 onClick={() => setIsOpen9(true)} />
      </Layer>

      <Layer>
        <Html>
          <Modalul open={isOpen} onClose={() => setIsOpen(false)}>
            Plan Parter
          </Modalul>
          <Modalul open={isOpen2} onClose={() => setIsOpen2(false)}>
            Plan Et1
          </Modalul>
          <Modalul open={isOpen3} onClose={() => setIsOpen3(false)}>
            Plan Et2
          </Modalul>
          <Modalul open={isOpen4} onClose={() => setIsOpen4(false)}>
            Plan Et3
          </Modalul>
          <Modalul open={isOpen5} onClose={() => setIsOpen5(false)}>
            Plan Et4
          </Modalul>
          <Modalul open={isOpen6} onClose={() => setIsOpen6(false)}>
            Plan Et5
          </Modalul>
          <Modalul open={isOpen7} onClose={() => setIsOpen7(false)}>
            Plan Et6
          </Modalul>
          <Modalul open={isOpen8} onClose={() => setIsOpen8(false)}>
            Plan Et7
          </Modalul>
          <Modalul open={isOpen9} onClose={() => setIsOpen9(false)}>
            Plan Et8
          </Modalul>
        </Html>
      </Layer>
    </Stage>
  );
};

export default NewImageMapPage;
