import { Component } from 'react';

class Semaphore extends Component {
  render() {
    return (
      <div className="semaphore">
        <h3>ATENÇÃO</h3>
        <div className="semaphore-light" id="light-green"></div>
        <div className="semaphore-light" id="light-yellow"></div>
        <div className="semaphore-light" id="light-red"></div>
      </div>
    );
  }
}

export default Semaphore;
