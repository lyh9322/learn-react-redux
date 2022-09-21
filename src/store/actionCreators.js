import { ADD_NUMBER, SUB_NUMBER } from "./constant.js";

const addAction = (num) => ({
  type: ADD_NUMBER,
  num,
});
const subAction = (num) => ({
  type: SUB_NUMBER,
  num,
});

export { addAction, subAction };
