import React, { useState, useEffect } from "react";

import NewImageMapPage from "../../components/map/NewMap";
import "./ImagePage.styles.scss";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { Link } from "react-scroll";
import ParteneriPage from "../ParteneriPage";
import { motion } from "framer-motion";
const containerVariants = {
  hidden: {
    opacity: 0,
    x: 0,
    y: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    x: 0,
    y: 0,
    transition: { ease: "linear" },
  },
};
const ImagePage = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      id="sus"
      className="pagina"
    >
      <div className="containing">
        <div className="title-container">
          <h1 className="titlu">Alegeti Etajul</h1>
          <div className="icon-div">
            <Link to="image" spy={true} smooth={true}>
              <IoIosArrowDropdown className="icon" />
            </Link>
          </div>
        </div>
        <div id="image" className="image-container">
          <NewImageMapPage />
        </div>
        <div className="icon-div2">
          <Link to="sus" spy={true} smooth={true}>
            <IoIosArrowDropup className="icon2" />
          </Link>
        </div>
        <div className="banner-container">
          <ParteneriPage />
        </div>
      </div>
    </motion.div>
  );
};

export default ImagePage;
