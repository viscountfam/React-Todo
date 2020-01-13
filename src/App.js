import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
import './components/TodoComponents/Todo'
const todos = [
  {
    name: 'Practice Italian',
    id: 1,
    completed: false
  },
  {
    name: 'party',
    id: 2,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    //initialize the state object
    this.state = {
      todoList: todos
    };
  }
  
  toggleTodo = id => {
    
    const newTodoList = this.state.todoList.map(task => {
      if (task.id === id) {
        console.log("This is the task currently being checked for completion", task)
        return {
          ...task,
          completed: !task.completed
        };
      } else {
        return task;
      }
    });
    this.setState({
      todoList: newTodoList
    });
  };

  addTodo = todoText => {
    const newTodo = {
      name: todoText,
      id: Date.now(),
      completed: false
    }
    console.log("State inside of add Todo", this.state)
    this.setState({
      todoList: [ ...this.state.todoList, newTodo]
    })
    console.log("State after new todo entry", this.state)
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    console.log("State before Render", this.state)
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} />
        <TodoList todos={this.state.todoList} toggleTodo={this.toggleTodo} />

      </div>
    );
  }
}

export default App;
