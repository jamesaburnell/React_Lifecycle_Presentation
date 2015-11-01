'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');
// tutorial1.js
var Welcome = React.createClass({
  getInitialState: function() {
    console.log('GetInitialState');
    return {foo : 1};
  },

  getDefaultProps: function() {
      console.log('GetDefaultProps');
      return {bar: 1};
  },

  update: function() {
    console.log('Updating State');
    var count = this.state.foo;
    count++;
    this.setState({foo: count});
  },

  render: function() {
    console.log('Render');
    return (<div>
      This.state.foo: {this.state.foo} <br />
      This.state.bar: {this.props.bar}
      <br/>
      <hr/>
      <button className="btn btn-success"
        onClick={this.update}>
        Update State
      </button>
    </div>);
  },

  componentWillMount: function() {
    console.log('ComponentWillMount');
  },

  componentDidMount: function() {
    console.log('ComponentDidMount');
  },

  shouldComponentUpdate: function(nextProps, nextState) {
    console.log('ShouldComponentUpdate');
    console.log(nextProps.bar, nextState.foo);
    return nextProps.bar === nextState.foo ? false : true;
    return true;
  },

  componentWillReceiveProps: function(nextProps) {
    console.log('ComponentWillRecieveProps');
  },

  componentWillUpdate: function() {
    console.log('ComponentWillUpdate');
  },

  componentDidUpdate: function() {
    console.log('ComponentDidUpdate');
  },

  componentWillUnmount: function() {
    console.log('componentWillUnmount');
  }
});

var App = React.createClass({
  getInitialState: function() {
      return {id: 1};
  },

  update: function(e) {
     console.log('Updating Props');
     console.log(e);
     var count = this.state.id;
     count++;
     this.setState({id: count});
  },

  render: function() {
    return (
      <div>
      <hr/>
      <Welcome bar={this.state.id} />
      <hr />
      <button type="button" className="btn btn-primary"
        onClick={this.update} onTouchStart={this.update}>
        Update Props
      </button>
  </div>
    )
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

var unmountBtn = document.getElementById('unmount');
unmountBtn.addEventListener('click', unmount);

function unmount() {
  console.log('Unmounting');
  ReactDOM.unmountComponentAtNode(document.getElementById('app'));
  unmountBtn.remove();
}
