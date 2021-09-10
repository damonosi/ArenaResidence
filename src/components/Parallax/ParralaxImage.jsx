import React from "react";
import { Parallax } from "react-scroll-parallax";

const ParallaxImage = ({ src, height, width, y }) => (
  <Parallax className="custom-class" y={y} tagOuter="figure">
    <img width={width} height={height} src={src} alt="" />
  </Parallax>
);

export default ParallaxImage;
