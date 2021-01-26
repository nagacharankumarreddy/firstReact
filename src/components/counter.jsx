import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.value,
    //nums: [1, 2, 3, 4, 5, 6],
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
  getCount() {
    if (this.state.value === 0) return "zero";
    return this.state.value;
  }
  render() {
    return (
      <div>
        {/*for children  this.props.children*/}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.getCount()}
        </span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.increment({ name: "+" })}
        >
          Increment
        </button>
        &nbsp;&nbsp;&nbsp;
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.decrement({ name: "-" })}
        >
          Decrement
        </button>
        &nbsp;&nbsp;&nbsp;
        <button className="btn btn-danger btn-sm" onClick={() =>this.props.onDelete(this.props.id)}>
          Delete
        </button>
        {/*for displaying lists <ul>
          {this.state.nums.map((num) => (
            <li key={num}>{num}</li>
          ))}
        </ul> */}
      </div>
    );
  }
  increment = (n) => {
    this.setState({ value: this.state.value + 1 });
    console.log(n);
  };
  decrement = (n) => {
    if (this.state.value > 0) {
      console.log(n);
      this.setState({ value: this.state.value - 1 });
    }
  };

  getBadgeClasses() {
    let classes = "badge m-3 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
