export function addTodo(id, text) {
  return {
    type: "ADD_TODO",
    id: id,
    text: text
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: "SET_VISIBILITY_FILTER",
    filter: filter
  };
}

export function toggleTodo(id) {
  return {
    type: "TOGGLE_TODO",
    id: id
  };
}

export function incrementId(id) {
  return {
    type: "INCREMENT_ID",
    id: id
  };
}
