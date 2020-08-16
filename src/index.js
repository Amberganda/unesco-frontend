import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux"; //comes directly from Redux library //need middleware too, comes from redux. //compose combines a bunch of middleware into one so taht we can just pass one argument from the create store.
import thunk from "redux-thunk";
import { Provider } from "react-redux"; //wrap apps so we can use redux. any component that we wrap in provider will have access to our redux store. will wrap our app in there.
import locationReducer from "./reducers/locationReducer";

//set up store so that the store is global to all the components/containers that we create
//1st we pass in our reducer, then any sort of middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//store is where you're storing your data globally, your reducer does logic. what we want to do w/ our store w/ certain actions that we will be dispatching (sending an action obj) to our reducer
// reducer is responsible for taking in that action obj & deciding what we want to update about our current store & will return a new verison of that store.
let store = createStore(
  locationReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
