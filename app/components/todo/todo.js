import React from 'react';
import TodoList from './todo-list/todo-list';
import TodoForm from './todo-form/todo-form';

export default class Todo extends React.Component {

  state = {
  	todoList: [
  		{item: "Learn React 101", selected: false},
  		{item: "Learn Flux", selected: false}
  	]
  }

  render() {

    return (
      <div className='app'>
     	<h3>{this.props.children}</h3>
        <TodoList 
        	onComplete={this._completeTodo} 
        	onDelete={this._deleteTodo} 
        	todoList={this.state.todoList} />
        <TodoForm onSave={this._saveTodo} />
      </div>
    );
  }

  _saveTodo = (todo) => {
  	this.setState({
  		todoList: this.state.todoList.concat({item: todo, selected: false})
  	});
  	console.log("I'm saving a todo:", this.state.todoList);
  }

  _deleteTodo = (index) => {
  	this.setState({
  		todoList: this.state.todoList.slice(0, index).concat(this.state.todoList.slice(index+1))
  	});
  	console.log("delete ", index);
  }

  _completeTodo = (index) => {
  	var newList = this.state.todoList.slice();
  	newList[index].selected = !newList[index].selected
  	this.setState({
 		todoList: newList
   	});
  }
}