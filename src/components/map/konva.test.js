import $ from "jQuery";
import Konva from "konva";
$(document).ready(function () {
  buildCanvas();
  var hashul = document.location.hash;
  if (hashul != "") {
    getLevelModal(hashul.replace("#", ""));
  }
});

// let base_url = $('#base_url').data('url');
// let resource_url = $('#resource_url').data('url');
// let buildingImage   = $('#building-map').data('imgsrc');
// let imageWidth      = document.querySelector('.project-building-page-size').offsetWidth;
// let imageHeight      = document.querySelector('.project-building-page-size').offsetHeight;
// //let imageWidth      = $('#building-map').data('imgwidth');
// // let imageHeight     = $('#building-map').data('imgheight');
// let translations    = $('#building-map').data('translations');
// let canvasContainer = document.querySelector('#building-map');

let base_url = $("#base_url").data("url");
let resource_url = $("#resource_url").data("url");
let buildingID = $("#building-map").data("building");

let buildingImage = $("#building-map").data("imgsrc");
let imageWidth = $("#building-map").data("imgwidth");
let imageHeight = $("#building-map").data("imgheight");
let translations = $("#building-map").data("translations");
let canvasContainer = document.querySelector("#building-map");

let stage = new Konva.Stage({
  container: "building-map",
  width: imageWidth,
  height: imageHeight,
});

/**
 * Initialize the building canvas
 */
