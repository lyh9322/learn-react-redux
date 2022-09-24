import { applyMiddleware, createStore } from "redux";
import tunkMiddleware from "redux-thunk";
// import {
//   addAction,
//   subAction,
// } from "./actionCreators.js";
import reducer from "./reducer.js";

const enhancer = applyMiddleware(tunkMiddleware);

const store = createStore(reducer, enhancer);

// store.subscribe(() => {
//   console.log(store.getState().counter);
// });

// store.dispatch(addAction(1));
// store.dispatch(subAction(5));

export default store;
