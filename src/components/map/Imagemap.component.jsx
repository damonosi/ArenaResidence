import React, { useState, useEffect } from "react";

import { Container } from "./imageMap.styles.js";

import ImageMapper from "react-img-mapper";

import Konva from "konva";
import "./imageMap.scss";
import imageMapResize from "image-map-resizer";
import MapImage from "../../images/decor/1.jpg";

const ImageMapPage = () => {
  const [show, setShow] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    var stageWidth = dimensions.width;
    var stageHeight = dimensions.height;

    function getData() {
      return {
        Parter: {
          color: "blue",
          points: [894, 474, 893, 436, 767, 436, 769, 478],
        },
        "Etajul 1": {
          color: "blue",
          points: [891, 434, 892, 400, 768, 394, 766, 438],
        },
        "Etajul 2": {
          color: "red",
          points: [892, 398, 891, 364, 769, 351, 769, 395],
        },
        "Etajul 3": {
          color: "yellow",
          points: [896, 364, 894, 329, 772, 311, 772, 350],
        },
        "Etajul 4": {
          color: "green",
          points: [894, 330, 893, 295, 770, 271, 772, 310],
        },
        "Etajul 5": {
          color: "green",
          points: [769, 270, 893, 297, 894, 259, 769, 229],
        },
        "Etajul 6": {
          color: "green",
          points: [895, 230, 893, 257, 769, 228, 769, 193],
        },
        "Etajul 7": {
          color: "green",
          points: [890, 174, 892, 223, 772, 186, 773, 127],
        },
      };
    }
    function updateTooltip(tooltip, x, y, text) {
      tooltip.getText().text(text);
      tooltip.position({
        x: x,
        y: y,
      });
      tooltip.show();
    }
    var stage = new Konva.Stage({
      container: "container",
      width: stageWidth,
      height: stageHeight,
    });
    var shapesLayer = new Konva.Layer();
    var tooltipLayer = new Konva.Layer();

    var tooltip = new Konva.Label({
      opacity: 0.75,
      visible: false,
      listening: false,
    });

    tooltip.add(
      new Konva.Tag({
        fill: "black",
        pointerDirection: "down",
        pointerWidth: 10,
        pointerHeight: 10,
        lineJoin: "round",
        shadowColor: "black",
        shadowBlur: 10,
        shadowOffsetX: 10,
        shadowOffsetY: 10,
        shadowOpacity: 0.5,
      })
    );

    tooltip.add(
      new Konva.Text({
        text: "",
        fontFamily: "Calibri",
        fontSize: 18,
        padding: 5,
        fill: "white",
      })
    );

    tooltipLayer.add(tooltip);

    // get areas data
    var areas = getData();

    // draw areas
    for (var key in areas) {
      var area = areas[key];
      var points = area.points;

      var shape = new Konva.Line({
        points: points,
        fill: area.color,
        opacity: 0,
        closed: true,
        // custom attr
        key: key,
      });

      shapesLayer.add(shape);
    }

    stage.add(shapesLayer);
    stage.add(tooltipLayer);

    stage.on("mouseover", function (evt) {
      var shape = evt.target;
      if (shape) {
        shape.opacity(0.5);
      }
    });
    stage.on("mouseout", function (evt) {
      var shape = evt.target;
      if (shape) {
        shape.opacity(0);
        tooltip.hide();
      }
    });
    stage.on("mousemove", function (evt) {
      var shape = evt.target;
      if (shape) {
        var mousePos = stage.getPointerPosition();
        var x = mousePos.x;
        var y = mousePos.y - 5;
        updateTooltip(tooltip, x, y, shape.attrs.key);
      }
    });

    function fitStageIntoParentContainer() {
      var container = document.querySelector("#stage-parent");

      // now we need to fit stage into parent
      var containerWidth = container.offsetWidth;
      // to do this we need to scale the stage
      var scale = containerWidth / stageWidth;

      stage.width(stageWidth * scale);
      stage.height(stageHeight * scale);
      stage.scale({ x: scale, y: scale });
      stage.draw();
    }

    fitStageIntoParentContainer();
    // adapt the stage on any window resize
    window.addEventListener("resize", fitStageIntoParentContainer);
    // adapt the stage on any window resize
  }, []);

  const URL =
    "https://res.cloudinary.com/dyfedllac/image/upload/v1621151357/decalculat_hlodof.svg";

  const MAP = {
    name: "my-map",
    areas: [
      {
        id: 0,
        name: "parter",
        shape: "poly",
        coords: [894, 474, 893, 436, 767, 436, 769, 478],
        label: "Parter",
      },
      {
        id: 1,
        name: "et1",
        shape: "poly",
        coords: [891, 434, 892, 400, 768, 394, 766, 438],
        label: "Etaj 1",
      },
      {
        id: 2,
        name: "et2",
        shape: "poly",
        coords: [892, 398, 891, 364, 769, 351, 769, 395],
        label: "Etaj 2",
      },
      {
        id: 3,
        name: "et3",
        shape: "poly",
        coords: [896, 364, 894, 329, 772, 311, 772, 350],
        label: "Etaj 3",
      },
      {
        id: 4,
        name: "et4",
        shape: "poly",
        coords: [894, 330, 893, 295, 770, 271, 772, 310],
        label: "Etaj 4",
      },
      {
        id: 5,
        name: "et5",
        shape: "poly",
        coords: [769, 270, 893, 297, 894, 259, 769, 229],
        label: "Etaj 5",
      },
      {
        id: 6,
        name: "et6",
        shape: "poly",
        coords: [895, 230, 893, 257, 769, 228, 769, 193],
        label: "Etaj 6",
      },
      {
        id: 7,
        name: "et6",
        shape: "poly",
        coords: [890, 174, 892, 223, 772, 186, 773, 127],
        label: "Etaj 6",
      },
    ],
  };

  return (
    <div className="stage-parent" id="stage-parent">
      <div id="container"></div>
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
