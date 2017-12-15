import React, { Component } from 'react';
import Hello from './Hello';

export default class Welcome extends Component {
  render() {
    return (
      <div className="App">
        Welcome
        <Hello parametre={'HelloWorld'} />
        <Hello image={'https://s3.amazonaws.com/owler-image/logo/bodecode-technology_owler_20160301_220443_original.png'} parametre={'HelloWorld'} />
      </div>
    );
  }
}
