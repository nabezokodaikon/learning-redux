import ActionTypes from "../actions/ActionTypes";

function visibilityFilter(state = "SHOW_ALL", action) {
  switch (action.type) {
    case ActionTypes.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default visibilityFilter;
