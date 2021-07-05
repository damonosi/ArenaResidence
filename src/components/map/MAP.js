export const Data = () => {
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
};

// function updateTooltip(tooltip, x, y, text) {
//   tooltip.getText().text(text);
//   tooltip.position({
//     x: x,
//     y: y,
//   });
//   tooltip.show();
// }
// var stage = new Konva.Stage({
//   container: "container",
//   width: width,
//   height: height,
// });
// var shapesLayer = new Konva.Layer();
// var tooltipLayer = new Konva.Layer();

// var tooltip = new Konva.Label({
//   opacity: 0.75,
//   visible: false,
//   listening: false,
// });

// tooltip.add(
//   new Konva.Tag({
//     fill: "black",
//     pointerDirection: "down",
//     pointerWidth: 10,
//     pointerHeight: 10,
//     lineJoin: "round",
//     shadowColor: "black",
//     shadowBlur: 10,
//     shadowOffsetX: 10,
//     shadowOffsetY: 10,
//     shadowOpacity: 0.5,
//   })
// );

// tooltip.add(
//   new Konva.Text({
//     text: "",
//     fontFamily: "Calibri",
//     fontSize: 18,
//     padding: 5,
//     fill: "white",
//   })
// );

// tooltipLayer.add(tooltip);

// // get areas data
// var areas = getData();

// // draw areas
// for (var key in areas) {
//   var area = areas[key];
//   var points = area.points;

//   var shape = new Konva.Line({
//     points: points,
//     fill: area.color,
//     opacity: 0,
//     closed: true,
//     // custom attr
//     key: key,
//   });

//   shapesLayer.add(shape);
// }

// stage.add(shapesLayer);
// stage.add(tooltipLayer);

// stage.on("mouseover", function (evt) {
//   var shape = evt.target;
//   if (shape) {
//     shape.opacity(0.5);
//   }
// });
// stage.on("mouseout", function (evt) {
//   var shape = evt.target;
//   if (shape) {
//     shape.opacity(0);
//     tooltip.hide();
//   }
// });
// stage.on("mousemove", function (evt) {
//   var shape = evt.target;
//   if (shape) {
//     var mousePos = stage.getPointerPosition();
//     var x = mousePos.x;
//     var y = mousePos.y - 5;
//     updateTooltip(tooltip, x, y, shape.attrs.key);
//   }
// });

//  <Label
//    id="tooltip"
//    opacity={0.75}
//    visible={true}
//    listening={false}
//    x={100}
//    y={150}
//  >
//    <Tag
//      fill={"#bbb"}
//      stroke={"#333"}
//      shadowColor={"black"}
//      shadowBlur={10}
//      shadowOffsetX={10}
//      shadowOffsetY={10}
//      shadowOpacity={0.5}
//      lineJoin="round"
//      pointerDirection="down"
//      pointerWidth={10}
//      pointerHeight={10}
//      cornerRadius={5}
//    />
//    <Text
//      color={"black"}
//      text="Etajul 1"
//      fontSize={18}
//      padding={5}
//      fill={"white"}
//    />
//  </Label>;

// RESIZE IMAGE

// useEffect(() => {
//   const debouncedHandleResize = debounce(function handleResize() {
//     setDimensions({
//       height: window.innerHeight,
//       width: window.innerWidth,
//     });
//   }, 500);
//   window.addEventListener("resize", debouncedHandleResize);
//   return (_) => {
//     window.removeEventListener("resize", debouncedHandleResize);
//   };
// }, []);
