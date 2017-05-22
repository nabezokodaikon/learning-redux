"use strict";

/*
 * State shape
 * {
 *  visibilityFilter: "SHOW_ALL",
 *  todos: [
 *    {
 *      text: "Consider using Redux",
 *      complete: true
 *    },
 *    {
 *      text: "Keep all state in a single tree",
 *      complete: false
 *    }
 *  ]
 * }
 */

import { combineReducers } from "redux";
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from "./Actions.js";

const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function todos(state = [], action) {  
  switch (action.type) {
    case ADD_TODO:
      return [
          ...state.todos,
          {
            text: action.text,
            complete: false
          }
        ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
          if (index == action.index) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            });
          } else {
            return todo;
          }
        });
    default:
      return state;
  }
}

/*
const initialState = {
  visibilityFilter: SHOW_ALL,
  todos: []
};

function todoApp(state = initialState, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  };
}
*/

const todoApp = combineReducers({
  visibilityFilter: visibilityFilter,
  todos: todos
});

export default todoApp;
