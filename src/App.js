import React, { Component } from "react";
import { Route } from "react-router-dom";

import Auth from './pages/Auth';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Route exact path={["/", "/login", "/register"]} component={Auth} />
      </div>
    );
  }
}

export default App;
