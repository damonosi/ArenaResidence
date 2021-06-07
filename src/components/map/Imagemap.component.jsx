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
  Label,
  Group,
  Tag,
} from "react-konva";
import Konva from "konva";
import "./imageMap.scss";
import useImage from "use-image";
import MapImage from "../../images/decor/1.jpg";
import { Data } from "./MAP";
import { debounce } from "../functions/debounce";

const ImageMapPage = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const tooltipRef = useRef();
  function updateTooltip(tooltip, x, y, text) {
    tooltip.getText().text(text);
    tooltip.position({
      x: x,
      y: y,
    });
    tooltip.show();
  }
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

  const onMouseOver = (e) => {
    var shape = e.target;
    if (shape) {
      shape.opacity(0.5);
    }
  };

  const onMouseOut = (e) => {
    var shape = e.target;
    if (shape) {
      shape.opacity(0);
    }
  };
  const shapeRef = useRef();

  const areas = Data();
  for (var key in areas) {
    const area = areas[key];
    const points = area.points;
  }

  const onMouseMove = (e) => {};

  useEffect(() => {}, []);

  const BuildingImage = () => {
    const [image] = useImage(MapImage, "Anonymous");
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
    <Stage id="container" width={window.innerWidth} height={window.innerHeight}>
      <Layer id="tooltipLayer">
        <BuildingImage></BuildingImage>
        <Line
          fill="red"
          points={[[891, 434, 892, 400, 768, 394, 766, 438]]}
          closed={true}
          strokeWidth={100}
          lineCap="round"
          lineJoin="round"
        />
        <Label opacity={0.75} visible={true} listening={false}>
          <Tag
            fill="black"
            pointerDirection="down"
            pointerWidth={10}
            pointerHeight={10}
            lineJoin="round"
            shadowColor="black"
            shadowBlur={10}
            shadowOffsetX={10}
            shadowOffsetY={10}
            shadowOpacity={0.5}
          />
        </Label>
        <Text
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          text="HEllooo"
          fontfamily="Calibry"
          fontSize={18}
          padding={5}
          fill="red"
        ></Text>
      </Layer>
    </Stage>
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
