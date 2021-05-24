import React, { useState } from "react";

import { Container } from "./imageMap.styles.js";

import ImageMapper from "react-img-mapper";

import "./imageMap.css";

const ImageMapPage = () => {
  const [show, setShow] = useState(false);

  const [dimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const URL =
    "https://res.cloudinary.com/dyfedllac/image/upload/v1621151357/decalculat_hlodof.svg";

  const MAP = {
    name: "my-map",
    areas: [
      {
        id: 0,
        name: "parter",
        shape: "rect",
        coords: [3, 821, 1262, 889],
      },
      {
        id: 1,
        name: "et1",
        shape: "rect",
        coords: [0, 672, 1283, 817],
      },
      {
        id: 2,
        name: "et2",
        shape: "rect",
        coords: [4, 541, 1284, 673],
      },
      {
        id: 3,
        name: "et3",
        shape: "rect",
        coords: [4, 421, 1283, 541],
      },
      {
        id: 4,
        name: "et4",
        shape: "rect",
        coords: [3, 290, 1283, 421],
      },
      {
        id: 5,
        name: "et5",
        shape: "rect",
        coords: [0, 170, 1281, 292],
      },
      {
        id: 6,
        name: "et6",
        shape: "rect",
        coords: [5, -16, 1284, 171],
      },
    ],
  };

  return (
    <Container>
      <ImageMapper
        src={URL}
        map={MAP}
        fillColor="rgba(26, 28, 89, 0.4)"
        strokeColor="red"
        onClick={() => setShow(true)}
        imgWidth={dimensions.width}
        parentWidth={700}
        responsive={true}
        className="first"
      />
    </Container>
  );
};

export default ImageMapPage;
