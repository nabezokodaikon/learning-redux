import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";
import idIncrementer from "./idIncrementer";

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  idIncrementer
});

export default todoApp;
