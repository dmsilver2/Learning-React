import React from 'react';
import { Router, Route, Link, IndexLink } from 'react-router'

export default class App extends React.Component {
  render() {
    return (<div>
              <h1>React App</h1>
              {this.props.children}
              <ul>
                <li><IndexLink to="/">Home</IndexLink></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/todoapp">Todo App</Link></li>
              </ul>

            </div>
          );
  }
}
