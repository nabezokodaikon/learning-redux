"use strict";

import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../Actions";

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (input.value.trim().length > 0) {
          dispatch(addTodo(input.value));
          input.value = "";
        } else {
          return;
        }
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

AddTodo = connect()(AddTodo);

export default AddTodo;
