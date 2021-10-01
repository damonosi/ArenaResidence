import React, { lazy, Suspense, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import Header from "./components/header/Header.jsx";
import ErrorBoundary from "./components/error-boudary/error-boudary.component";
import "./App.css";
import Footer from "./pages/footer/footerPage.jsx";

import ScrollToTop from "./hooks/ScrollToTop.js";
import ReactPixel from "react-facebook-pixel";

const ContactPage = lazy(() => import("./pages/ContactPage/ContactPage"));
const ParteneriPage = lazy(() => import("./pages/Parteneri/ParteneriPage"));
const MainPage = lazy(() => import("./pages/MainPage.jsx"));
const ImagePage = lazy(() => import("./pages/MapareBloc/ImagePage.jsx"));

const ScaraC1 = lazy(() => import("./pages/MapareBloc/C1"));
const ScaraC2 = lazy(() => import("./pages/MapareBloc/C2"));
const AlteProiecte = lazy(() => import("./pages/alteProiecte/alteProiecte"));
const Apartament = lazy(() => import("./components/apartamente/Apartament"));
const C1_Etaj1 = lazy(() => import("./pages/Etaje/C1/Etaj1.jsx"));
const C1_Etaj2 = lazy(() => import("./pages/Etaje/C1/Etaj2.jsx"));
const C1_Etaj3 = lazy(() => import("./pages/Etaje/C1/Etaj3.jsx"));
const C1_Etaj4 = lazy(() => import("./pages/Etaje/C1/Etaj4.jsx"));
const C1_Etaj5 = lazy(() => import("./pages/Etaje/C1/Etaj5.jsx"));
const C1_Etaj6 = lazy(() => import("./pages/Etaje/C1/Etaj6.jsx"));
const C1_Etaj7 = lazy(() => import("./pages/Etaje/C1/Etaj7.jsx"));
const C1_Etaj8 = lazy(() => import("./pages/Etaje/C1/Etaj8.jsx"));

const C2_Etaj1 = lazy(() => import("./pages/Etaje/C2/Etaj1.jsx"));
const C2_Etaj2 = lazy(() => import("./pages/Etaje/C2/Etaj2.jsx"));
const C2_Etaj3 = lazy(() => import("./pages/Etaje/C2/Etaj3.jsx"));
const C2_Etaj4 = lazy(() => import("./pages/Etaje/C2/Etaj4.jsx"));
const C2_Etaj5 = lazy(() => import("./pages/Etaje/C2/Etaj5.jsx"));
const C2_Etaj6 = lazy(() => import("./pages/Etaje/C2/Etaj6.jsx"));
const C2_Etaj7 = lazy(() => import("./pages/Etaje/C2/Etaj7.jsx"));
const C2_Etaj8 = lazy(() => import("./pages/Etaje/C2/Etaj8.jsx"));

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

            <Route path="/scara/c1" component={ScaraC1} />
            <Route path="/scara/c2" component={ScaraC2} />

            <Route path="/contact" component={ContactPage} />
            <Route path="/parteneri" component={ParteneriPage} />
            <Route path="/alte" component={AlteProiecte} />

            <Route path="/apartamente/:id" component={Apartament} />

            <Route path="/etaje/C1/1" component={C1_Etaj1} />
            <Route path="/etaje/C1/2" component={C1_Etaj2} />
            <Route path="/etaje/C1/3" component={C1_Etaj3} />
            <Route path="/etaje/C1/4" component={C1_Etaj4} />
            <Route path="/etaje/C1/5" component={C1_Etaj5} />
            <Route path="/etaje/C1/6" component={C1_Etaj6} />
            <Route path="/etaje/C1/7" component={C1_Etaj7} />
            <Route path="/etaje/C1/8" component={C1_Etaj8} />

            <Route path="/etaje/C2/1" component={C2_Etaj1} />
            <Route path="/etaje/C2/2" component={C2_Etaj2} />
            <Route path="/etaje/C2/3" component={C2_Etaj3} />
            <Route path="/etaje/C2/4" component={C2_Etaj4} />
            <Route path="/etaje/C2/5" component={C2_Etaj5} />
            <Route path="/etaje/C2/6" component={C2_Etaj6} />
            <Route path="/etaje/C2/7" component={C2_Etaj7} />
            <Route path="/etaje/C2/8" component={C2_Etaj8} />
          </ErrorBoundary>
        </Suspense>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
