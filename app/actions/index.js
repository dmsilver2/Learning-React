let nextTodoId = 2

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    id
  }
}

export function loadTodos() {
  // Interpreted by the thunk middleware:
  return function (dispatch, getState) {
    let todos = getState().todosApp.todos
    if (todos.length) {
      // There is cached data! Don't do anything.
      return
    }

    dispatch({
      type: 'LOAD_TODOS_REQUEST'
    })
    // Dispatch vanilla actions asynchronously
    fetch(`/api/alltodos`)
      .then( (response) =>
        response.json().then( (data) =>
          dispatch({
            type: 'LOAD_TODOS_SUCCESS',
            response: data
          })
        )
      )
      .catch((error) => dispatch({
        type: 'LOAD_TODOS_FAILURE',
        error
      }))

  }
}

export function loadTodosThroughMiddleware() {
  return {
    // Types of actions to emit before and after
    types: ['LOAD_TODOS_REQUEST', 'LOAD_TODOS_SUCCESS', 'LOAD_TODOS_FAILURE'],
    // Check the cache (optional):
    shouldCallAPI: (state) => !state.todos,
    // Perform the fetching:
    callAPI: () => fetch(`/api/alltodos`)
  }
}
