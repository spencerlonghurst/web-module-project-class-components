import React from 'react'

export default class Form extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    this.props.handleAdd();
  }

  

  render() {
    return (
      <form >
        <input
        type='text'
        placeholder='To do...'
        />
        <button
        onClick={this.handleSubmit}
        >Submit</button>
        <button
        onClick={this.handleClear}
        >
          Hide Completed</button>
      </form>
    )
  }
}
