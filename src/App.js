import React, { useState, useEffect, lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import ImagePage from "./pages/Imagepage/ImagePage.jsx";

import ErrorBoundary from "./components/error-boudary/error-boudary.component";
import "./App.css";

const App = () => {
  return (
    <Switch>
      <Suspense>
        <ErrorBoundary>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/map" component={ImagePage} />
        </ErrorBoundary>
      </Suspense>
    </Switch>
  );
};

export default App;
