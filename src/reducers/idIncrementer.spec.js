import ActionTypes from "../actions/ActionTypes";
import idIncrementer from "./idIncrementer";

describe("idIncrementer reducer", () => {
  it("should handle initial state", () => {
    expect(
      idIncrementer(undefined, {
        type: ActionTypes.INCREMENT_ID
      })
    ).toEqual(1);
  });

  it("should handle INCREMENT_ID", () => {
    expect(
      idIncrementer(0, {
        type: ActionTypes.INCREMENT_ID
      })
    ).toEqual(1);

    expect(
      idIncrementer(1, {
        type: ActionTypes.INCREMENT_ID
      })
    ).toEqual(2);
  });
});
