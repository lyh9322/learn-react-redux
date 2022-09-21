import { ADD_NUMBER, SUB_NUMBER } from "./constant.js";

const initialState = {
  counter: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num };
    case SUB_NUMBER:
      return { ...state, counter: state.counter - action.num };
    // case INCREMENT:
    //   return { ...state, counter: state + 1 };
    // case DECREMENT:
    //   return { ...state, counter: state - 1 };
    default:
      return state;
  }
}

export default reducer;
