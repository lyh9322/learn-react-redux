import React, { PureComponent } from "react";
import store from "../store";
import { subAction } from "../store/actionCreators.js";

export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: store.getState().counter,
    };
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        counter: store.getState().counter,
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    return (
      <div>
        <h2>当前计数{this.state.counter}</h2>
        <button onClick={(e) => this.decrement()}>-1</button>
        <button onClick={(e) => this.subAction()}>-5</button>
      </div>
    );
  }
  decrement() {
    store.dispatch(subAction(1));
  }
  subAction() {
    store.dispatch(subAction(5));
  }
}
