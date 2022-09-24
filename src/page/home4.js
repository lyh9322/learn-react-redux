import React, { PureComponent } from "react";
import {
  subAction,
  deAction,
  changeBannersAction,
  changeRecommendsAction,
  getHomeMultidataAction,
} from "../store/actionCreators.js";
import { connect } from "react-redux";
import axios, { Axios } from "axios";

class Home extends PureComponent {
  componentDidMount() {
    this.props.getHomeMultidata();
  }
  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>当前计数{this.props.counter}</h2>
        <button onClick={(e) => this.props.decrement()}>-1</button>
        <button onClick={(e) => this.props.subAction(5)}>-5</button>
        <h1>Banners</h1>
        <ul>
          {this.props.banner.map((item, index) => {
            return <li key={item.acm}>{item.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    banner: state.banner,
    recommend: state.banner,
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
    getHomeMultidata() {
      dispatch(getHomeMultidataAction);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
