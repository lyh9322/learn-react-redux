import {
  ADD_NUMBER,
  SUB_NUMBER,
  INCREMENT,
  DECREMENT,
  CHANGE_BANNERS,
  CHANGE_RECOMMENDS,
} from "./constant.js";

const initialState = {
  counter: 0,
  banners: {},
  recommends: {},
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num };
    case SUB_NUMBER:
      return { ...state, counter: state.counter - action.num };
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case CHANGE_BANNERS:
      return { ...state, banners: state.banners };
    case CHANGE_RECOMMENDS:
      return { ...state, recommends: state.recommends };
    default:
      return state;
  }
}

export default reducer;
