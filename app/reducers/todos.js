const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }
      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state
  }
}

const todos = (state = {
    todos: [],
    isFetching: false
  }, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [...state.todos, todo(undefined, action)]
        };
      case 'DELETE_TODO':
        return {
          ...state,
          todos: state.todos.filter(t => t.id !== action.id)
        };
      case 'TOGGLE_TODO':
        return {
          ...state,
          todos: state.todos.map(t => todo(t, action))
        };
      case 'LOAD_TODOS_REQUEST':
        return {
          ...state,
          isFetching: true
        };
      case 'LOAD_TODOS_SUCCESS':
        return Object.assign({}, state,
          {
            todos: action.response,
            isFetching: false
          });
      case 'LOAD_TODOS_FAILURE':
        console.log('call to get todos failed')
        return {
          ...state,
          isFetching: false
        };
      default:
        return state
    }
}

export default todos
