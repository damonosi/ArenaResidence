import React, { useRef, useState, useEffect } from "react";

import {
  Stage,
  Layer,
  Rect,
  Text,
  Shape,
  Circle,
  Image,
  Line,
} from "react-konva";
import Konva from "konva";
import "./imageMap.scss";
import useImage from "use-image";
import MapImage from "../../images/decor/1.jpg";

import { debounce } from "../functions/debounce";

const ImageMapPage = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 200);

    window.addEventListener("resize", debouncedHandleResize);
    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);
  const BuildingImage = () => {
    const [image] = useImage(MapImage);
    return (
      <Image
        width={window.innerWidth}
        height={window.innerHeight}
        image={image}
      />
    );
  };

  const [isShown, setIsShown] = useState(false);

  return (
    <div id="container" className="img responsive-canvas">
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <BuildingImage></BuildingImage>
        </Layer>
        <Layer>
          <Rect
            fill="red"
            height="20"
            width="200"
            x={700}
            y={450}
            cornerRadius={30}
            visible
            onMouseLeave={(e) => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
              setIsShown(false);
            }}
            onClick={() => setIsShown(true)}
            onMouseEnter={(e) => {
              // style stage container:

              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
            }}
          />

          {isShown && (
            <Rect
              fill="red"
              opacity={1}
              height="20"
              width="200"
              x={700}
              y={450}
              visible={false}
            />
          )}
        </Layer>
      </Stage>
    </div>
  );
};

export default ImageMapPage;

// <Container>
//       <ImageMapper
//         src={MapImage}
//         map={MAP}
//         fillColor="rgba(170, 163, 57, 0.4)"
//         onClick={() => setShow(true)}
//         imgWidth={dimensions.width}
//         parentWidth={dimensions.width}
//         responsive={true}
//         natural={true}
//         width={dimensions.width}
//         height={dimensions.height}
//         onMouse
//       />
//     </Container>
