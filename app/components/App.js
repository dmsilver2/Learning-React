import React from 'react';
import { Router, Route, Link, IndexLink } from 'react-router'

export default class App extends React.Component {
  render() {
    return (<div>
              <h1>React App</h1>
              {this.props.children}
              <ul>
                <li><IndexLink to="/home">Home</IndexLink></li>
                <li><Link to="/about">About</Link></li>
              </ul>

            </div>
          );
  }
}
