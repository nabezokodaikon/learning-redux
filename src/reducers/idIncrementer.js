function idIncrementer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT_ID":
      return state + 1;
    default:
      return state;
  }
}

export default idIncrementer;
