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
  }
]

const initialState = {
  todos,
}

export default class App extends React.Component {

  state = initialState;

  render() {
    console.log('state is', this.state)
    const { todos } = this.state

    return (
      <div>
        <h2>Todos:</h2>
        <Todolist todos={todos}/>
        <Form />
      </div>
    )
  }
}
