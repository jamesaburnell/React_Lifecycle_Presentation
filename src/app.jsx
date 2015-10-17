'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

// tutorial1.js
var Box = React.createClass({


  render: function() {
    return (
      <button onClick={this.props.handleClick} className="box" style={{height:'100px',width:'100px'}}>
        {this.props.char}
      </button>
    );
  }
});
var Row = React.createClass({

  render: function() {
    return (
      <div className="row">
        <Box key="0"  handleClick={this.props.handleClick} char={this.props.data[0]}/>
        <Box key='1'  handleClick={this.props.handleClick} char={this.props.data[1]}/>
        <Box key='2'  handleClick={this.props.handleClick} char={this.props.data[2]}/>
      </div>

    )
  }
})

var Board = React.createClass({
  getInitialState: function() {
    return {winCheck: [
       ['-','-','-'],
       ['-','-','-'],
       ['-','-','-']
     ]
    }
  },
  tick: function (arg,param){
    // debugger;
    var rowClicked = param.charAt(4)
    var boxClicked = param.charAt(7)
    if(this.state.winCheck[rowClicked][boxClicked] === 'X') this.state.winCheck[rowClicked][boxClicked] = 'O'
    else this.state.winCheck[rowClicked][boxClicked] = 'X'
    this.setState ({winCheck: this.state.winCheck})
  },

  render: function() {
    return (
      <div className="board">
        <Row key='0' handleClick={this.tick} data={this.state.winCheck[0]}/>
        <Row key='1' handleClick={this.tick} data={this.state.winCheck[1]}/>
        <Row key='2' handleClick={this.tick} data={this.state.winCheck[2]}/>
      </div>
    )
  }
})
ReactDOM.render(
  <Board />,
  document.body
);
