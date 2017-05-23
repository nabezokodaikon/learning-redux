"use strict";

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addTodo, incrementId } from "../actions/index";

class AddTodoSrc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const value = this.state.value.trim();
    if (value.length > 0) {
      this.props.onSubmit(this.props.currentId, value);
      this.setState({ value: "" });
    } else {
      return;
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button type="submit">
            Add Todo
          </button>
        </form>
      </div>
    );
  }
}

AddTodoSrc.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  currentId: PropTypes.number.isRequired
};

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
)(AddTodoSrc);

export default AddTodo;
