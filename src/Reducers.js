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

import { VisibilityFilters } from "./Actions.js";

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
};

function todoApp(state, action) {
  if (typeof state === "undefined") {
    return initialState;
  }

  return state;
}
