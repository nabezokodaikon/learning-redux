"use strict"

import { createStore } from "redux";

const initState = {
  name: "",
  value: 0
}

function counter(state = initState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { name: "Increment", value: state.value + 1 };
    case "DECREMENT":
      return { name: "Decrement", value: state.value - 1 };
    default:
      return state;
  }
}

const store = createStore(counter);
store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
