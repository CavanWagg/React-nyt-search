import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Main from "./pages/Main";
import Saved from "./pages/Saved";


const App = () => (
<Router>
  <div>
      <Switch>
        <Route exact path="/" component= {Main} />
        <Route exact path="/Saved" component= {Saved} />
      </Switch>
  </div>
</Router>
)

export default App;