function buildCanvas() {
  let layer = new Konva.Layer(),
    imageObj = new Image(),
    imageObjHelper = new Image(),
    levels = getLevels();

  imageObj.onload = function () {
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

    if (buildingID == 2) {
      // Current Selected Level
      var currentBuilding = new Konva.Text({
        x: 750,
        y: 140,
        text: "Bloc 2",
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
        text: translations["choose-floor"],
        fontSize: 30,
        fontFamily: "Open Sans",
        fill: "#fff",
        width: "140",
        padding: 0,
        align: "center",
      });
    } else {
      // Current Selected Level
      var currentBuilding = new Konva.Text({
        x: 650,
        y: 160,
        text: "Bloc 1",
        fontSize: 30,
        fontFamily: "Open Sans",
        fill: "#fff",
        width: "140",
        padding: 0,
        align: "center",
      });
      // Current Selected Level
      var currentLevelText = new Konva.Text({
        x: 650,
        y: 200,
        text: translations["choose-floor"],
        fontSize: 30,
        fontFamily: "Open Sans",
        fill: "#fff",
        width: "140",
        padding: 0,
        align: "center",
      });
    }

    layer.add(currentLevelText);
    layer.add(currentBuilding);

    // Tutorial
    let lastLevelCoordinates = JSON.parse(
        levels[10].getAttribute("data-coord")
      ),
      fifthLevelCoordinates = JSON.parse(levels[6].getAttribute("data-coord")),
      centerOfLastLevel = centroid(lastLevelCoordinates),
      centerOfFifthLevel = centroid(fifthLevelCoordinates),
      helperLevelId = levels[6].getAttribute("data-levelid");

    let helperLevelPolygon = new Konva.Line({
      points: getLevelCoordinates(fifthLevelCoordinates),
      fill: "rgba(255, 186, 0, 0)",
      closed: true,
      shadowColor: "black",
      shadowBlur: 5,
      shadowOffset: { x: 2, y: 2 },
      shadowOpacity: 0.5,
    });

    let helperImage = new Konva.Image({
      x: centerOfLastLevel.x - 100,
      y: centerOfLastLevel.y,
      image: imageObjHelper,
      width: 80,
      height: 99,
    });

    if (buildingID == 2) {
      var helperLevelText = new Konva.Text({
        x: centerOfFifthLevel.x - 100,
        y: centerOfFifthLevel.y - 50,
        text: translations["click-floor"],
        fontSize: 15,
        fontFamily: "Open Sans",
        fill: "#fff",
        width: 300,
        padding: 20,
        align: "center",
      });
    } else {
      var helperLevelText = new Konva.Text({
        x: centerOfFifthLevel.x - 170,
        y: centerOfFifthLevel.y - 30,
        text: translations["click-floor"],
        fontSize: 15,
        fontFamily: "Open Sans",
        fill: "#fff",
        width: 300,
        padding: 20,
        align: "center",
      });
    }

    layer.add(helperLevelPolygon);

    imageObjHelper.onload = function () {
      helperLevelText.hide();

      layer.add(helperLevelText);
      layer.add(helperImage);
      layer.draw();

      // the tween has to be created after the node has been added to the layer
      let tween = new Konva.Tween({
        node: helperImage,
        duration: 0.6,
        x: centerOfFifthLevel.x - 100,
        y: centerOfFifthLevel.y,
        opacity: 1,
      });

      // start tween after 2 seconds
      setTimeout(function () {
        tween.play();
        setTimeout(function () {
          helperLevelPolygon.fill("rgba(255, 186, 0, .7)");
          helperLevelText.show();
          changeCurrentLevelText(
            layer,
            currentLevelText,
            translations["floor"] + " 5"
          );
        }, 700);
      }, 800);
    };
    imageObjHelper.src = resource_url + "includes/images/finger.png";

    helperLevelPolygon.on("touchstart", function () {
      getLevelModal(helperLevelId);
    });

    helperLevelText.on("touchstart", function () {
      getLevelModal(helperLevelId);
    });

    levels.each(function (level) {
      let levelName = levels[level].getAttribute("data-levelname"),
        levelID = levels[level].getAttribute("data-levelid"),
        soldOutSign = levels[level].getAttribute("data-soldOutSign"),
        levelCoord = JSON.parse(levels[level].getAttribute("data-coord")),
        centreOfPolygon = centroid(levelCoord);

      levelName =
        levelName == "Parter"
          ? translations["ground-floor"]
          : levelName.replace("Etajul", translations["floor"]);

      // Create a group for each building level
      let levelGroup = new Konva.Group();

      // Trace a polygon for each level from the given coordinates
      let levelPolygon = new Konva.Line({
        points: getLevelCoordinates(levelCoord),
        fill: "rgba(255, 186, 0, 0)",
        closed: true,
        shadowColor: "black",
        shadowBlur: 5,
        shadowOffset: { x: 2, y: 2 },
        shadowOpacity: 0.5,
      });

      if (soldOutSign == 1) {
        soldOutSign = "Sold out";
      } else {
        soldOutSign = translations["click-floor"];
      }

      if (buildingID == 2) {
        // Initialize text for each level
        var levelText = new Konva.Text({
          x: centreOfPolygon.x - 100,
          y: centreOfPolygon.y - 50,
          text: soldOutSign,
          fontSize: 15,
          fontFamily: "Open Sans",
          fill: "#fff",
          width: 300,
          padding: 20,
          align: "center",
        });
      } else {
        let textX = levels[level].getAttribute("data-x");
        let textY = levels[level].getAttribute("data-y");
        var rotation = levels[level].getAttribute("data-rotation");
        // Initialize text for each level
        var levelText = new Konva.Text({
          x: centreOfPolygon.x - 170,
          y: centreOfPolygon.y - 30,
          text: soldOutSign,
          fontSize: 15,
          fontFamily: "Open Sans",
          fill: "#fff",
          width: 300,
          padding: 20,
          align: "center",
        });
        levelText.rotate(rotation);
      }

      levelText.hide();

      levelGroup.add(levelPolygon);
      levelGroup.add(levelText);

      layer.add(levelGroup);

      /**
       * Mobile Events
       */
      levelGroup.on("touchstart", function () {
        // Hide tutorial image if it is visible
        if (helperImage.isVisible()) {
          helperImage.hide();
        }

        // Check if currently clicked/touched level is the tutorial one
        if (
          JSON.stringify(levelPolygon.attrs.points) !==
          JSON.stringify(helperLevelPolygon.attrs.points)
        ) {
          helperLevelPolygon.hide();
          helperLevelText.hide();
        } else {
          /// @Sorin incat sa apese de 2 ori pe telefon inainte sa i se deschida fereastra
          if (levelText.isVisible()) {
            getLevelModal(levelID);
          }
        }

        // Check for other selected levels and de-select/hide them
        layer.children.forEach(function (item) {
          if (item.index !== levelGroup.index && item.nodeType === "Group") {
            item.children.forEach(function (child) {
              if (child.nodeType === "Shape" && child.className === "Line") {
                child.fill("rgba(0, 0, 0, 0)");
              } else if (
                child.nodeType === "Shape" &&
                child.className === "Text"
              ) {
                child.hide();
              }
            });
          }
        });

        levelPolygon.fill("rgba(255, 186, 0, .7)");
        levelText.show();
        changeCurrentLevelText(layer, currentLevelText, levelName);
        layer.batchDraw();
      });

      levelText.on("touchstart", function () {
        getLevelModal(levelID);
      });

      /**
       * Desktop Events
       */
      levelPolygon.on("mouseenter", function () {
        helperImage.hide();
        helperLevelPolygon.hide();
        helperLevelText.hide();

        let fill = "rgba(255, 186, 0, .7)";

        // Fill layer color
        this.fill(fill);

        // Change cursor style
        stage.container().style.cursor = "pointer";
        // Show text
        levelText.show();
        // Change current level
        changeCurrentLevelText(layer, currentLevelText, levelName);

        layer.batchDraw();
      });

      levelText.on("mouseenter", function () {
        let fill = "rgba(255, 186, 0, .7)";
        // Fill layer color
        levelPolygon.fill(fill);
        // Change cursor style
        stage.container().style.cursor = "pointer";
        levelText.show();
        layer.batchDraw();
      });

      levelPolygon.on("mouseout", function () {
        let fill = "rgba(0,0,0,0)";
        // Fill shape color - transparent
        this.fill(fill);
        // Change cursor style - default
        stage.container().style.cursor = "default";
        levelText.hide();

        layer.batchDraw();
      });

      levelText.on("mouseout", function () {
        let fill = "rgba(0,0,0,0)";
        // Fill shape color - transparent
        levelPolygon.fill(fill);
        // Change cursor style - default
        stage.container().style.cursor = "default";
        levelText.hide();
        layer.batchDraw();
      });

      levelPolygon.on("click", function (evt) {
        getLevelModal(levelID);
      });

      levelText.on("click", function (evt) {
        getLevelModal(levelID);
      });
    });
    // add the layer to the stage
    stage.add(layer);
  };
  imageObj.src = buildingImage;
}

