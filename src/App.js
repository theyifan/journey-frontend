import React, { useState } from "react";
import Mission from "./pages/Mission";
import MissionOverview from "./pages/MissionOverview";
import Playground from "./pages/Playground";
import CompleteNavBar from "./NavBar/CompleteNavBar";
import NavBar from "./NavBar/NavBar";
import AssessmentContainer from "./assessment/mockAssessmentContainer"
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { SideBarContextProvider } from "./NavBar/SideBarContext";
import { StoreProvider } from "./Store";

function App() {
  return (
    <CssBaseline>
      <StoreProvider>
        <SideBarContextProvider>
          <BrowserRouter>
            <CompleteNavBar />
            <Switch>
              <Route exact path="/" component={NavBar} />
              <Route exact path="/mission" component={MissionOverview} />
              <Route path="/mission/:missionID/:page" component={Mission} />
              <Route path="/playground" component={Playground} />
            </Switch>
          </BrowserRouter>
        </SideBarContextProvider>
      </StoreProvider>
    </CssBaseline>
  );
}

export default App;
