import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import { SubmitMaterialButton } from "../components/SubmitMaterialButton";
import { ImageDisplay } from "../components/ImageDisplay";
import { HomeDisplay } from "../components/HomeDisplay";
import { AppExplanationDisplay } from "../components/AppExplanationDisplay";
import { FunctionExplanationDisplay } from "../components/FunctionExplanationDisplay";

export const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <AppExplanationDisplay />
        </Route>
        <Route path="/function">
          <FunctionExplanationDisplay />
        </Route>
        <Route path="/home">
          <HomeDisplay />
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
