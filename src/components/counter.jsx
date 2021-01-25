import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 1,
    nums: [1, 2, 3, 4, 5, 6],
  };

  styles = {
    fontWeight: "bold",
    fontColor: "green",
    fontSize: 30,
  };
  /*constructor(){
    super();
    this.increment=this.increment.bind(this);
  }*/

  render() {
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.state.count}
        </span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.increment({ name: "charan+" })}
        >
          Increment
        </button>
        &nbsp;&nbsp;&nbsp;
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.decrement({ name: "charan-" })}
        >
          Decrement
        </button>
        {/* <ul>
          {this.state.nums.map((num) => (
            <li key={num}>{num}</li>
          ))}
        </ul> */}
      </div>
    );
  }
  increment = (n) => {
    this.setState({ count: this.state.count + 1 });
    console.log(n);
  };
  decrement = (n) => {
    if (this.state.count > 0) {
      console.log(n);
      this.setState({ count: this.state.count - 1 });
    }
  };

  getBadgeClasses() {
    let classes = "badge m-3 badge-";
    classes += this.state.c === 0 ? "primary" : "warning";
    return classes;
  }
}

export default Counter;
