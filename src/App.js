import React, { useState } from "react";
import Mission from "./pages/Mission";
import MissionOverview from "./pages/MissionOverview";
import Playground from "./pages/Playground";
import NavBar from "./NavBar/NavBar";
import AssessmentContainer from "./assessment/mockAssessmentContainer"
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <CssBaseline>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={NavBar} /> 
          <Route exact path="/mission" component={MissionOverview} />
          <Route path="/mission/:missionID/:page" component={Mission} />
          <Route path="/playground" component={Playground} />
          <Route path="/assessment" component={AssessmentContainer} />
        </Switch>
      </BrowserRouter>
    </CssBaseline>
  );
}

export default App;
