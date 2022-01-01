import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { createStore } from "redux";
import rootReducers from "./reducer";
import { Provider } from "react-redux";

let userDetails = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={userDetails}>
    <App />
  </Provider>,
  document.getElementById("root")
);