/**
 * Change text on level hover
 * @param message
 */
function changeCurrentLevelText(layer, currentLevel, newLevel) {
  currentLevel.setText(newLevel);
  layer.draw();
}

/**
 * adapt the stage on tablets and mobile phones
 */
//if ($(window).width() < 1400) {
let stageWidthz = imageWidth;
let stageHeightz = imageHeight;
fitStageIntoParentContainer(canvasContainer, stage, stageWidthz, stageHeightz);

window.addEventListener("resize", function () {
  let stageWidthz = imageWidth;
  let stageHeightz = imageHeight;

  fitStageIntoParentContainer(
    canvasContainer,
    stage,
    stageWidthz,
    stageHeightz
  );
});

/*
 *  Get all hidden divs with level data
 */
function getLevels() {
  let levels = $('div[id^="level-coordinates-"]');
  return levels;
}

/*
 * Return levelPolygongon points from canvas coordinates
 */
function getLevelCoordinates(coordinates) {
  let points = [];
  for (i in coordinates) {
    points.push(coordinates[i]["x"]);
    points.push(coordinates[i]["y"]);
  }
  return points;
}

/**
 * Return data for specific level
 * @param id
 */
function getLevelModal(id) {
  document.location.hash = id;
  let buildingNumber = $("#building-map").data("building");

  $.ajax({
    type: "POST",
    url: resource_url + "projects/level/" + buildingNumber + "/" + id,
  }).done(function (data) {
    data = JSON.parse(data);
    buildLevelModal(data);
  });
}

/**
 * Initialize modal with level data
 * @param data
 */
