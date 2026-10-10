import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    // Initialize state
    this.state = {
      count: 0
    };

    // Bind event handler
    this.incrementCount = this.incrementCount.bind(this);
  }

  // Event handler to increase count
  incrementCount() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Counter App</h1>
        <p>
          Current Count: <strong>{this.state.count}</strong>
        </p>
        <button onClick={this.incrementCount}>
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;