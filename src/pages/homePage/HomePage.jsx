import React from "react";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import "./HomePage.styles.scss";

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
    transition: { delay: 0.1, duration: 1.5 },
  },
  exit: {
    opacity: 0,
    x: 0,
    y: 0,
    transition: { ease: "easeInOut" },
  },
};

const HomePage = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="home-container"
    >
      <div id="home" className="section no-page-title">
        <div className="section-wrapper block content-1170 center-relative">
          <div className="content-wrapper">
            <h1 className="big-text text-left">
              DESIGN <br />& SERIOZITATE
            </h1>
            <div className="button-holder text-left">
              <Link className="colored" to="/map">
                ALEGETI APARTAMENTUL
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;
