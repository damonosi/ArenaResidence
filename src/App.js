import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import MainPage from "./pages/MainPage.jsx";
import ImagePage from "./pages/Imagepage/ImagePage.jsx";
import Preloader from "./images/preloader.gif";
import ErrorBoundary from "./components/error-boudary/error-boudary.component";
import "./App.css";
import Footer from "./pages/footerPage";
import Spinner from "./components/spinner/spinner.component";

const App = () => {
  return (
    <Switch>
      <Suspense fallback={<Spinner />}>
        <ErrorBoundary>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/map" component={ImagePage} />
        </ErrorBoundary>
      </Suspense>
    </Switch>
  );
};

export default App;
