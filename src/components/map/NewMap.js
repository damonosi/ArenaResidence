import React, { useState, useEffect, useLayoutEffect } from "react";

import { Stage, Layer, Image } from "react-konva";
import { Html } from "react-konva-utils";
import Modalul from "./Modal";
import "./imageMap.scss";
import useImage from "use-image";
import MapImage from "../../images/decor/1.jpg";
import imageMapResize from "image-map-resizer";
import { Parter, Et1, Et2, Et3, Et4, Et5, Et6, Et7, Et8 } from "./Etaje";

const NewImageMapPage = () => {
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

  const BuildingImage = ({ x, y, height, width }) => {
    const [image] = useImage(MapImage, "Anonymous");

    return <Image x={x} y={y} height={height} width={width} image={image} />;
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
  const CANVAS_VIRTUAL_WIDTH = 950;
  const CANVAS_VIRTUAL_HEIGHT = 950;
  const scale = Math.min(
    dimensions.width / CANVAS_VIRTUAL_WIDTH,
    dimensions.height / CANVAS_VIRTUAL_HEIGHT
  );

  useEffect(() => {
    imageMapResize();
  }, []);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
  useEffect(() => {
    if (isOpen2) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen2]);
  useEffect(() => {
    if (isOpen3) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen3]);
  useEffect(() => {
    if (isOpen4) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen4]);
  useEffect(() => {
    if (isOpen5) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen5]);
  useEffect(() => {
    if (isOpen6) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen6]);
  useEffect(() => {
    if (isOpen7) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen7]);
  useEffect(() => {
    if (isOpen8) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen8]);
  useEffect(() => {
    if (isOpen9) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen9]);
  return (
    <Stage
      id="container"
      width={dimensions.width}
      height={dimensions.height}
      scaleX={scale}
      scaleY={scale}
    >
      <Layer>
        <BuildingImage id="build" />
        <Parter
          onClick={() => {
            setIsOpen(true);
          }}
        />

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
            <h1>Plan Parter</h1>
            <div className="">
              <Layer>
                <img src="https://picsum.photos/500/1000" alt="" />
              </Layer>
            </div>
          </Modalul>
          <Modalul open={isOpen2} onClose={() => setIsOpen2(false)}>
            <h1>Plan Etaj 1</h1>
            <div className="">
              <Layer>
                <img src="https://picsum.photos/500/1000" alt="" />
              </Layer>
            </div>
          </Modalul>
          <Modalul open={isOpen3} onClose={() => setIsOpen3(false)}>
            <h1>Plan Etaj 2</h1>
            <div className="">
              <Layer>
                <img src="https://picsum.photos/500/1000" alt="" />
              </Layer>
            </div>
          </Modalul>
          <Modalul open={isOpen4} onClose={() => setIsOpen4(false)}>
            <h1>Plan Etaj 3</h1>
            <div className="">
              <Layer>
                <img src="https://picsum.photos/500/1000" alt="" />
              </Layer>
            </div>
          </Modalul>
          <Modalul open={isOpen5} onClose={() => setIsOpen5(false)}>
            <h1>Plan Etaj 4</h1>
            <div className="">
              <Layer>
                <img src="https://picsum.photos/500/1000" alt="" />
              </Layer>
            </div>
          </Modalul>
          <Modalul open={isOpen6} onClose={() => setIsOpen6(false)}>
            <h1>Plan Etaj 5</h1>
            <div className="">
              <Layer>
                <img src="https://picsum.photos/500/1000" alt="" />
              </Layer>
            </div>
          </Modalul>
          <Modalul open={isOpen7} onClose={() => setIsOpen7(false)}>
            <h1>Plan Etaj 6</h1>
            <div className="">
              <Layer>
                <img src="https://picsum.photos/500/1000" alt="" />
              </Layer>
            </div>
          </Modalul>
          <Modalul open={isOpen8} onClose={() => setIsOpen8(false)}>
            <h1>Plan Etaj 7</h1>
            <div className="">
              <Layer>
                <img src="https://picsum.photos/500/1000" alt="" />
              </Layer>
            </div>
          </Modalul>
          <Modalul open={isOpen9} onClose={() => setIsOpen9(false)}>
            <h1>Plan Etaj 8</h1>
            <div className="">
              <Layer>
                <img src="https://picsum.photos/500/1000" alt="" />
              </Layer>
            </div>
          </Modalul>
        </Html>
      </Layer>
    </Stage>
  );
};

export default NewImageMapPage;
