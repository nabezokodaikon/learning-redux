"use strict";

import React from "react";
import { connect } from "react-redux";
import { addTodo, incrementId } from "../actions/index";
import AddTodoForm from "../components/AddTodoForm";

const mapStateToProps = (state) => {
  return {
    currentId: state.idIncrementer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (id, todoText) => {
      dispatch(addTodo(id, todoText));
      dispatch(incrementId(id));
    }
  };
};

const AddTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodoForm);

export default AddTodo;
