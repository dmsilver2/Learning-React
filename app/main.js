import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
import Home from './components/Home';
import About from './components/About'
import App from './components/App'
import TodoRedux from './components/TodoRedux'
require("./sass/index.scss");

render(
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="todoapp" component={TodoRedux} />
    </Route>
  </Router>
, document.getElementById("app"));
