import React, { PropTypes, Component } from 'react'
import TodoTextInput from './TodoTextInput'

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
    onFetch: PropTypes.func
  }

  handleSave = text => {
    if (text.length !== 0) {
      this.props.addTodo(text)
    }
  }

  onFetch = () => {
      this.props.onFetch && this.props.onFetch()
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <TodoTextInput newTodo
                       onSave={this.handleSave}
                       onFetch={this.onFetch}
                       placeholder="What needs to be done?"/>
      </header>
    )
  }
}
