import React from "react";
import Mission from './pages/Mission';
import Playground from './pages/Playground'
import NavBar from "./NavBar/NavBar";
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path = '/' render={() => <>'Hello from Source Academy'</>}/>
        <Route path='/mission' component={Mission} />
        <Route path='/playground'component={Playground} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
