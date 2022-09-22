import React, { PureComponent } from "react";
import Home from "./page/home2.js";
import About from "./page/about2.js";
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <About />
      </div>
    );
  }
}
