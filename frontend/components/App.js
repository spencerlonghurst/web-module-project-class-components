import React from 'react';
import Form from './Form';
import Todo from './Todo';
import Todolist from './TodoList';

let idNum = 0
const getIdNum = () => ++idNum

const list = [
  {
    name: 'Organize Garage',
    id: getIdNum(),
    completed: false
  },
  {
    name: 'Bake Cookies',
    id: getIdNum(),
    completed: false
  }
]

const initialState = {
  list,
}

export default class App extends React.Component {

  state = initialState;

  render() {
    console.log('state is', this.state)
    const { list } = this.state

    return (
      <div>
        <h2>Todos:</h2>
        <ul>
          {
            list.map((list) => {
              const { name, id } = list
              return (
                <li key={id}>
                  {name}
                </li>
              )
            })
          }
        </ul>
        <Todo />
        <Form />
      </div>
    )
  }
}
