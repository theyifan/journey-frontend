import React, { useState } from "react";
import Mission from "./pages/Mission";
import Playground from "./pages/Playground";
import NavBar from "./NavBar/NavBar";
import OpenPage from "./OpenPage/OpenPage";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <CssBaseline>
      <BrowserRouter>
                <NavBar />
                <Switch>
                  <Route path="/mission" component={Mission} />
                  <Route path="/playground" component={Playground} />
                </Switch>
      </BrowserRouter>
    </CssBaseline>
  );
}

export default App;
