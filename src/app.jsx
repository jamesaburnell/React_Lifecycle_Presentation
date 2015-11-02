'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var ReactMixin = {
  getInitialState: function(){
    return {
      count: 0
    };
  },
  componentWillMount: function() {
    console.log('this will mount');
  },
  update: function() {
    var countUp = this.state.count;
    countUp++;
    this.setState({count: countUp});
  },
};

var Welcome = React.createClass({
  mixins: [ReactMixin],
  render: function() {
    return (<div>
      This.state.foo: {this.state.count} <br />
      <br/>
      <hr/>
      <button
        onClick={this.update}>
        Update State
      </button>
    </div>);
  },
});

var App = React.createClass({
  mixins: [ReactMixin],
  componentWillMount: function() {
    setInterval(this.update, 1000);
  },
  render: function() {
    return (
      <div>
      <hr/>
      <Welcome/>
      <hr />
      <label>
        {this.state.count}
      </label>
  </div>
    )
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
