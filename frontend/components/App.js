import React from 'react';
import Form from './Form';
import Todolist from './TodoList';









let idNum = 0
const getIdNum = () => ++idNum

const todos = [
  {
    name: 'Organize Garage',
    id: getIdNum(),
    completed: false
  },
  {
    name: 'Bake Cookies',
    id: getIdNum(),
    completed: true
  },
  {
    name: 'Take out trash',
    id: getIdNum(),
    completed: false
  }
]

const initialState = {
  todos,
}





export default class App extends React.Component {

handleAdd = (task) => {
  // 1. seState
  // 2. Change todos
  // 3. Make a copy todos
  // 4. Add a new todo to the end of our todo list

  const newTodo = {
    task: task,
    id: Date.now(),
    completed: false
  }


  this.setState({
    ...this.state,
    todos: [...this.state.todos, newTodo]
  });
}



  handleClear = () => { //28:00
    // 1. setState
    // 2. loop through all todos
    // 3. remove all todos that have completed === true
    // 4. save filtered todos to state
    this.setState({
      ...this.state, 
      todos: this.state.todos.filter(todo => {
        return (todo.completed === false);
      })
    });
  }




  state = initialState;

  render() {
    console.log('state is', this.state)
    const { todos } = this.state

    return (
      <div>
        <h2>Todos:</h2>
        <Todolist todos={todos}/>
        <Form todos={todos} handleAdd={this.handleAdd}/>
      </div>
    )
  }
}
