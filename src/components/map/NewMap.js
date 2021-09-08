import React, { useState, useEffect, useRef } from "react";

import { Stage, Layer, Image, Group } from "react-konva";
import { Html } from "react-konva-utils";
import Modalul from "./Modal";
import "./imageMap.scss";
import useImage from "use-image";
import MapImage from "../../images/building_map/bloc_map_mapping.png";
import PlanParter from "../../images/apartamente/c1/etaj_0/PLAN PARTER C1- CATALOG- V2.png";
import imageMapResize from "image-map-resizer";
import C1Parter from "./AnimatedStores/C1/C1_Parter";

import C1Et1 from "./AnimatedStores/C1/C1_Et1";
import C1Et2 from "./AnimatedStores/C1/C1_Et2";
import C1Et3 from "./AnimatedStores/C1/C1_Et3";
import C1Et4 from "./AnimatedStores/C1/C1_Et4";
import C1Et5 from "./AnimatedStores/C1/C1_Et5";
import C1Et6 from "./AnimatedStores/C1/C1_Et6";
import C1Et7 from "./AnimatedStores/C1/C1_Et7";
import C1Et8 from "./AnimatedStores/C1/C1_Et8";
import C2Parter from "./AnimatedStores/C2/C2_Parter";

import C2Et1 from "./AnimatedStores/C2/C2_Et1";
import C2Et2 from "./AnimatedStores/C2/C2_Et2";
import C2Et3 from "./AnimatedStores/C2/C2_Et3";
import C2Et4 from "./AnimatedStores/C2/C2_Et4";
import C2Et5 from "./AnimatedStores/C2/C2_Et5";
import C2Et6 from "./AnimatedStores/C2/C2_Et6";
import C2Et7 from "./AnimatedStores/C2/C2_Et7";
import C2Et8 from "./AnimatedStores/C2/C2_Et8";
import { Ap1 } from "./Apartamente";
import { useHistory } from "react-router-dom";

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

  const BuildingImage = () => {
    const [image] = useImage(MapImage, "Anonymous");

    return <Image image={image} />;
  };
  const ApartamentImage = () => {
    const [image] = useImage(PlanParter, "Anonymous");

    return <Image width={800} height={1000} image={image} />;
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
  const CANVAS_VIRTUAL_WIDTH = 250;
  const CANVAS_VIRTUAL_HEIGHT = 550;
  const scale = Math.min(
    dimensions.width / CANVAS_VIRTUAL_WIDTH,
    dimensions.height / CANVAS_VIRTUAL_HEIGHT
  );

  useEffect(() => {
    imageMapResize();
  }, []);

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

  let history = useHistory();

  const stageRef = useRef();

  function handleClick() {
    history.push("/apartamente/1");
    history.go(0);
  }
  const onDblTap = () => {
    setIsOpen(true);
  };
  const onDblTap2 = () => {
    setIsOpen2(true);
  };
  const onDblTap3 = () => {
    setIsOpen3(true);
  };
  const onDblTap4 = () => {
    setIsOpen4(true);
  };
  const onDblTap5 = () => {
    setIsOpen5(true);
  };
  const onDblTap6 = () => {
    setIsOpen6(true);
  };
  const onDblTap7 = () => {
    setIsOpen7(true);
  };
  const onDblTap8 = () => {
    setIsOpen8(true);
  };
  const onDblTap9 = () => {
    setIsOpen9(true);
  };

  return (
    <div className="map-container">
      <Stage
        ref={stageRef}
        id="container"
        width={dimensions.width}
        height={1250}
        scaleX={scale}
        scaleY={scale}
        label="mapare_bloc"
        // onMouseMove={handleMouseMove}
      >
        <Layer>
          <BuildingImage id="build" />
          <Group
            onDblTap={onDblTap}
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <C1Parter />
          </Group>
          <Group onDblTap2={onDblTap2} onClick={() => setIsOpen2(true)}>
            <C1Et1 />
          </Group>
          <Group onDblTap3={onDblTap3} onClick={() => setIsOpen3(true)}>
            <C1Et2 />
          </Group>
          <Group onDblTap4={onDblTap4} onClick={() => setIsOpen4(true)}>
            <C1Et3 />
          </Group>
          <Group onDblTap5={onDblTap5} onClick={() => setIsOpen5(true)}>
            <C1Et4 />
          </Group>
          <Group onDblTap6={onDblTap6} onClick={() => setIsOpen6(true)}>
            <C1Et5 />
          </Group>
          <Group onDblTap7={onDblTap7} onClick={() => setIsOpen7(true)}>
            <C1Et6 />
          </Group>
          <Group onDblTap8={onDblTap8} onClick={() => setIsOpen8(true)}>
            <C1Et7 />
          </Group>
          <Group onDblTap9={onDblTap9} onClick={() => setIsOpen9(true)}>
            <C1Et8 />
          </Group>

          <C2Parter
            onDblTap={onDblTap}
            onClick={() => {
              setIsOpen(true);
            }}
          />

          <C2Et1 onDblTap2={onDblTap2} onClick={() => setIsOpen2(true)} />
          <C2Et2 onDblTap3={onDblTap3} onClick={() => setIsOpen3(true)} />
          <C2Et3 onDblTap4={onDblTap4} onClick={() => setIsOpen4(true)} />
          <C2Et4 onDblTap5={onDblTap5} onClick={() => setIsOpen5(true)} />
          <C2Et5 onDblTap6={onDblTap6} onClick={() => setIsOpen6(true)} />
          <C2Et6 onDblTap7={onDblTap7} onClick={() => setIsOpen7(true)} />
          <C2Et7 onDblTap8={onDblTap8} onClick={() => setIsOpen8(true)} />
          <C2Et8 onDblTap9={onDblTap9} onClick={() => setIsOpen9(true)} />
        </Layer>

        <Layer>
          <Html>
            <Modalul open={isOpen} onClose={() => setIsOpen(false)}>
              <h1>Plan Parter</h1>
              <div className="modstg">
                <Stage
                  id="container2"
                  width={750}
                  height={950}
                  x={"50%"}
                  // scaleX={scale}
                  // scaleY={scale}
                >
                  <Layer>
                    <ApartamentImage />
                    <Ap1 onClick={handleClick} />
                  </Layer>
                </Stage>
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
    </div>
  );
};

export default NewImageMapPage;
