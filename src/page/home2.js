import React, { PureComponent } from "react";
import { subAction, deAction } from "../store/actionCreators.js";
import { connect } from "../utils/connect.js";

class Home extends PureComponent {
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
