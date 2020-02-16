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
        <Switch>
          <Route exact path="/" component={OpenPage} />
          <Route
            path="/content"
            render={() => (
              <div>
                <NavBar />
                <Switch>
                  <Route path="/content/mission" component={Mission} />
                  <Route path="/content/playground" component={Playground} />
                </Switch>
              </div>
            )}
          />
        </Switch>
      </BrowserRouter>
    </CssBaseline>
  );
}

export default App;
