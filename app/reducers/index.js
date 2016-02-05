import { combineReducers } from 'redux'
import todosApp from './todos'
import visibilityFilter from './visibilityFilter'

const todoAppReducer = combineReducers({
  todosApp,
  visibilityFilter
})

export default todoAppReducer
