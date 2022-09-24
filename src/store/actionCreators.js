import axios from "axios";
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

const changeBannersAction = (banner) => {
  type: CHANGE_BANNERS, banner;
};

const changeRecommendsAction = (recommend) => {
  type: CHANGE_RECOMMENDS, recommend;
};

//中间件
const getHomeMultidataAction = () => {
  return (dispatch) => {
    axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
      const data = res.data.data;
      dispatch(changeBannersAction(data.banner.list));
      dispatch(changeRecommendsAction(data.recommend.list));
    });
  };
};

export {
  addAction,
  subAction,
  inAction,
  deAction,
  changeBannersAction,
  changeRecommendsAction,
  getHomeMultidataAction,
};
