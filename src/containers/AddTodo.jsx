"use strict";

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addTodo } from "../Actions";

class AddTodoSrc extends React.Component {
  constructor(props) {
    super(props);
    this.input = null;
  }

  render() {
    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault();
          if (this.input.value.trim().length > 0) {
            this.props.dispatch(addTodo(this.input.value));
            this.input.value = "";
          } else {
            return;
          }
        }}>
          <input ref={node => this.input = node} />
          <button type="submit">
            Add Todo
          </button>
        </form>
      </div>
    );
  }
}

AddTodoSrc.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const AddTodo = connect()(AddTodoSrc);

export default AddTodo;
