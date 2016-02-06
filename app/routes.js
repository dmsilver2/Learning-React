import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import About from './components/About'
import Home from './components/Home'
import TodoApp from './components/TodoApp'
import Login from './components/Login'
import Logout from './components/Logout'
import auth from './auth/auth'

function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathName: nextState.location.pathname }
    })
  }
}

export default (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
    <Route path="todoapp" component={TodoApp} onEnter={requireAuth} />
    <Route path="login" component={Login} />
    <Route path="logout" component={Logout} />
  </Route>
)
