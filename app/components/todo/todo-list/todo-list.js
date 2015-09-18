import React from 'react';

export default class TodoList extends React.Component {

  render() {
    console.log(this.props.todoList);
  	var rows = this.props.todoList.map((todo, index) => ( 
      <li key={index}>
        <button onClick={this.deleteTodo.bind(null,index)}>X</button> 
        <label onClick={this.completeTodo.bind(null,index)} className={todo.selected ? 'todo-item-completed' : 'todo-item'}>
          {todo.item}
        </label>
      </li>
    ));

    var activeItems = this.props.todoList.filter(todo => {
      return !todo.selected
    });

    return (
    	<div>
			<ul className="todo-list">
				{rows}
			</ul>
      <div className="active-items">Total Todos: <b>{rows.length}</b>&nbsp;&nbsp;&nbsp; Active Todos: <b>{activeItems.length}</b></div>
		</div>
    );
  }

  deleteTodo = (index) => {
    this.props.onDelete(index);
  }

  completeTodo = (index) => {
    this.props.onComplete(index);
  }
}
