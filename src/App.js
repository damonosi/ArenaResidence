import React, { useState, useEffect, Suspense } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import ImagePage from "./pages/Imagepage/ImagePage.jsx";
import Header from "./components/header/Header.jsx";
import ErrorBoundary from "./components/error-boudary/error-boudary.component";
import "./App.css";
import Footer from "./pages/footer/footerPage.jsx";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import AboutPage from "./pages/aboutPage/AboutPage.jsx";

import ContactPage from "./pages/ContactPage/ContactPage";
import AlteProiecte from "./pages/alteProiecte/alteProiecte";

import ScrollToTop from "./components/functions/scrollToTop";
import { AnimatePresence } from "framer-motion";
import Apartament from "./components/apartamente/Apartament";
import ApartamenteList from "./components/apartamente/ApartamenteList";

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <div className="App">
      <ScrollToTop />
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
        <>
          <Header />
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.key}>
              <Suspense>
                <ErrorBoundary>
                  <Route exact path="/" component={MainPage} />
                  <Route exact path="/home" component={MainPage} />
                  <Route exact path="/map" component={ImagePage} />
                  <Route path="/about" component={AboutPage} />

                  <Route path="/contact" component={ContactPage} />
                  <Route path="/alte" component={AlteProiecte} />
                  <Route
                    exact
                    path="/apartamente"
                    component={ApartamenteList}
                  />
                  <Route path="/apartamente/:id" component={Apartament} />
                </ErrorBoundary>
              </Suspense>
            </Switch>
          </AnimatePresence>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
