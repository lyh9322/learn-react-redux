import React, { PureComponent } from "react";
import Home from "./page/home3.js";
import About from "./page/about3.js";
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
