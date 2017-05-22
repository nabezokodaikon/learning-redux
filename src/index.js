"use strict";

import { createStore } from "redux";
import todoApp from "./Reducers.js";

const store = createStore(todoApp);

// Test code
// import {
  // addTodo,
  // toggleTodo,
  // setVisibilityFilter,
  // VisibilityFilters
// } from "./Actions.js";

// const unsubscribe = store.subscribe(() => {
  // console.log(store.getState());
// });

// console.log(store.getState());
// store.dispatch(addTodo("Lean about actions"));
// store.dispatch(addTodo("Lean about reducers"));
// store.dispatch(addTodo("Lean about store"));
// store.dispatch(toggleTodo(0));
// store.dispatch(toggleTodo(1));
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));
