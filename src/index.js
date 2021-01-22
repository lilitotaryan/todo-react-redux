import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import reducer from "./reducers/todos";
import { Provider } from "react-redux";
import ToDo from "./containers/ToDo";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <ToDo />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
