import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./Components/Main";
import DispEmoji from "./Components/DisplayEmoji";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div className="container">
      {" "}
      <Main />
    </div>
  );
}

/*function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/DispEmoji" component={DispEmoji} />
        </Switch>
      </div>
    </Router>
  );
} */

export default App;
