import React, { Suspense, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import ImagePage from "./pages/Imagepage/ImagePage.jsx";
import Header from "./components/header/Header.jsx";
import ErrorBoundary from "./components/error-boudary/error-boudary.component";
import "./App.css";
import Footer from "./pages/footer/footerPage.jsx";
import AboutPage from "./pages/aboutPage/AboutPage.jsx";

import ContactPage from "./pages/ContactPage/ContactPage";
import ParteneriPage from "./pages/Parteneri/ParteneriPage";

import AlteProiecte from "./pages/alteProiecte/alteProiecte";

import { AnimatePresence } from "framer-motion";
import Apartament from "./components/apartamente/Apartament";
import ApartamenteList from "./components/apartamente/ApartamenteList";

import ReactPixel from "react-facebook-pixel";
const advancedMatching = { em: "dam195@yahoo.com" };
const options = {
  autoConfig: true,
  debug: false,
};
ReactPixel.pageView();
ReactPixel.init("372153681294767", advancedMatching, options);

function App() {
  const location = useLocation();
  const { pathname } = useLocation();
  useEffect(() => {
    // some browsers (like safari) may require a timeout to delay calling this
    // function after a page has loaded; otherwise, it may not update the position
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Suspense>
            <ErrorBoundary>
              <Route exact path="/" component={MainPage} />
              <Route exact path="/home" component={MainPage} />
              <Route exact path="/bloc" component={ImagePage} />
              <Route path="/about" component={AboutPage} />

              <Route path="/contact" component={ContactPage} />
              <Route path="/parteneri" component={ParteneriPage} />
              <Route path="/alte" component={AlteProiecte} />
              <Route exact path="/apartamente" component={ApartamenteList} />
              <Route path="/apartamente/:id" component={Apartament} />
            </ErrorBoundary>
          </Suspense>
        </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
