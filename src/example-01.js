"use strict";

import { 
  combineReducers, 
  createStore 
} from "redux";

function visibilityFilter(state = "SHOW_ALL", action) {
  console.log(`Call visibilityFilter: ${state}`);
  if (action.type === "SET_VISIBILITY_FILTER") {
    return action.filter;
  } else {
    return state;
  }
}

function todos(state = [], action) {
  console.log(`Call todos: ${state}`);
  switch (action.type) {
    case "ADD_TODO":
      return state.concat([{ text: action.text, completed: false }]);
    case "TOGGLE_TODO":
      return state.map((todo, index) =>
        action.index === index ?
          { text: todo.text, completed: !todo.completed } :
          todo
      );
    default:
      return state;
  }
}

function todoApp(state = {}, action) {
  console.log(`Call todoApp: ${state}`);
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  };
}

const reducer = combineReducers({ visibilityFilter, todos });
const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: "ADD_TODO", text: "Eat food" });
store.dispatch({ type: "ADD_TODO", text: "Exercise" });
store.dispatch({ type: "ADD_TODO", text: "Go to swimming pool" });
store.dispatch({ type: "TOGGLE_TODO", index: 1 });
store.dispatch({ type: "SET_VISIBILITY_FILTER", filter: "SHOW_OTHER" });
store.dispatch({ type: "SET_VISIBILITY_FILTER", filter: "SHOW_ALL" });
