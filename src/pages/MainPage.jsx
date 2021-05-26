import React from "react";

import Footer from "./footerPage.jsx";
import Header from "./Header.jsx";
import AboutPage from "./AboutPage.jsx";
import ParteneriPage from "./ParteneriPage.jsx";
import ClientPage from "./ClientPage.jsx";
import HomePage from "./HomePage.jsx";
import ContactPage from "./ContactPage.jsx";

import Preloader from "../images/preloader.gif";

const MainPage = () => {
  return (
    <div className="site-wrapper">
      <div class="doc-loader">
        <img alt="Arena Residence" />
      </div>
      <Header />

      <div id="content" className="site-content center-relative">
        <HomePage />

        <ParteneriPage />

        <AboutPage />

        <ClientPage />

        <ContactPage />
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
