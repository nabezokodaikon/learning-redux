import ActionTypes from "../actions/ActionTypes";

function todo(state = {}, action) {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case ActionTypes.TOGGLE_TODO:
      if (state.id === action.id) {
        return Object.assign({}, state, {
          completed: !state.completed
        });
      } else {
        return state;
      }
    default:
      return state;
  }
}

function todos(state = [], action) {  
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return [
          ...state,
          todo(undefined, action)
        ];
    case ActionTypes.TOGGLE_TODO:
      return state.map(t => todo(t, action));
    default:
      return state;
  }
}

export default todos;
