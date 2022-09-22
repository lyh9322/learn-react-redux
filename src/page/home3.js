import React, { PureComponent } from "react";
import {
  subAction,
  deAction,
  changeBannersAction,
  changeRecommendsAction,
} from "../store/actionCreators.js";
import { connect } from "react-redux";
import axios from "axios";

class Home extends PureComponent {
  componentDidMount() {
    axios({
      url: "http://123.207.32.32:8000/home/multidata",
    }).then((res) => {
      console.log(res.data.data);
      const data = res.data.data;
      this.props.changeBanners(data.banner.list);
      this.props.changeRecommends(data.recommend.list);
    });
  }
  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>当前计数{this.props.counter}</h2>
        <button onClick={(e) => this.props.decrement()}>-1</button>
        <button onClick={(e) => this.props.subAction(5)}>-5</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    banners: state.banners,
    recommends: state.recommends,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    decrement: function () {
      dispatch(deAction());
    },
    subAction: function (num) {
      dispatch(subAction(num));
    },
    changeBanners: function (banners) {
      dispatch(changeBannersAction(banners));
    },
    changeRecommends: function (recommends) {
      dispatch(changeRecommendsAction(recommends));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
