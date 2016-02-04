import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import todoAppReducer from './reducers/index'
import Root from './containers/Root'
require("./sass/index.scss");

let store = createStore(todoAppReducer);

render(
  <Root store={store} />,
  document.getElementById("app")
);
