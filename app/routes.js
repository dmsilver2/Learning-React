import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import About from './components/About'
import Home from './components/Home'
import TodoApp from './components/TodoApp'

export default (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
    <Route path="todoapp" component={TodoApp} />
  </Route>
)
