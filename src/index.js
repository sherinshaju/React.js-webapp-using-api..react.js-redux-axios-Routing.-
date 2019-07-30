import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import * as serviceWorker from "./serviceWorker";

let dataState = {
  count: "",
  product: [],
  cart: []
};

const fullstate = (state = dataState, action) => {
  switch (action.type) {
    case "Product":
      return {
        ...state,
        product : action.payload
      };
    case "cartProduct":
      return {
          ...state,
          cart : action.payload,
          count :  action.NewCount
      };
      case "removeArry" :
          let remove = action.payload;
          let cartNew = state.cart.splice(1,remove)
      return{
            ...state,
            cart : cartNew
      }
    default:
      return state;
  }
};

const store = createStore(fullstate);

console.log(store.getState());

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
