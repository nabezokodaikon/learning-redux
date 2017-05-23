"use strict";

import React from "react";
import PropTypes from "prop-types";

class AddTodoForm extends React.Component {
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

AddTodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  currentId: PropTypes.number.isRequired
};

export default AddTodoForm;
