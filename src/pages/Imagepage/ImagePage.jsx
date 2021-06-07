import React, { useState, useEffect } from "react";

import NewImageMapPage from "../../components/map/NewMap";
import "./ImagePage.styles.scss";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { Link } from "react-scroll";
import ParteneriPage from "../ParteneriPage";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import HeaderImage from "./ImageHeader";
import Footer from "../footerPage";

const ImagePage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      {loading ? (
        <div className="spinner">
          <ClimbingBoxLoader
            speedMultiplier={1.5}
            size={30}
            color={"#F8A318"}
            loading={loading}
          />
        </div>
      ) : (
        <div id="sus" className="pagina">
          <HeaderImage />
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
          <Footer />
        </div>
      )}
    </>
  );
};

export default ImagePage;
