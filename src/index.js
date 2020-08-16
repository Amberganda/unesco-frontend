import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux"; //comes directly from Redux library //need middleware too, comes from redux.
import thunk from "redux-thunk";
import { Provider } from "react-redux"; //wrap apps so we can use redux. any component that we wrap in provider will have access to our redux store. will wrap our app in there.

//set up store

ReactDOM.render(<App />, document.getElementById("root"));
