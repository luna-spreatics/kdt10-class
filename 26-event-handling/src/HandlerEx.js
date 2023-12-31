import React, { Component } from 'react';

class HandlerEx extends Component {
  state = {
    message: 'Hello World!',
  };

  onClick = () => {
    this.setState({
      message: 'Goodbye World!',
    });
  };

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <br />
        <button onClick={this.onClick}>클릭</button>
      </div>
    );
  }
}

export default HandlerEx;
