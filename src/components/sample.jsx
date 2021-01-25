import React, { Component } from "react";
class Number extends Component {
  state = {
    c: 0,
    d: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
  };
  render() {
    return (
      <div>
        <span className="badge badge-primary m-3"> {this.disp()} </span>
        <br/>
        <img src={this.state.d} alt="plane"/>
      </div>
    );
  }
  disp() {
    const c = this.state.c;
    return c === 0 ? "zero" : c;
  }
}

export default Number;
