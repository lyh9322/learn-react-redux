import React from "react";

import { 
   addAction,
   inAction 
  } from "../store/actionCreators.js";
import { connect } from "../utils/connect";

function About(props) {
  return (
    <div>
      <hr />
      <h1>About</h1>
      <h2>当前计数{props.counter}</h2>
      <button onClick={(e) => props.increment()}>+1</button>
      <button onClick={(e) => props.addAction(5)}>+5</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
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
