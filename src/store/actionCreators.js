import {
  ADD_NUMBER,
  SUB_NUMBER,
  INCREMENT,
  DECREMENT,
  CHANGE_BANNERS,
  CHANGE_RECOMMENDS,
} from "./constant.js";

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

const changeBannersAction = (banners) => {
  type: CHANGE_BANNERS, banners;
};

const changeRecommendsAction = (recommends) => {
  type: CHANGE_RECOMMENDS, recommends;
};
export {
  addAction,
  subAction,
  inAction,
  deAction,
  changeBannersAction,
  changeRecommendsAction,
};
