import React from 'react'
import TodoApp from './TodoApp'
import { Provider } from 'react-redux'
import todoAppReducer from '../reducers'
import { createStore } from 'redux'

let store = createStore(todoAppReducer);

const TodoRedux = () => (
  <Provider store={store}>
    <TodoApp />
  </Provider>
)

export default TodoRedux
