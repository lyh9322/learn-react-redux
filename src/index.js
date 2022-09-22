import React from "react";
import ReactDOM, { render } from "react-dom";

import App from "./App";
import store from "./store";
// import { StoreContext } from "./utils/context";

import { Provider } from "react-redux";
ReactDOM.render(
  <div>
    {/* <StoreContext.Provider value={"store"}>
      <App />
    </StoreContext.Provider> */}
    <Provider store={store}>
      <App />
    </Provider>
  </div>,
  document.getElementById("root")
);
