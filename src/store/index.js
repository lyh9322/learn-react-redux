import { createStore } from "redux";
import {
  addAction,
  subAction,
} from "./actionCreators.js";
import reducer from "./reducer.js";

const store = createStore(reducer);

// store.subscribe(() => {
//   console.log(store.getState().counter);
// });

// store.dispatch(addAction(1));
// store.dispatch(subAction(5));

export default store;
