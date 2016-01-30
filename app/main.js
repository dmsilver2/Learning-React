import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
import Home from './components/Home';
import About from './components/About'
import App from './components/App'
require("./sass/index.scss");

render(
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <Route path="home" component={Home} />
      <Route path="about" component={About} />
    </Route>
  </Router>
, document.getElementById("app"));