function buildLevelModal(data) {
  let levelModal = $("#level-modal"),
    levelImage = resource_url + "includes/images/storage/" + data.image,
    imageWidth = data.image_width,
    imageHeight = data.image_height,
    apartments = data.level.apartments,
    modalContainer = document.querySelector("#level-modal-body");

  /**
   * Show modal
   */
  levelModal.modal("show");

  /**
   * Change modal header with level name
   */
  levelModal
    .find(".modal-title")
    .text(data.level.building.name + ", " + data.level.name);

  /**
   * Initialize canvas
   * @type {Konva.Stage}
   */
  let levelStage = new Konva.Stage({
    container: "level-modal-body",
    width: imageWidth,
    height: imageHeight,
    preventDefault: false,
  });

  let layer = new Konva.Layer();
  let imageObj = new Image();

  imageObj.onload = function () {
    let level = new Konva.Image({
      x: 0,
      y: 0,
      image: imageObj,
      width: imageWidth,
      height: imageHeight,
      preventDefault: false,
    });
    // add the shape to the layer
    layer.add(level);

    for (let index in apartments) {
      let apartment = apartments[index],
        apartmentStatusString = JSON.stringify(apartment.status),
        apartmentStatus = apartmentStatusString.replace(/['"]+/g, ""),
        coordinates = apartment.coord,
        points = getLevelCoordinates(coordinates),
        centreOfPolygon = centroid(apartment.coord),
        color = getApartmentStatusUI(apartment, "background"),
        text = getApartmentStatusUI(apartment, "text");

      let apartmentGroup = new Konva.Group({
        status: apartmentStatus,
      });

      let apartmentShape = new Konva.Line({
        points: points,
        fill: color,
        closed: true,
        shadowColor: "black",
        shadowBlur: 5,
        shadowOffset: { x: 2, y: 2 },
        shadowOpacity: 0.5,
        preventDefault: false,
      });

      let apartmentText = new Konva.Text({
        x: centreOfPolygon.x - 110,
        y: centreOfPolygon.y - 70,
        text: text,
        fontSize: 18,
        fontFamily: "Open Sans",
        fill: "#fff",
        width: 250,
        padding: 20,
        align: "center",
      });

      if (apartment.status === "for_sale" || apartment.status === "rent") {
        apartmentText.hide();
      }

      apartmentGroup.add(apartmentShape);
      apartmentGroup.add(apartmentText);

      layer.add(apartmentGroup);

      /**
       *  On mobile touch
       */
      apartmentGroup.on("touchstart", function () {
        layer.children.forEach(function (item) {
          // Check for apartments (other than the selected one) that are not sold or reserved
          if (
            item.index !== apartmentGroup.index &&
            item.nodeType === "Group" &&
            (item.attrs.status === "for_sale" || item.attrs.status === "rent")
          ) {
            // Remove their filling and text
            item.children.forEach(function (child) {
              if (child.className === "Line") {
                child.fill("rgba(0,0,0,0)");
              } else if (child.className === "Text") {
                child.hide();
              }
            });
          }
        });

        apartmentShape.fill(
          getApartmentStatusUI(apartment, "background", "hover")
        );
        apartmentText.show();

        // if (apartment.status === 'for_sale') {
        //     apartmentShape.fill('rgba(255, 186, 0, .7)');
        //     apartmentText.show();
        // } else {
        //     window.location = '/projects/sea-one-mamaia/apartments/' + apartment.id + '/similar';
        // }

        layer.batchDraw();
      });

      apartmentText.on("touchstart", function () {
        if (apartment.status === "for_sale" || apartment.status === "rent") {
          window.location =
            base_url + "projects/sea-one-mamaia/apartments/" + apartment.id;
        } else {
          window.location =
            base_url +
            "projects/sea-one-mamaia/apartments/" +
            apartment.id +
            "/similar";
        }

        layer.batchDraw();
      });

      /**
       * On mousenter
       */
      apartmentGroup.on("mouseenter", function () {
        let fill = getApartmentStatusUI(apartment, "background", "hover");
        // Fill layer color
        apartmentShape.fill(fill);
        apartmentText.show();
        // Change cursor style
        levelStage.container().style.cursor = "pointer";

        layer.batchDraw();
      });

      apartmentText.on("mouseenter", function () {
        if (apartment.status === "for_sale" || apartment.status === "rent") {
          levelStage.container().style.cursor = "pointer";
          apartmentShape.fill("rgba(52, 152, 219, .7)");
          apartmentText.show();
          layer.batchDraw();
        }
      });

      apartmentGroup.on("mouseout", function () {
        if (apartment.status === "for_sale" || apartment.status === "rent") {
          apartmentText.hide();

          let fill = "rgba(0,0,0,0)";
          // Fill shape color - transparent
          apartmentShape.fill(fill);
          // Change cursor style - default
          levelStage.container().style.cursor = "default";

          layer.batchDraw();
        }
      });

      apartmentGroup.on("click", function (evt) {
        url =
          apartment.status === "sold"
            ? base_url +
              "projects/sea-one-mamaia/apartments/" +
              apartment.id +
              "/similar"
            : base_url + "projects/sea-one-mamaia/apartments/" + apartment.id;
        window.location = url;
      });
    }
    // add the layer to the stage
    levelStage.add(layer);
  };
  imageObj.src = levelImage;

  // adapt the stage on tablets and mobile phones
  if ($(window).width() < 1400) {
    let stageWidth = imageWidth;
    let stageHeight = imageHeight;

    fitStageIntoParentContainer(
      modalContainer,
      levelStage,
      stageWidth,
      stageHeight
    );
  }
}

function getApartmentStatusUI(apartment, returnType = null, hover = null) {
  let background, text;
  let apartmentPrice =
    apartment.price == 0
      ? translations["price-on-request"]
      : "\u20AC" + apartment.price + " + TVA";

  switch (apartment.status) {
    case "rent":
      background =
        hover == null ? "rgba(255, 186, 0, 0)" : "rgba(52, 152, 219, .7)";
      text =
        apartment.name +
        "\n\n" +
        translations["rent"] +
        "\n\n > " +
        translations["see-details"];
      break;
    case "for_sale":
      background =
        hover == null ? "rgba(255, 186, 0, 0)" : "rgba(52, 152, 219, .7)";
      text =
        apartment.name +
        "\n\n" +
        apartmentPrice +
        "\n\n > " +
        translations["see-details"];
      break;
    case "reserved":
      background = "rgba(255, 186, 0, .7)";
      text =
        apartment.name +
        "\n\n" +
        translations["reserved"] +
        " \n\n >" +
        translations["see-similar"];
      break;
    case "sold":
      background = "rgba(253, 88, 52, .7)";
      text =
        apartment.name +
        "\n\n" +
        translations["sold"] +
        " \n\n > " +
        translations["see-similar"];
      break;
    default:
      break;
  }

  if (returnType === "text") {
    return text;
  }

  return background;
}

/**
 * Scale image to screen size
 * @param container
 * @param stage
 * @param stageWidth
 * @param stageHeight
 */
function fitStageIntoParentContainer(
  container,
  stage,
  stageWidth,
  stageHeight
) {
  // now we need to fit stage into parent
  var containerWidth = container.offsetWidth;
  // to do this we need to scale the stage
  var scale = containerWidth / stageWidth;

  stage.width(stageWidth * scale);
  stage.height(stageHeight * scale);
  stage.scale({ x: scale, y: scale });
  stage.draw();
}

/**
 * Find the centroid of an irregular polygon
 * @param pts
 * @returns {{x: number, y: number}}
 */
function centroid(pts) {
  var first = pts[0],
    last = pts[pts.length - 1];
  if (first.x != last.x || first.y != last.y) pts.push(first);
  var twicearea = 0,
    x = 0,
    y = 0,
    nPts = pts.length,
    p1,
    p2,
    f;
  for (var i = 0, j = nPts - 1; i < nPts; j = i++) {
    p1 = pts[i];
    p2 = pts[j];
    f = p1.x * p2.y - p2.x * p1.y;
    twicearea += f;
    x += (p1.x + p2.x) * f;
    y += (p1.y + p2.y) * f;
  }
  f = twicearea * 3;
  return { x: x / f, y: y / f };
}
