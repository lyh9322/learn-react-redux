import { ADD_NUMBER, SUB_NUMBER, INCREMENT, DECREMENT } from "./constant.js";

const addAction = (num) => ({
  type: ADD_NUMBER,
  num,
});
const subAction = (num) => ({
  type: SUB_NUMBER,
  num,
});

const inAction = () => ({
  type: INCREMENT,
});
const deAction = () => ({
  type: DECREMENT,
});
export { addAction, subAction, inAction, deAction };
