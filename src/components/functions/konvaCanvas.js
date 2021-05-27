import React, { useState, useEffect } from "react";

import Konva from "konva";
import MapImage from "../../images/decor/1.jpg";

export function buildCanvas() {
  let layer = new Konva.Layer(),
    imageObj = new Image(),
    imageObjHelper = new Image();

  imageObj.onload = function (imageWidth, imageHeight) {
    let building = new Konva.Image({
      x: 0,
      y: 0,
      image: imageObj,
      width: imageWidth,
      height: imageHeight,
      preventDefault: false,
    });

    // add the shape to the layer
    layer.add(building);
    var currentBuilding = new Konva.Text({
      x: 750,
      y: 140,
      text: "Bloc",
      fontSize: 30,
      fontFamily: "Open Sans",
      fill: "#fff",
      width: "140",
      padding: 0,
      align: "center",
    });
    // Current Selected Level
    var currentLevelText = new Konva.Text({
      x: 750,
      y: 180,
      text: ["choose-floor"],
      fontSize: 30,
      fontFamily: "Open Sans",
      fill: "#fff",
      width: "140",
      padding: 0,
      align: "center",
    });
    layer.add(currentLevelText);
    layer.add(currentBuilding);
    // Tutorial
    // start tween after 2 seconds
  };
  imageObj.src = MapImage;
}
