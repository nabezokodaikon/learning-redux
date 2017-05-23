"use strict";

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import todoApp from "./build/reducers/todoApp";
import App from "./build/components/App";

const enhancers = 
  window.__REDUX_DEVTOOLS_EXTENSION__ && 
  window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(
  todoApp,
  enhancers
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
