import React, { Component } from 'react';

export default class Hello extends Component {
  render() {
    return (
      <div className="App">
        Hello
        <br />
        {this.props.parametre}
        <br />
        {this.props.image}
        <br />
        <img src={this.props.image} alt="bsdlifhs" />
      </div>
    );
  }
}
