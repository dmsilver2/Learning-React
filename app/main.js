import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import todoAppReducer from './reducers/index'
import Root from './containers/Root'
import APIMiddleware from './middleware/APIMiddleware'
import thunk from 'redux-thunk'
require("./sass/index.scss");

let store = createStore(todoAppReducer, applyMiddleware(thunk, APIMiddleware));

render(
  <Root store={store} />,
  document.getElementById("app")
);
