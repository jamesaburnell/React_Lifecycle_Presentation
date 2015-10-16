'use strict';

var React = require('react');
// tutorial1.js
var Box = React.createClass({
  // getInitialState: function() {
  //   return {letter: '-'}
  // },
  // tick: function() {
  //   if(this.state.letter === 'X'){
  //     this.state.letter = 'O'
  //   }
  //   else{
  //     this.state.letter = 'X'
  //   }
  //   this.setState ({letter: this.state.letter})
  // },

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
        <Box key="0"  handleClick={this.props.handleClick} char={this.props.char[0]}/>
        <Box key='1'  handleClick={this.props.handleClick} char={this.state.char[1]}/>
        <Box key='2'  handleClick={this.props.handleClick} char={this.state.char[2]}/>
      </div>

    )
  }
})

var Board = React.createClass({
  getInitialState: function() {
    return {winCheck: {
       0: ['-','-','-'],
       1: ['-','-','-'],
       2: ['-','-','-']
    }}
  },
  tick: function (arg,param){
    var rowClicked = param.charAt(4)
    var boxClicked = param.charAt(7)
    if(this.state.winCheck[rowClicked][boxClicked] === 'X') this.state.winCheck[rowClicked][boxClicked] = 'O'
    else this.state.winCheck[rowClicked][boxClicked] = 'X'
    this.setState ({wincheck: this.state.wincheck})
  },

  render: function() {
    return (
      <div className="board">
        <Row key='0' handleClick={this.tick} char={this.state.wincheck.0}/>
        <Row key='1' handleClick={this.tick} char={this.state.wincheck.1}/>
        <Row key='2' handleClick={this.tick} char={this.state.wincheck.2}/>
      </div>
    )
  }
})
React.render(
  <Board />,
  document.body
);
