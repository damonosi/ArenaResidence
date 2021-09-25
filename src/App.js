import React, { Suspense, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import ImagePage from "./pages/MapareBloc/ImagePage.jsx";
import Header from "./components/header/Header.jsx";
import ErrorBoundary from "./components/error-boudary/error-boudary.component";
import "./App.css";
import Footer from "./pages/footer/footerPage.jsx";
import AboutPage from "./pages/aboutPage/AboutPage.jsx";

import ContactPage from "./pages/ContactPage/ContactPage";
import ParteneriPage from "./pages/Parteneri/ParteneriPage";

import ScaraC1 from "./pages/MapareBloc/C1";
import ScaraC2 from "./pages/MapareBloc/C2";

import AlteProiecte from "./pages/alteProiecte/alteProiecte";

import Apartament from "./components/apartamente/Apartament";

import ReactPixel from "react-facebook-pixel";
import ScrollToTop from "./hooks/ScrollToTop.js";
import Etaje from "./pages/Etaje/Etaje";
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
      <ScrollToTop />
      <Switch location={location} key={location.key}>
        <Suspense>
          <ErrorBoundary>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/home" component={MainPage} />
            <Route exact path="/scara" component={ImagePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/scara/c1" component={ScaraC1} />
            <Route path="/scara/c2" component={ScaraC2} />

            <Route path="/contact" component={ContactPage} />
            <Route path="/parteneri" component={ParteneriPage} />
            <Route path="/alte" component={AlteProiecte} />

            <Route path="/apartamente/:id" component={Apartament} />
            <Route path="/etaje/:et" component={Etaje} />
          </ErrorBoundary>
        </Suspense>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
