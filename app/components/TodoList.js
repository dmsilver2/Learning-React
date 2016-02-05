import React, { PropTypes } from 'react'
import Todo from './Todo'


export default class TodoList extends React.Component {
  componentDidMount() {
    if(!this.props.todos.length)
    {
      this.props.onLoad()
    }
  }

  render() {
    var { todos, onTodoClick, onDeleteTodoClick } = this.props
    return (
      <ul>
        {todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => onTodoClick(todo.id)}
            onDeleteClick={() => onDeleteTodoClick(todo.id)}
          />
        )}
      </ul>
    );
  }
}

// TodoList.propTypes = {
//   todos: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     completed: PropTypes.bool.isRequired,
//     text: PropTypes.string.isRequired
//   }).isRequired).isRequired,
//   onTodoClick: PropTypes.func.isRequired
// }
