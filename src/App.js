import React, { PureComponent } from "react";
import Home from "./page/home.js";
import About from "./page/about.js";
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />

        <hr />
        <About />
      </div>
    );
  }
}
