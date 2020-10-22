import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Top from './pages/Top'
import Search from './pages/Search'
import Watch from './pages/Watch'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Top}></Route>
        <Route exact path="/search" component={Search}></Route>
        <Route exact path="/watch" component={Watch}></Route>
      </Switch>
    </Router>
  );
}

export default App;
