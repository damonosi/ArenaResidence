import React, { useState, useEffect } from "react";

import AboutPage from "./AboutPage.jsx";
import ParteneriPage from "./ParteneriPage.jsx";
import ClientPage from "./ClientPage.jsx";
import HomePage from "./HomePage.jsx";
import ContactPage from "./ContactPage/ContactPage";
import Header from "./Header.jsx";
import Footer from "./footerPage";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

import "./MainPage.styles.scss";

const MainPage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
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
        <div className="site-wrapper">
          <Header />
          <div id="content" className="site-content center-relative">
            <HomePage />

            <ParteneriPage />

            <AboutPage />

            <ClientPage />
            <div className="contact-container">
              <ContactPage />
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default MainPage;
