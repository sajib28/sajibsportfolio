import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/backupfile/Home';
import About from './components/About';
import Mainmenu from "./components/Mainmenu";

function App() {
  return (
    <div className="App">
      <Router>
        <Mainmenu></Mainmenu>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
