import React from "react";

import Konva from "konva";

const Kanvas = () => {
  var width = window.innerWidth;
  var height = window.innerHeight;

  function getData() {
    return {
      "1st Floor": {
        color: "blue",
        points: [366, 298, 500, 284, 499, 204, 352, 183, 72, 228, 74, 274],
      },
      "2nd Floor": {
        color: "red",
        points: [72, 228, 73, 193, 340, 96, 498, 154, 498, 191, 341, 171],
      },
      "3rd Floor": {
        color: "yellow",
        points: [73, 192, 73, 160, 340, 23, 500, 109, 499, 139, 342, 93],
      },
      Gym: {
        color: "green",
        points: [498, 283, 503, 146, 560, 136, 576, 144, 576, 278, 500, 283],
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
    width: width,
    height: height,
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

  return <div id="container"></div>;
};

export default Kanvas;
