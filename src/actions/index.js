import ActionTypes from "./ActionTypes";

export function addTodo(id, text) {
  return {
    type: ActionTypes.ADD_TODO,
    id: id,
    text: text
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: ActionTypes.SET_VISIBILITY_FILTER,
    filter: filter
  };
}

export function toggleTodo(id) {
  return {
    type: ActionTypes.TOGGLE_TODO,
    id: id
  };
}

export function incrementId(id) {
  return {
    type: ActionTypes.INCREMENT_ID,
    id: id
  };
}
