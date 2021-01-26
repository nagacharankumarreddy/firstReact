import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 11 },
      { id: 3, value: 2 },
    ],
  };
  handleDelete= (counterId)=>{
    console.log("ondelete event",counterId);
    
  }
  render() {
    
    return (
      <div>
        {this.state.counters.map((num) => (
          <Counter key={num.id} value={num.value} onDelete={this.handleDelete} />
        ))}
        {//this.state.counters.map((num) => (
          //<Counter key={num.id} value={num.value} >
            //<h3>child {num.id}</h3>
          //</Counter>
        //))
      }
      </div>
    );
  }
}

export default Counters;
