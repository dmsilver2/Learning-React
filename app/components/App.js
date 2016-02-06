import React from 'react';
import { Router, Route, Link, IndexLink } from 'react-router'
import auth from './../auth/auth'

const App = React.createClass({
  getInitialState() {
    return {
      loggedIn: auth.loggedIn()
    }
  },

  updateAuth(loggedIn) {
    this.setState({
      loggedIn: loggedIn
    })
  },

  componentWillMount() {
    auth.onChange = this.updateAuth
    auth.login()
  },

  render() {
    return (<div>
              <h1>React App</h1>
              {this.props.children}
              <ul>
                <li><IndexLink to="/">Home</IndexLink></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/todoapp">Todo App</Link></li>
                <li>
                  {this.state.loggedIn ? (
                    <Link to="/logout">Log out</Link>
                  ) : (
                    <Link to="/login">Sign in</Link>
                  )}
                </li>
              </ul>

            </div>
          );
  }
})
export default App
