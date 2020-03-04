import React, { Component } from 'react'


class TodoList extends Component {

  componentDidUpdate(){
    this.props.inputElement.current.focus()
  }
  render(){
    return(
      <div className="TodoListMain">
        <div className="header">
          <form onSubmit={this.props.addItem}>
            <input id="input_id"
              placeholder = "Завдання"
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}
            />
            <button type="submit" id="button_id">Додати</button>
          </form>
        </div>
      </div>
    )
  }
}

export default TodoList
