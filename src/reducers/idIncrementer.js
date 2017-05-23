import ActionTypes from "../actions/ActionTypes";

function idIncrementer(state = 0, action) {
  switch (action.type) {
    case ActionTypes.INCREMENT_ID:
      return state + 1;
    default:
      return state;
  }
}

export default idIncrementer;
