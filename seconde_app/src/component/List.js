import React from 'react';

export default class List extends React.Component {
  test(){
    return this.props.todos[1];
  }

  render() {
    return (
        <div className="liste">
            {this.props.todos.length}
            <br/>
            {this.test()}
        </div>
    );
  }
}
