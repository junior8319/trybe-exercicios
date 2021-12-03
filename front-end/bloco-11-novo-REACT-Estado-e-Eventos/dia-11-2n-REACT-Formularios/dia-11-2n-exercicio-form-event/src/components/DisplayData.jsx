import React from 'react';

class DisplayData extends React.Component {
  render() {
    const { currentState } = this.props;
    return (
      <div>
        <strong>Nome:</strong><span>{ currentState.name }</span>
      </div>
    );
  }
}

export default DisplayData;
