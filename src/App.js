import React, { Component, useState } from 'react';

// 1. Class Component
class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };

    this.incrementCount = this.incrementCount.bind(this);
  }

  incrementCount() {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  }

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <h2>Class Component Counter</h2>

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

// 2. Functional Component
function CounterButtonFunc() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h2>Functional Component Counter</h2>

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}

// 3. Display both components in one app
function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>
        My Counter App
      </h1>

      <Counter />

      <hr />

      <CounterButtonFunc />
    </div>
  );
}

export default App;