import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <input
        type='text'
        />
        <button>Submit</button>
        <button>Hide Completed</button>
      </div>
    )
  }
}
