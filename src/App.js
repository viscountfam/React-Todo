import React from 'react';
import todoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
const todo = [
  {
    task: 'Practice Italian',
    id: 1,
    completed: false
  },
  {
    task: 'Read for an hour',
    id: 2,
    completed: false
  },
  {
    task: 'Eat healthy',
    id: 3,
    completed: false
  },
  {
    task: 'Exercise Daily',
    id: 4,
    completed: false
  }

]

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    //initialize the state object
    this.state = {
      todoList: todo
    }
  }
  
  toggleItem = id => {
    
    const newTodoList = this.state.todoList.map(todo => {
      if (DataTransferItem.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
    });
    this.setState({
      todoList: newTodoList
    });
  };

  addTodo = todoName => {
    const newTodo = {
      name: todoName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todoList: [ ...this.state.todoList, newTodo]
    })
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} />
        <todoList todoList={this.state.todoList} />

      </div>
    );
  }
}

export default App;
