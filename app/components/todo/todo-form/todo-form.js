import React from 'react';

export default class TodoForm extends React.Component {

  render() {
  	let props = {
  		type: "text",
  		placeholder: "Enter Todo Item"
  	}
    return (
    	<form onSubmit={this.saveTodo}>
    		<button type="submit" tabIndex="2">Add</button>
    		<div><input onKeyDown={this.handleKeyDown} tabIndex="1" ref='newTodo' {...props} /></div>
    	</form>
    );
  }

  componentDidMount() {
   this.refs.newTodo.getDOMNode().focus(); 
  }

  saveTodo = (e) => {
  	e.preventDefault();
  	var node = React.findDOMNode(this.refs.newTodo);
  	var value = node.value;
  	this.props.onSave(value);
  	node.value = null;
  }
}
