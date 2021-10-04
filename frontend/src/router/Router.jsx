import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import React from "react";
import { SubmitMaterialButton } from "../components/SubmitMaterialButton";
import { ImageDisplay } from "../ImageDisplay";

export const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/fullscale">
          <SubmitMaterialButton />
        </Route>
        <Route path="/simple">
          <ImageDisplay />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
