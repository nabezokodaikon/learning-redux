let nextTodoId = 0;

export function addTodo(text) {
  return {
    type: "ADD_TODO",
    id: nextTodoId++,
    text: text
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: "SET_VISIBILITY_FILTER",
    filter: filter
  };
}

export function toggleTodo(index) {
  return {
    type: "TOGGLE_TODO",
    index: index
  };
}
