import React from "react";

import { addAction, inAction } from "../store/actionCreators.js";

import { connect } from "react-redux";

function About(props) {
  return (
    <div>
      <hr />
      <h1>About</h1>
      <h2>当前计数{props.counter}</h2>
      <button onClick={(e) => props.increment()}>+1</button>
      <button onClick={(e) => props.addAction(5)}>+5</button>
      <h1>Recommend</h1>
      <ul>
        {props.recommend.map((item, index) => {
          return <li key={item.acm}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    banner: state.banner,
    recommend: state.recommend,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: function () {
      dispatch(inAction());
    },
    addAction: function (num) {
      dispatch(addAction(num));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(About);
