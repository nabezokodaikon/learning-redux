"use strict";

import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo"

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.todos.map(todo =>
          <Todo 
            key={todo.id}
            completed={todo.completed}
            text={todo.text}
            onClick={() => this.props.onTodoClick(todo.id)}
          />
        )}
      </ul>
    );
    // return (
      // <ul>
        // {this.props.todos.map(todo =>
          // <Todo 
            // key={todo.id}
            // {...todo}
            // onClick={() => this.props.onTodoClick(todo.id)}
          // />
        // )}
      // </ul>
    // );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default TodoList
