'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
// tutorial1.js
var App = React.createClass({
  getInitialState: function() {
      return {
        red: 0,
        green: 0,
        blue: 0
      };
  },

  update: function(e) {
     this.setState({
       red: this.refs.red.getDOMNode().value,
       green: this.refs.green.getDOMNode().value,
       blue: this.refs.blue.getDOMNode().value
     });
  },

  render: function() {
    return (
      <div>
        {this.state.txt}
        <hr/>
        <Widget ref='red' txt={this.state.txt} update={this.update}/>
        <label>{this.state.red}</label><br/>
        <Widget ref='green' txt={this.state.txt} update={this.update}/>
        <label>{this.state.green}</label><br/>
        <Widget ref='blue' txt={this.state.txt} update={this.update}/>
        <label>{this.state.blue}</label>
      </div>
    )
  }
});

var Widget = React.createClass({
  render: function() {
    return (
      <input type='range' min='0' max='255' onChange={this.props.update}/>
    )
  }



})

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
