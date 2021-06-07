import React, { useState, useEffect, useRef } from "react";

import "./ImageHeader.scss";
import { NavLink } from "react-router-dom";

import animationData from "./home2.json";
import Lottie from "react-lottie";

const HeaderImage = () => {
  const lottieRef = useRef(null);
  const handleClickToPause = () => lottieRef?.current?.handleClickToPause?.();
  return (
    <header className="header-holder-canvas">
      <div className="menu-wrapper-canvas">
        <div className="header-logo-canvas">
          <div
            className="center-things"
            onMouseEnter={handleClickToPause}
            onMouseLeave={handleClickToPause}
          >
            <Lottie
              id="container"
              className="container"
              width={150}
              height={150}
              speed={0.3}
              isClickToPauseDisabled
              ref={lottieRef}
              title="Home"
              options={{
                loop: true,
                autoplay: false,
                animationData,
              }}
            />
            <NavLink className="linkus" to="/"></NavLink>
          </div>
        </div>

        <div className="clear"></div>
      </div>
    </header>
  );
};

export default HeaderImage;
