import React from "react";
import ReactDOM from "react-dom";
import reducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import { connect, Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import AppContainer from "./containers/AppContainer";

import "./styles.css";

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  rootElement
);
