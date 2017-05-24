"use strict";

import * as actions from "./index";
import ActionTypes from "./ActionTypes";

describe("incrementId actions", () => {
  it("incrementId should create INCREMENT_ID action", () => {
    expect(actions.incrementId(1)).toEqual({
      type: ActionTypes.INCREMENT_ID,
      id: 1
    });
  });
});

describe('todo actions', () => {
  it('addTodo should create ADD_TODO action', () => {
    expect(actions.addTodo(1, 'Use Redux')).toEqual({
      type: ActionTypes.ADD_TODO,
      id: 1,
      text: 'Use Redux'
    })
  })

  it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
    expect(actions.setVisibilityFilter('active')).toEqual({
      type: ActionTypes.SET_VISIBILITY_FILTER,
      filter: 'active'
    })
  })

  it('toggleTodo should create TOGGLE_TODO action', () => {
    expect(actions.toggleTodo(1)).toEqual({
      type: ActionTypes.TOGGLE_TODO,
      id: 1
    })
  })
})
